Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.kho.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "khotopmenu",
    initComponent: function () {
        Ext.apply(this, {
            items:
                    [
                        {
                            xtype: 'button',
                            id: 'btnKhoThemMoi',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_them_moi,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhoXoa',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_xoa,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhoIn',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_in,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhoKetThuc',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
                        }
                    ]
        });
        this.callParent(arguments);
    }
});