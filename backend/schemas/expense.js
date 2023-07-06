export default {
    name: 'expense',
    type: 'document',
    title: 'Expense',
    fields: [
        {
            name: 'expenseTitle',
            type: 'string',
            titie: 'ExpenseTitle'
        },
        {
            name: 'date',
            type: 'date',
            title: 'Date',
            options: {
                dateFormat: 'DD-MM-YYYY'
            }
        },
        {
            name: 'amount',
            type: 'number',
            title: 'Amount'
        }, 
        {
            name: 'tags',
            type: 'string',
            title: 'Tags'
        }
    ]   
}