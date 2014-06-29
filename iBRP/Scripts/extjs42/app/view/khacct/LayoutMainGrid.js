Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.khacct.GridKhacCT",
    "iBRP.view.khacct.GridKhac",
]);

Ext.define('iBRP.view.khacct.LayoutMainGrid', {
    extend: 'Ext.panel.Panel',
    xtype: "layoutkhacctmaingrid",
    initComponent: function () {
        Ext.apply(this, {
            id: 'mainGridKhacCT',
            border: false,
            items: [
            {
                //Vung luoi o giua
                region: 'center',
                xtype: 'tabpanel',
                activeTab: 0,
                items: [
                {
                    title: Globals.Langs.KhacCT.danh_sach_khac,
                    xtype: 'gridkhac',
                },
                {
                    title: Globals.Langs.KhacCT.danh_sach_khac_ct,
                    xtype: 'gridkhacct',
                }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});