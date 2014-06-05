Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.nganhhang.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "nganhhangtopmenu",
    initComponent: function () {
        Ext.apply(this, {
            items:
                    [
                        {
                            xtype: 'button',
                            id: 'btnNganhHangThemMoi',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_them_moi,
                        //}, '-', {
                        //    xtype: 'button',
                        //    id: 'btnNganhHangChinhSua',
                        //    text: Globals.Langs.Common.toolbar_chinh_sua,
                        //    icon: Globals.Langs.Common.toolbar_image_chinh_sua,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNganhHangXoa',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_xoa,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNganhHangIn',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_in,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNganhHangKetThuc',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
                        },
                        //'-', {
                        //    xtype: 'button',
                        //    id: 'btnNganhHangShowFilter',
                        //    text: Globals.Langs.Common.toolbar_loc_du_lieu,
                        //    icon: Globals.Langs.Common.toolbar_image_loc_du_lieu,
                        //}
                    ]
        });
        this.callParent(arguments);
    }
});