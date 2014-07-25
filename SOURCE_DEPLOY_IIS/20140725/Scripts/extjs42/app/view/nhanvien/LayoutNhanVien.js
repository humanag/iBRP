Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.nhanvien.TopMenu",
    "iBRP.view.nhanvien.GirdNhanVien",
    "iBRP.view.nhanvien.FormNhanVien",
]);

Ext.define('iBRP.view.nhanvien.LayoutNhanVien', {
    extend: 'Ext.window.Window',
    xtype: "layoutnhanvien",
    initComponent: function () {
        Ext.apply(this, {
            title: '<span class="layoutTitle">' + Globals.Langs.NhanVien.danh_sach_nhan_vien + '</span>',
            id: 'mainWindowDMNhanVien',
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
                    { xtype: "nhanvientopmenu" }
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
                    { xtype: "formnhanvien" }
                ]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [
                    { xtype: "girdnhanvien" }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});