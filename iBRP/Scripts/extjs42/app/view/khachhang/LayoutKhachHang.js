Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.khachhang.TopMenu",
    "iBRP.view.khachhang.GirdKhachHang",
    "iBRP.view.khachhang.FormKhachHang",
]);

Ext.define('iBRP.view.khachhang.LayoutKhachHang', {
    extend: 'Ext.window.Window',
    xtype: "layoutkhachhang",
    initComponent: function () {
        Ext.apply(this, {
            title: '<span class="layoutTitle">' + Globals.Langs.KhachHang.danh_sach_khach_hang + '</span>',
            id: 'mainWindowDMKhachHang',
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
                    { xtype: "khachhangtopmenu" }
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
                    { xtype: "formkhachhang" }
                ]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [
                    { xtype: "girdkhachhang" }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});