Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.khacct.TopMenu",
    "iBRP.view.khacct.GirdKhacCT",
    "iBRP.view.khacct.FormKhacCT",
]);

Ext.define('iBRP.view.khacct.LayoutKhacCT', {
    extend: 'Ext.window.Window',
    xtype: "layoutkhacct",
    initComponent: function () {
        Ext.apply(this, {
            title: '<span class="layoutTitle">' + Globals.Langs.KhacCT.danh_sach_khac_ct + '</span>',
            id: 'mainWindowDMKhacCT',
            modal: true,
            draggable: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            width: document.body.offsetWidth,
            height: document.body.offsetHeight,
            margin: Globals.Vars.lenghtOfMainMenu + ' 0 0 0',
            layout: 'border',
            border: false,
            closable: true,
            items: [
            {
                //Menu top phia tren
                region: 'north',
                tbar: [
                    { xtype: "khaccttopmenu" }
                ]
            }, {
                //Form ben trai
                region: 'east',
                id: 'panelLeft',
                title: '<span class="thongtinchitiet">' + Globals.Langs.Common.thong_tin_chi_tiet + '</span>',
                split: true,
                collapsed: false,
                collapsible: true,
                animCollapse: true,
                collapseMode: 'mini',
                width: 400,
                margins: '0 0 0 5',
                items: [
                    { xtype: "formkhacct" }
                ]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [
                    { xtype: "girdkhacct" }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});