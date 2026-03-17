/**
 * Static DE-to-DE hierarchy configuration.
 *
 * This is the ONLY source of truth for the lineage graph structure.
 * Do NOT infer relationships from lineage.json — that file is only
 * used to display DE output columns on node click.
 *
 * Rule: one primary parent per child DE.
 */

export const HIERARCHY = [
    // Companies → Org structure
    { parent: 'DE-Companies', child: 'DE-Divisions', via: 'CompanyId' },
    { parent: 'DE-Divisions', child: 'DE-Departments', via: 'DivisionId' },
    { parent: 'DE-Companies', child: 'DE-TypologyGroups', via: 'CompanyId' },
    { parent: 'DE-TypologyGroups', child: 'DE-Typologies', via: 'TypologyGroupId' },
    { parent: 'DE-Companies', child: 'DE-ServicesGroups', via: 'CompanyId' },
    { parent: 'DE-ServicesGroups', child: 'DE-Services', via: 'ServiceGroupId' },
    { parent: 'DE-Companies', child: 'DE-WorkTypes', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-Taxes', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-Holidays', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-RateCardsColumns', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-ProjectsTypes', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-ProjectsClassifications', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-ExpenseType', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-ExpenseSheets', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-Users', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-CompaniesAdditionalInformation', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-Currencies', via: 'CompanyId' },
    { parent: 'DE-Companies', child: 'DE-Suppliers', via: 'CompanyId' },

    // Users → People-related
    { parent: 'DE-Users', child: 'DE-UserCosts', via: 'UserId' },
    { parent: 'DE-Users', child: 'DE-Employees', via: 'UserId' },
    { parent: 'DE-Users', child: 'DE-UsersAdditionalInformation', via: 'UserId' },
    { parent: 'DE-Users', child: 'DE-Leaves', via: 'UserId' },
    { parent: 'DE-Users', child: 'DE-Attendances', via: 'UserId' },

    // Geography
    { parent: 'DE-Countries', child: 'DE-Cities', via: 'CountryId' },

    // Clients → Products & Projects
    { parent: 'DE-Clients', child: 'DE-Brands', via: 'ClientId' },
    { parent: 'DE-Clients', child: 'DE-Products', via: 'ClientId' },
    { parent: 'DE-Clients', child: 'DE-Projects', via: 'ClientId' },
    { parent: 'DE-Clients', child: 'DE-Requests', via: 'ClientId' },
    { parent: 'DE-Clients', child: 'DE-ClientsCompanies', via: 'ClientId' },

    // Projects → Jobs & financials
    { parent: 'DE-Projects', child: 'DE-Jobs', via: 'ProjectId' },
    { parent: 'DE-Projects', child: 'DE-ProjectsAdditionalInformation', via: 'ProjectId' },
    { parent: 'DE-Projects', child: 'DE-ProjectsPlannedTime', via: 'ProjectId' },
    { parent: 'DE-Projects', child: 'DE-Bills', via: 'ProjectId' },
    { parent: 'DE-Projects', child: 'DE-PurchaseOrders', via: 'ProjectId' },
    { parent: 'DE-Projects', child: 'DE-EstimatesQuotes', via: 'ProjectId' },

    // Estimates → sub-entities
    { parent: 'DE-EstimatesQuotes', child: 'DE-EstimatesBillingConditions', via: 'EstimateId' },
    { parent: 'DE-EstimatesQuotes', child: 'DE-EstimatesQuotesMonth', via: 'EstimateId' },

    // Jobs → time tracking
    { parent: 'DE-Jobs', child: 'DE-TimeSheets', via: 'JobId' },
    { parent: 'DE-Jobs', child: 'DE-Workloads', via: 'JobId' },

    // Leaves → deleted / counts
    { parent: 'DE-Leaves', child: 'DE-LeavesDeleted', via: 'LeaveId' },
    { parent: 'DE-Leaves', child: 'DE-LeavesCount', via: null },
    { parent: 'DE-LeavesDeleted', child: 'DE-LeavesDeletedCount', via: null },

    // Jobs → counts
    { parent: 'DE-Jobs', child: 'DE-JobsCount', via: null },

    // TimeSheets → deleted / counts
    { parent: 'DE-TimeSheets', child: 'DE-TimeSheetsDeleted', via: null },
    { parent: 'DE-TimeSheetsDeleted', child: 'DE-TimeSheetsDeletedCount', via: null },

    // Estimates → counts
    { parent: 'DE-EstimatesQuotes', child: 'DE-EstimatesQuotesCount', via: null },

    // Expenses
    { parent: 'DE-ExpenseType', child: 'DE-Expenses', via: 'ExpenseTypeId' },

    // Types & Stages
    { parent: 'DE-BusinessObjectTypes', child: 'DE-Types', via: 'BusinessObjectTypeId' },
    { parent: 'DE-Types', child: 'DE-Stages', via: 'TypeId' },

    // Typology bridges
    { parent: 'DE-TypologyGroups', child: 'DE-TypologyGroupsCompanies', via: 'TypologyGroupId' },
    { parent: 'DE-TypologyGroups', child: 'DE-TypologyGroupsDepartments', via: 'TypologyGroupId' },
];

export const ROOTS = [
    'DE-Companies',
    'DE-Clients',
    'DE-Countries',
    'DE-BusinessObjectTypes',
    'DE-UserTypes',
];

/** All DE names that appear in the hierarchy (parents + children + roots). */
export const ALL_DE_NAMES = [
    ...new Set([
        ...ROOTS,
        ...HIERARCHY.flatMap((h) => [h.parent, h.child]),
    ]),
].sort();
