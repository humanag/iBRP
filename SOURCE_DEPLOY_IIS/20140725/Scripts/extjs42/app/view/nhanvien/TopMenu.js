Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.nhanvien.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "nhanvientopmenu",
    initComponent: function () {
        Ext.apply(this, {
            items:
                    [
                        {
                            xtype: 'button',
                            id: 'btnNhanVienThemMoi',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_them_moi,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNhanVienXoa',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_xoa,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNhanVienIn',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_in,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNhanVienKetThuc',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
                        },
                        //'-', {
                        //    xtype: 'button',
                        //    id: 'btnNhanVienShowFilter',
                        //    text: Globals.Langs.Common.toolbar_loc_du_lieu,
                        //    icon: Globals.Langs.Common.toolbar_image_loc_du_lieu,
                        //}
                    ]
        });
        this.callParent(arguments);
    }
});