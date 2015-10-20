Ext.define('ExtJS5Grid.view.credit.Credit', {
    extend: 'Ext.container.Container',
    requires: [
        'ExtJS5Grid.view.credit.CreditController',
        'ExtJS5Grid.view.credit.CreditModel'
    ],

    xtype: 'app-credit-grid',

    controller: 'credit',
    viewModel: {
        type: 'credit'
    },

    items: [{
        xtype: 'grid',
        title: 'История займов по заемщику',
        width: '100%',
        store: 'Credit',
        columns: [{
            text: 'Дата',
            dataIndex: 'start_date',
            flex: 3,
            formatter: 'date("d.m.Y")'
        }, {
            text: 'Срок',
            dataIndex: 'period',
            flex: 3,
            renderer: function(value) {
                return value + ' дн.';
            }
        }, {
            text: 'Дата пог.',
            dataIndex: 'finish_date',
            flex: 3,
            formatter: 'date("d.m.Y")'
        }, {
            text: 'Тело займа',
            dataIndex: 'sum',
            flex: 4,
            formatter: 'number("0,000.00")',
            align: 'right'
        }, { 
            text: '%',
            dataIndex: 'rate',
            flex: 1,
            align: 'right'
        }, { 
            text: 'Сумма +%',
            dataIndex: 'full_sum',
            flex: 4,
            formatter: 'number("0,000.00")',
            align: 'right'
        }, { 
            text: 'Статус',
            dataIndex: 'status',
            flex: 5,
            renderer: function(v) {
                switch (v) {
                    case 0: return 'выдан';
                    case 1: return 'погашен';
                }
            }
        }, {
            //text: 'Операции',
            xtype: 'actioncolumn',
            items: [{
                icon: '../resources/print.png',
                tooltip: 'Печать',
                handler: 'onClickActionButton'
            }, {
                icon: '../resources/delete.png',
                tooltip: 'Удалить',
                handler: 'onClickActionButton'
            }]
        }
        ],
        tbar: [
            {xtype: 'button', text: 'Выдать займ', handler: 'onClickToolbarButton'},
            {xtype: 'button', text: 'Просмотр займа', handler: 'onClickToolbarButton'},
            {xtype: 'button', text: 'Информация', handler: 'onClickToolbarButton'}
        ]
    }]
});