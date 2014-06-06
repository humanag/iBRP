Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.nhom.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "nhomtopmenu",
    initComponent: function () {
        Ext.apply(this, {
            items:
                    [
                        {
                            xtype: 'button',
                            id: 'btnNhomThemMoi',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '<span>', //Thêm Mới
                            icon: Globals.Langs.Common.toolbar_image_them_moi,
                        //}, '-', {
                        //    xtype: 'button',
                        //    id: 'btnNhomChinhSua',
                        //    text: Globals.Langs.Common.toolbar_chinh_sua,
                        //    icon: Globals.Langs.Common.toolbar_image_chinh_sua,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNhomXoa',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '<span>',
                            icon: Globals.Langs.Common.toolbar_image_xoa,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNhomIn',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in+ '<span>',
                            icon: Globals.Langs.Common.toolbar_image_in,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnNhomKetThuc',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '<span>',
                            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
                        }
                        //, '-', {
                        //    xtype: 'button',
                        //    id: 'btnNhomShowFilter',
                        //    text: Globals.Langs.Common.toolbar_loc_du_lieu,
                        //    icon: Globals.Langs.Common.toolbar_image_loc_du_lieu,
                        //}
                    ]
        });
        this.callParent(arguments);
    }
});