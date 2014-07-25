Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.hanghoa.TopMenu",
    "iBRP.view.hanghoa.GirdHangHoa",
    "iBRP.view.hanghoa.FormHangHoa",
]);

Ext.define('iBRP.view.hanghoa.LayoutHangHoa', {
    extend: 'Ext.window.Window',
    xtype: "layouthanghoa",
    initComponent: function () {
        Ext.apply(this, {
            title: '<span class="layoutTitle">' + Globals.Langs.HangHoa.danh_sach_hang_hoa + '</span>',
            id: 'mainWindowDMHangHoa',
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
                    { xtype: "hanghoatopmenu" }
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
                width: 500,
                autoScroll: true,
                items: [
                    { xtype: "formhanghoa" }
                ]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [
                    { xtype: "girdhanghoa" }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});