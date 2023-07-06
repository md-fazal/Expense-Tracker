export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'userName',
            type: 'string',
            title: 'User Name',
        },
        {
            name: 'image',
            type: 'string',
            title: 'ImageUrl',
        },
        {
            name: 'expenses',
            title: 'Expenses',
            type: 'array',
            of: [{type: 'expense'}]
        }
    ]
}