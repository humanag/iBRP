Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.khacct.TopMenu",
    "iBRP.view.khacct.GridKhacCT",
    "iBRP.view.khacct.FormKhacCT",
    "iBRP.view.khacct.LayoutMainGrid",
]);

Ext.define('iBRP.view.khacct.LayoutKhacCT', {
    extend: 'Ext.window.Window',
    xtype: "layoutkhacct",
    initComponent: function () {
        Ext.apply(this, {
            //title: '<span class="layoutTitle">' + Globals.Langs.KhacCT.danh_sach_khac + '</span>',
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
                //Vung luoi o giua
                region: 'center',
                items: [
                    { xtype: "layoutkhacctmaingrid" }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});