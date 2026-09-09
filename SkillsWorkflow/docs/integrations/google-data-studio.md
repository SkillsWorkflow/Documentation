---
id: google-data-studio
title: Google Data Studio
description: "Copies Skills Workflow data into Google BigQuery for reporting in Google Data Studio (Looker Studio)."
sidebar_label: Google Data Studio
---

### Description

This integration copies Skills Workflow data into **Google BigQuery**. A loader runs in the agency's own Google Cloud project, calls the Skills Workflow data extraction named queries, and writes each one to a table in the `skills_workflow` dataset.

Google Data Studio (Looker Studio) is then connected to BigQuery using Google's own BigQuery connector. The agency builds its own reports and charts. The integration delivers the data; it does not deliver reports.

Skills Workflow is the source of truth. Nothing written in BigQuery or in a report returns to Skills Workflow.

---

### Requirements

- **Skills Workflow API access.** The agency's `tenant` slug, `tenant_id`, `app_id` and `app_secret`. Request these from the Skills Workflow team. Where a user context is required, use a dedicated read-only integration user rather than a person's account.
- **A Google Cloud project with billing enabled.** Use a separate project per agency where possible.
- **The Google Cloud CLI**, installed and initialised on the machine that runs the installation.
- **Google permissions.** The account running the installation must be able to enable APIs, create service accounts, change IAM, build containers, deploy Cloud Run jobs, create secrets, and create Cloud Scheduler jobs. Report authors need BigQuery Data Viewer and BigQuery Job User on that project.

---

### Configuration

#### 1. Get the loader package

Download the latest loader release, [skills-workflow-bigquery-1.0.1.zip](https://github.com/SkillsWorkflow/GoogleBigQuery/releases/latest). Unpack it and work from the package directory:

```bash
curl -LO https://github.com/SkillsWorkflow/GoogleBigQuery/releases/download/v1.0.1/skills-workflow-bigquery-1.0.1.zip
unzip skills-workflow-bigquery-1.0.1.zip
cd skills-workflow-bigquery-1.0.1
chmod +x scripts/deploy.sh scripts/grant_report_access.sh
```

#### 2. Prepare the tenant credentials

Copy `credentials.example.json` to a file kept outside source control and replace the placeholders with the agency's values:

```json
{
  "tenant": "agency-slug",
  "tenant_id": "tenant-application-id",
  "app_id": "application-id",
  "app_secret": "application-secret",
  "user_id": "optional-operational-user-id"
}
```

If the user ID is not known, omit `user_id` and supply `username` and `password` instead. The loader authenticates at the start of each run and uses the user ID it receives.

The installation uploads this file to Google Secret Manager. The values are never placed in BigQuery, in the container image, or in a Google Data Studio configuration. Do not email the file or commit it.

#### 3. Install the loader

Run the installation from the package directory. Use `skills_workflow` as the dataset name:

```bash
PROJECT_ID="your-google-cloud-project" \
CREDENTIALS_FILE="/absolute/path/to/credentials.json" \
BQ_DATASET="skills_workflow" \
REGION="europe-west1" \
BQ_LOCATION="EU" \
./scripts/deploy.sh
```

The installation enables the required APIs, creates the service accounts, uploads the secret, builds the image, deploys the Cloud Run job, and creates the Cloud Scheduler job. It can be re-run to apply a new image, a new secret version, or a changed schedule.

These settings are optional and take the defaults below:

| Setting | Default | Purpose |
| --- | --- | --- |
| `REGION` | `europe-west1` | Cloud Run and Scheduler region |
| `BQ_LOCATION` | `EU` | BigQuery dataset location |
| `BQ_DATASET` | `skills_workflow` | Dataset the tables are written to |
| `SCHEDULE` | `0 * * * *` | Cron expression that starts the loader |
| `TIME_ZONE` | `UTC` | Timezone for the schedule |
| `JOB_NAME` | `skills-workflow-loader` | Cloud Run job name |
| `SECRET_NAME` | `skills-workflow-credentials` | Secret Manager secret |
| `REPOSITORY` | `skills-workflow` | Artifact Registry repository |

Keep Cloud Run and BigQuery in compatible regions.

#### 4. Run and verify the first synchronization

```bash
gcloud run jobs execute skills-workflow-loader \
  --region europe-west1 \
  --project your-google-cloud-project \
  --wait
```

Open BigQuery in the Google Cloud Console and check the status and row count of each query:

```sql
select query_name, status, row_count, finished_at, error_message
from `your-google-cloud-project.skills_workflow._sw_sync_runs`
order by finished_at desc
```

If a named query is not enabled for the tenant, the other queries still load and the failure is recorded against that query.

#### 5. Give report authors access

Grant access to a Google group rather than to individual accounts where possible:

```bash
PROJECT_ID="your-google-cloud-project" \
MEMBER="group:report-authors@example.com" \
./scripts/grant_report_access.sh
```

This grants BigQuery Data Viewer and BigQuery Job User. Report authors can query the dataset; they cannot change the loader's secret or its Cloud Run configuration.

#### 6. Connect Google Data Studio

1. In Google Data Studio, select **Create → Data source**.
2. Choose Google's **BigQuery** connector.
3. Select the Google Cloud project, the `skills_workflow` dataset, and the table or view you need. Table names follow the named query, so `DE-Projects` becomes `de_projects`.
4. Select **Connect**, review the field types and default aggregations, then select **Create report** and add your charts.
5. Repeat for each additional source. Use data blending for simple combinations, and a BigQuery view for business logic reused across several reports.

No Skills Workflow credentials are entered in Google Data Studio. Google IAM controls who reaches the data.

---

### Data updates

Cloud Scheduler starts the loader hourly, on the default `0 * * * *` schedule. Each query then has its own refresh interval: operational queries hourly, other transactional queries every four hours, reference data daily. To change an interval for one tenant, set `SW_QUERY_OVERRIDES_JSON` on that tenant's Cloud Run job:

```json
{
  "DE-History": {"enabled": false},
  "DE-TimeSheets": {"refresh_minutes": 30, "order_by_field": "TimeSheetId"}
}
```

A successful refresh replaces that query's table with a full current snapshot. If a load fails, the previous table stays in place. `_sw_query_catalog` lists the available tables and their refresh intervals.

When Skills Workflow adds or changes a returned field, the next successful load updates the BigQuery table schema. Select **Refresh fields** on the Google Data Studio data source before the new field appears in a report.

Google Data Studio caches query results. A report can show older figures than BigQuery holds until the report is refreshed.

Data in reports is therefore not real-time. BigQuery storage and queries are billed by Google to the agency's Cloud project. Set a billing budget and a BigQuery query quota before sharing report access widely.

---

### Related documentation

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api) — the named queries the loader reads.
