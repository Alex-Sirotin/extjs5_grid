Ext.define('ExtJS5Grid.store.Credit', {
    extend: 'Ext.data.Store',
    model: 'ExtJS5Grid.model.Credit',
    data : [{
        start_date: '01.01.2012',
        period: 30,
        finish_date: '01.02.2013',
        sum: 100000,
        rate: 10,
        full_sum: 110000,
        status: 1
    }, {
        start_date: '01.02.2012',
        period: 30,
        finish_date: '01.03.2013',
        sum: 200000,
        rate: 5,
        full_sum: 210000,
        status: 0
    }, {
        start_date: '01.02.2013',
        period: 40,
        finish_date: '01.03.2014',
        sum: 20000000,
        rate: 5,
        full_sum: 21000000,
        status: 0
    }]
});