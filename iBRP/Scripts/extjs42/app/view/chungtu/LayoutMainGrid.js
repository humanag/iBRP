Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.chungtu.LayoutChiTiet",
]);

Ext.define('iBRP.view.chungtu.LayoutMainGrid', {
    extend: 'Ext.panel.Panel',
    xtype: "layoutchungtumaingrid",
    initComponent: function () {
        Ext.apply(this, {
            id: 'mainGridChungTu',
            border: false,
            items: [
            {
                //Vung luoi o giua
                region: 'center',
                xtype: 'tabpanel',
                activeTab: 0,
                items: [
                    {
                        title: Globals.Langs.ChungTu.danh_sach_chung_tu,
                        xtype: 'gridchungtu',
                    },
                    {
                        title: Globals.Langs.ChungTu.chi_tiet,
                        xtype: 'layoutchitiet'
                    }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});