Ext.require([
    Ext.toolbar.Toolbar
]);

Ext.define('iBRP.view.home.MainMenu', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: "mainmenu",
    initComponent: function () {
        Ext.apply(this, {
            items: [{
                text: Globals.Langs.Common.mainmenu_he_thong,
                iconCls: 'icon-table',
                menu: [
                    {
                        text: 'Thoat',
                        id: 'mainMenuThoat'
                    }
                ]
            }, '-', {
                text: Globals.Langs.Common.mainmenu_san_pham,
                iconCls: 'icon-chart',
                menu: [{ text: 'Menu 3' }, { text: 'Menu 4' }]
            }, '-', {
                text: Globals.Langs.Common.mainmenu_danh_muc,
                iconCls: 'icon-chart',
                menu: [
                    {
                        text: Globals.Langs.Common.main_menu_submenu_dm_nganhhang,
                        id: 'mainMenuDMNganhHang',
                    }, {
                        text: Globals.Langs.Common.main_menu_submenu_dm_nhom,
                        id: 'mainMenuDMNhom',
                    }, {
                        text: Globals.Langs.Common.main_menu_submenu_dm_khach_hang,
                        id: 'mainMenuDMKhachHang',
                    }, , {
                        text: Globals.Langs.Common.main_menu_submenu_dm_khac_ct,
                        id: 'mainMenuDMKhacCT',
                    }
                ]
            }, '-', {
                text: Globals.Langs.Common.mainmenu_bao_cao,
                iconCls: 'icon-chart',
                menu: [{ text: 'Menu 3' }, { text: 'Menu 4' }]
            }, '-', {
                text: Globals.Langs.Common.mainmenu_tro_giup,
                iconCls: 'icon-chart',
                menu: [{ text: 'Menu 3' }, { text: 'Menu 4' }]
            }]
        });
        this.callParent(arguments);
    }
});