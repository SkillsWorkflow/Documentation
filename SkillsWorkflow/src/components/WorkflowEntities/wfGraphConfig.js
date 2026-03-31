/**
 * Static Workflow entity hierarchy.
 *
 * This is the source of truth for the workflow graph structure.
 * Each entry defines a parent → child relationship with the
 * linking field shown as the edge label.
 */

export const HIERARCHY = [
    // Workflow → core children
    { parent: 'Workflow', child: 'Stage', via: 'WorkflowId' },
    { parent: 'Workflow', child: 'Transition', via: 'WorkflowId' },
    { parent: 'Workflow', child: 'Stage Mapping', via: 'WorkflowId' },

    // Stage → sub-entities
    { parent: 'Stage', child: 'Stage Type', via: 'StageTypeId' },
    { parent: 'Stage', child: 'Stage Team', via: 'StageId' },
    { parent: 'Stage', child: 'Translations', via: 'Localizations' },

    // Transition → sub-entities
    { parent: 'Transition', child: 'Stage', via: 'From / To Stage' },
    { parent: 'Transition', child: 'Action', via: 'TransitionId' },
    { parent: 'Transition', child: 'Role', via: 'TransitionId' },
    { parent: 'Transition', child: 'Motive', via: 'TransitionId' },
    { parent: 'Transition', child: 'Custom Action', via: 'TransitionId' },

    // Stage Mapping → stages it links
    { parent: 'Stage Mapping', child: 'Stage', via: 'SetStageId' },
];

export const ROOTS = ['Workflow'];

/** All entity names that appear in the hierarchy. */
export const ALL_ENTITY_NAMES = [
    ...new Set([
        ...ROOTS,
        ...HIERARCHY.flatMap((h) => [h.parent, h.child]),
    ]),
].sort();
