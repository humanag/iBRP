Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.khacct.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "khaccttopmenu",
    initComponent: function () {
        Ext.apply(this, {
            items:
                    [
                        {
                            xtype: 'button',
                            id: 'btnKhacCTThemMoi',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '<span>', //Thêm Mới
                            icon: Globals.Langs.Common.toolbar_image_them_moi,
                        //}, '-', {
                        //    xtype: 'button',
                        //    id: 'btnKhacCTChinhSua',
                        //    text: Globals.Langs.Common.toolbar_chinh_sua,
                        //    icon: Globals.Langs.Common.toolbar_image_chinh_sua,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhacCTXoa',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '<span>',
                            icon: Globals.Langs.Common.toolbar_image_xoa,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhacCTIn',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in+ '<span>',
                            icon: Globals.Langs.Common.toolbar_image_in,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnKhacCTKetThuc',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '<span>',
                            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
                        }
                        //, '-', {
                        //    xtype: 'button',
                        //    id: 'btnKhacCTShowFilter',
                        //    text: Globals.Langs.Common.toolbar_loc_du_lieu,
                        //    icon: Globals.Langs.Common.toolbar_image_loc_du_lieu,
                        //}
                    ]
        });
        this.callParent(arguments);
    }
});