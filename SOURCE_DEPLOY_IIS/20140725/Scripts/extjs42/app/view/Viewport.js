Ext.require([
    'iBRP.view.nganhhang.LayoutNganhHang',
    'iBRP.view.home.LayoutHome',
    'iBRP.view.home.MainMenu'
]);


Ext.define('iBRP.view.Viewport', {
    extend: 'Ext.container.Viewport',
    initComponent: function () {
        Ext.apply(this, {
            layout: 'border',
            id: 'main',
            items: [
                {
                    region: "north",
                    border: false,
                    tbar: [
                        { xtype: 'mainmenu' },
                    ]
                },
                {
                    region: 'center',
                    border: false,
                    html: '<h1>Quản Lý Hệ Thống iBRP.</h1>'
                }
            ]
        });
        this.callParent(arguments);
    }
});