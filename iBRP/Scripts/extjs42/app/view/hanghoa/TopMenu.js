Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.hanghoa.TopMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "hanghoatopmenu",
    initComponent: function () {
        Ext.apply(this, {
            items:
                    [
                        {
                            xtype: 'button',
                            id: 'btnHangHoaThemMoi',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_them_moi,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnHangHoaXoa',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_xoa,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnHangHoaIn',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_in,
                        }, '-', {
                            xtype: 'button',
                            id: 'btnHangHoaKetThuc',
                            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '</span>',
                            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
                        }
                    ]
        });
        this.callParent(arguments);
    }
});