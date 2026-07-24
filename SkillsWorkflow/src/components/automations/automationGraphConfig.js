/**
 * Static Automation Workflow models.
 *
 * This is the source of truth for the automation flow diagrams.
 * Unlike the workflow-entities graph (a parent → child hierarchy),
 * an automation is a linear flow: an event triggers it, an optional
 * condition gates it, and a chain of actions runs between the
 * mandatory Start and Result actions.
 *
 * Each preset bundles:
 *   - nodes: { id, role } — role drives styling (see adapter ROLE_STYLE).
 *   - flow:  { from, to, label } — directed steps; label sits on the edge.
 *   - info:  { [id]: { description, examples, docPath? } } — shown on click.
 *
 * Add a new example automation by adding another preset here and
 * rendering it with <AutomationGraph preset="yourKey" />.
 */

// ── The generic model (the anatomy every automation shares) ──
const MODEL = {
    nodes: [
        { id: 'Trigger', role: 'event' },
        { id: 'Condition', role: 'optional' },
        { id: 'Start', role: 'anchor' },
        { id: 'Actions', role: 'work' },
        { id: 'Result', role: 'anchor' },
    ],
    flow: [
        { from: 'Trigger', to: 'Condition', label: 'event fires' },
        { from: 'Condition', to: 'Start', label: 'if met' },
        { from: 'Start', to: 'Actions', label: 'next' },
        { from: 'Actions', to: 'Result', label: 'next' },
    ],
    info: {
        Trigger: {
            description:
                'The system event that starts the automation — for example a document changing stage, a record being created, or an inbound webhook call.',
            examples: 'When a project is created, run the automation.',
        },
        Condition: {
            description:
                'An optional filter that decides whether the automation should proceed. If the condition is not met, nothing runs.',
            examples: "Only continue when the project's total budget is above a threshold.",
        },
        Start: {
            description:
                'The mandatory first action. Every Automation Workflow must have exactly one Start — it is where execution begins.',
            examples: 'The entry point that hands off to your first real action via "next".',
            docPath: './actions#start',
        },
        Actions: {
            description:
                "The chain of actions that does the work. Each action produces a result you can reference in later actions with {{['ActionName']}}, and points to the next one via \"next\".",
            examples: 'Call a REST API, convert data to CSV, send an email — chained in sequence.',
            docPath: './actions',
        },
        Result: {
            description:
                'The mandatory final action. It returns a structured HTTP response, useful when the triggering system waits for an answer.',
            examples: 'Return status 200 with a JSON body once the chain completes.',
            docPath: './actions#result',
        },
    },
};

// ── A concrete example: notify an external system on project creation ──
const NOTIFY = {
    nodes: [
        { id: 'Project created', role: 'event' },
        { id: 'Start', role: 'anchor' },
        { id: 'NotifyChannel', role: 'work' },
        { id: 'Result', role: 'anchor' },
    ],
    flow: [
        { from: 'Project created', to: 'Start', label: 'triggers' },
        { from: 'Start', to: 'NotifyChannel', label: 'next' },
        { from: 'NotifyChannel', to: 'Result', label: 'next' },
    ],
    info: {
        'Project created': {
            description: 'The system event that fires this automation.',
            examples: 'A user creates a new project in Skills Workflow.',
        },
        Start: {
            description: 'The mandatory entry point. Hands off to the first action.',
            examples: 'Points to NotifyChannel via "next".',
            docPath: './actions#start',
        },
        NotifyChannel: {
            description:
                'A REST action that posts a message to an external system, using data from the trigger.',
            examples: "POST to a webhook with the new project's name and id.",
            docPath: './actions#rest',
        },
        Result: {
            description: 'Returns a 200 response once the message has been sent.',
            examples: 'Confirms the automation completed successfully.',
            docPath: './actions#result',
        },
    },
};

// ── Recipe: export data to a CSV file and deliver it ──
const CSV_DELIVERY = {
    nodes: [
        { id: 'Start', role: 'anchor' },
        { id: 'Get data', role: 'work' },
        { id: 'Create CSV', role: 'work' },
        { id: 'Deliver file', role: 'work' },
        { id: 'Result', role: 'anchor' },
    ],
    flow: [
        { from: 'Start', to: 'Get data', label: 'next' },
        { from: 'Get data', to: 'Create CSV', label: 'next' },
        { from: 'Create CSV', to: 'Deliver file', label: 'next' },
        { from: 'Deliver file', to: 'Result', label: 'next' },
    ],
    info: {
        Start: { description: 'Entry point.', examples: 'Points to the first Rest action.' },
        'Get data': {
            description: 'A Rest action that fetches the rows to export — for example from a named analytics query.',
            examples: 'POST to /analytics/globalQuery/.../execute.',
        },
        'Create CSV': {
            description: 'Turns the fetched rows into a CSV file, selecting and ordering columns.',
            examples: "data: {{['GetData'].Content.Data}} with a dataColumns list.",
        },
        'Deliver file': {
            description: 'A Rest action that sends the CSV on — attach it as Base64 with the ToBase64 pipe.',
            examples: "{{['CreateCsv']$ | ToBase64}} in the request body.",
        },
        Result: { description: 'Returns the outcome once the file is delivered.', examples: 'Status 200.' },
    },
};

// ── Recipe: send an email when something happens ──
const EMAIL_NOTIFY = {
    nodes: [
        { id: 'Start', role: 'anchor' },
        { id: 'Get details', role: 'work' },
        { id: 'Send email', role: 'work' },
        { id: 'Result', role: 'anchor' },
    ],
    flow: [
        { from: 'Start', to: 'Get details', label: 'next' },
        { from: 'Get details', to: 'Send email', label: 'next' },
        { from: 'Send email', to: 'Result', label: 'next' },
    ],
    info: {
        Start: { description: 'Entry point.', examples: 'Points to the first action.' },
        'Get details': {
            description: 'An optional Rest action that fetches extra details to include in the email.',
            examples: 'Fetch the record that triggered the automation.',
        },
        'Send email': {
            description: 'An E-mail action that sends the notification, with an HTML body and optional attachments.',
            examples: 'Subject, body, toAddress and fromDisplayName.',
        },
        Result: { description: 'Returns once the email is sent.', examples: 'Status 200.' },
    },
};

export const PRESETS = {
    model: MODEL,
    notify: NOTIFY,
    csvDelivery: CSV_DELIVERY,
    emailNotify: EMAIL_NOTIFY,
};
