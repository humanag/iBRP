Ext.require([
//    'Ext.form.Panel',
//    'Ext.layout.container.Anchor',
    'Ext.form.*',
    'Ext.window.Window'
]);

Ext.define('iBRP.view.LayoutLoginForm', {
    extend: 'Ext.window.Window',
    initComponent: function() {
        Ext.apply(this, {
            autoShow: true,
            title: 'Login',
            width: 350,
            autoHeight: true,
            draggable: false,
            resizable: false,
            closable: false,
            layout: 'fit',
            plain: true,
            items: [Ext.create('iBRP.view.LoginForm')]
        });
        this.callParent(arguments);
    }
});