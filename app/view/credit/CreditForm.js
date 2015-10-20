Ext.define('ExtJS5Grid.view.credit.CreditForm', {
    extend: 'Ext.window.Window',
    title: 'Сохранение',
    modal: true,
    width: 320,
    height: 240,
    layout: 'fit',
    standardSubmit: true,
    buttons: [{
        text: 'Сохранить',
        handler: 'onSave'
    }],
    items: [{
        xtype: 'form',
        layout: 'fit',
        itemId: 'save_form',
        items: [{
            xtype: 'textarea',
            fieldLabel: 'Значение',
            labelWidth: 60,
            labelStyle: 'font-weight: bold',
            name: 'save_value',
            itemId: 'save_value'
        }]
    }]
});
