Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.kho.TopMenu",
    "iBRP.view.kho.GirdKho",
    "iBRP.view.kho.FormKho",
]);

Ext.define('iBRP.view.kho.LayoutKho', {
    extend: 'Ext.window.Window',
    xtype: "layoutkho",
    initComponent: function () {
        Ext.apply(this, {
            title: '<span class="layoutTitle">' + Globals.Langs.Kho.danh_sach_kho + '</span>',
            id: 'mainWindowDMKho',
            draggable: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            modal: true,
            width: document.body.offsetWidth,
            height: document.body.offsetHeight,
            layout: 'border',
            border: false,
            closable: true,
            margin: Globals.Vars.lenghtOfMainMenu + ' 0 0 0',
            items: [
            {
                //Menu top phia tren
                region: 'north',
                tbar: [
                    { xtype: "khotopmenu" }
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
                margins: '0 0 0 5',
                width: 400,
                items: [
                    { xtype: "formkho" }
                ]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [
                    { xtype: "girdkho" }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});