export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'date',
            type: 'datetime',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'projectType',
            title: 'Project type',
            type: 'string',
            options: {
                list: [
                    { value: 'personal', title: 'Personal' },
                    { value: 'client', title: 'Client' },
                    { value: 'coursework', title: 'Coursework' },
                    { value: 'trainingCourse', title: 'Training Course' },

            ]
            }
        },
        {
            name: 'link',
            type: 'url',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                { type: 'string' },
            ],
            options: {
                layout: 'tags'
            },

        }
    ],
}