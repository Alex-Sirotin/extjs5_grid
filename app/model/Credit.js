Ext.define('ExtJS5Grid.model.Credit', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'start_date', type: 'date' },
        { name: 'period', type: 'int' },
        { name: 'finish_date', type: 'date' },
        { name: 'sum', type: 'number' },
        { name: 'rate', type: 'number' },
        { name: 'full_sum', type: 'number' },
        { name: 'status', type: 'int' }
    ]
});