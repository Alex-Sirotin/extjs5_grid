Ext.define('ExtJS5Grid.view.credit.CreditController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.credit',

    onClickActionButton: function (view, rowIndex, colIndex, item, e, record, row) {
        console.log([view, rowIndex, colIndex, item, e, record, row]);
    },

    onClickToolbarButton: function (o, e) {
        console.log([o, e]);
    }

});
