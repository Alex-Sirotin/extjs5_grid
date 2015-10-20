Ext.define('ExtJS5Grid.view.credit.CreditController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.credit',

    onPrint: function() {
        window.open('http://www.yandex.ru/', '_blank');
    },

    onDelete: function(view, rowIndex, colIndex, item, e, record, row) {
    var
        title = 'Удаление',
        msg = 'Вы действительно хотите удалить данную запись?';

        Ext.Msg.confirm(title, msg, function(r) {
            if ('yes' === r) {
                record.drop();
            }
        });
    },

    onSave: function(btn, event) {
    var 
        win = btn.up('window'),
        form = win.down('form');

        form.submit({
            url: 'index.html',
            //method: 'GET',
            success: function(form, action) {
                Ext.Msg.alert('Выполнено', 'Сохранение выполнено успешно', function() {
                     win.close();
                });
            },
            failure: function(form, action) {
                Ext.Msg.alert('Ошибка', 'Ошибка при сохранении!', function() {
                    win.close();
                });
            }
        });
    },

    onClickToolbarButton: function (o, e) {
        Ext.create('ExtJS5Grid.view.credit.CreditForm').show();
    }

});
