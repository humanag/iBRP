Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.khachhang.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "khachhangtopmenu",
    initComponent: function () {
        Ext.apply(this, {
            items:
                    [
                        {
                            xtype: 'button',
                            id: 'btnKhachHangThemMoi',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_them_moi,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhachHangXoa',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_xoa,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhachHangIn',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_in,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhachHangKetThuc',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
                        },
                        //'-', {
                        //    xtype: 'button',
                        //    id: 'btnKhachHangShowFilter',
                        //    text: Globals.Langs.Common.toolbar_loc_du_lieu,
                        //    icon: Globals.Langs.Common.toolbar_image_loc_du_lieu,
                        //}
                    ]
        });
        this.callParent(arguments);
    }
});