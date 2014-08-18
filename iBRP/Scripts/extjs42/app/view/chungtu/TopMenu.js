Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.chungtu.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "chungtutopmenu",
    initComponent: function () {
        Ext.apply(this, {
            items:
                    [
                        {
                            xtype: 'button',
                            id: 'btnChungTuThemMoi',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '<span>', //Thêm Mới
                            icon: Globals.Langs.Common.toolbar_image_them_moi,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnChungTuXoa',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '<span>',
                            icon: Globals.Langs.Common.toolbar_image_xoa,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnChungTuIn',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in+ '<span>',
                            icon: Globals.Langs.Common.toolbar_image_in,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnChungTuKetThuc',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '<span>',
                            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
                        }                        
                    ]
        });
        this.callParent(arguments);
    }
});