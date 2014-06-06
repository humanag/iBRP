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
            title: '<span class="layoutTitle">' + Globals.Langs.Nhom.danh_sach_nhom + '</span>',
            id: 'mainWindowDMNhom',
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
                    { xtype: "nhomtopmenu" }
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