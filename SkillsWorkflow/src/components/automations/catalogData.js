/**
 * Catalog of automation action types, grouped by category.
 *
 * This drives the browsable card grid at the top of actions.md.
 * Each action's `anchor` must match the auto-generated heading id of
 * its `## <Name>` section further down that page (github-slugger:
 * lowercased, spaces → "-").
 *
 * When you document a new action in actions.md, add it here too.
 */

export const CATEGORIES = [
    {
        title: 'Flow control & structure',
        blurb: 'Shape how the automation runs — branch, loop, wait, and compose workflows.',
        actions: [
            { name: 'Start', anchor: 'start', desc: 'The mandatory entry point where execution begins.' },
            { name: 'Result', anchor: 'result', desc: 'The mandatory final action; returns the response.' },
            { name: 'Case', anchor: 'case', desc: 'Validate and branch the flow based on conditions.' },
            { name: 'Loop', anchor: 'loop', desc: 'Iterate by triggering a sub-workflow per item.' },
            { name: 'Reduce', anchor: 'reduce', desc: 'Group data and aggregate over a property.' },
            { name: 'Await', anchor: 'await', desc: 'Pause execution for a given duration.' },
            { name: 'ExecuteSubWorkflow', anchor: 'executesubworkflow', desc: 'Run a sub-workflow and use its result.' },
            { name: 'ExecuteIntegrationWorkflow', anchor: 'executeintegrationworkflow', desc: 'Run another workflow and wait for its result.' },
            { name: 'EnqueueBackgroundWork', anchor: 'enqueuebackgroundwork', desc: 'Run a workflow in the background without waiting.' },
            { name: 'ClearContext', anchor: 'clearcontext', desc: 'Remove context properties no longer needed.' },
        ],
    },
    {
        title: 'Integration & authentication',
        blurb: 'Talk to external systems and obtain the tokens needed to reach them.',
        actions: [
            { name: 'Rest', anchor: 'rest', desc: 'Call external REST APIs (GET/POST/PUT/PATCH/DELETE).' },
            { name: 'Sftp', anchor: 'sftp', desc: 'Upload, download or move files over SFTP.' },
            { name: 'OAuth2Authentication', anchor: 'oauth2authentication', desc: 'Get a token via the OAuth2 Authorization Code flow.' },
            { name: 'AzureAdAuthentication', anchor: 'azureadauthentication', desc: 'Get an auth token from Azure Active Directory.' },
            { name: 'AzureAdCertificateAuthentication', anchor: 'azureadcertificateauthentication', desc: 'Azure AD authentication using a certificate.' },
        ],
    },
    {
        title: 'Data & mapping',
        blurb: 'Reshape, validate and store the data flowing between actions.',
        actions: [
            { name: 'Map', anchor: 'map', desc: 'Map previous results into a list of key/values.' },
            { name: 'MapFromObject', anchor: 'mapfromobject', desc: 'Map form names to properties from a template.' },
            { name: 'Merge', anchor: 'merge', desc: 'Merge a JSON result to update properties.' },
            { name: 'XmlMap', anchor: 'xmlmap', desc: 'Parse XML into key/values using XPath.' },
            { name: 'ConvertFromJsonDataTable', anchor: 'convertfromjsondatatable', desc: 'Convert JSON between DataTable and standard formats.' },
            { name: 'JsonValidation', anchor: 'jsonvalidation', desc: 'Validate required fields on a JSON payload.' },
            { name: 'SetParameter', anchor: 'setparameter', desc: 'Store a value as a context parameter.' },
            { name: 'ConfigurationKeys', anchor: 'configurationkeys', desc: 'Read a Skills Workflow configuration key.' },
            { name: 'AnalyticsNamedQuery', anchor: 'analyticsnamedquery', desc: 'Run a named query on the Analytics service.' },
        ],
    },
    {
        title: 'Files & documents',
        blurb: 'Move files and produce documents from workflow data.',
        actions: [
            { name: 'Download', anchor: 'download', desc: "Download a file's content from a URL." },
            { name: 'Csv', anchor: 'csv', desc: 'Export data as a CSV file.' },
            { name: 'CSVMap', anchor: 'csvmap', desc: 'Convert CSV data into a JSON array.' },
            { name: 'CreatePdfFromDocument', anchor: 'createpdffromdocument', desc: 'Generate a PDF from a document layout.' },
        ],
    },
    {
        title: 'Lists',
        blurb: 'Build and edit lists held in the workflow context.',
        actions: [
            { name: 'CreateList', anchor: 'createlist', desc: 'Create a list stored in the context.' },
            { name: 'AddToList', anchor: 'addtolist', desc: 'Append values to an existing list.' },
            { name: 'RemoveFromList', anchor: 'removefromlist', desc: 'Remove values from an existing list.' },
        ],
    },
    {
        title: 'Messaging & templates',
        blurb: 'Reach people and render content from templates.',
        actions: [
            { name: 'E-mail', anchor: 'e-mail', desc: 'Send emails with attachments and custom content.' },
            { name: 'ApplyTemplate', anchor: 'applytemplate', desc: 'Render content using the Liquid template engine.' },
        ],
    },
];
