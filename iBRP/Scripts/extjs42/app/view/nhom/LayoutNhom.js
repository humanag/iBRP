Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.nhom.TopMenu",
    "iBRP.view.nhom.GirdNhom",
    "iBRP.view.nhom.FormNhom",
]);

Ext.define('iBRP.view.nhom.LayoutNhom', {
    extend: 'Ext.window.Window',
    xtype: "layoutnhom",
    initComponent: function () {
        Ext.apply(this, {
            title: Globals.Langs.Nhom.danh_sach_nhom,
            id: 'mainWindowDMNhom',
            draggable: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            width: document.body.offsetWidth,
            height: document.body.offsetHeight - Globals.Vars.lenghtOfMainMenu,
            layout: 'border',
            border: false,
            closable: true,
            items: [
            {
                //Menu top phia tren
                region: 'north',
                tbar: [
                    { xtype: "nhomtopmenu" }
                ]
            }, {
                //Form ben trai
                region: 'east',
                id: 'panelLeft',
                title: Globals.Langs.Common.thong_tin_chi_tiet,
                split: true,
                collapsed: false,
                collapsible: true,
                animCollapse: true,
                collapseMode: 'mini',
                width: 400,
                items: [
                    { xtype: "formnhom" }
                ]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [
                    { xtype: "girdnhom" }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});