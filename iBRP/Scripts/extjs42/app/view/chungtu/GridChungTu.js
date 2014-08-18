Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.store.StoreChungTu",
]);

Ext.define("iBRP.view.chungtu.GridChungTu", {
    extend: "Ext.grid.Panel",
    xtype: "gridchungtu",
    store: 'StoreChungTu',
    id: "idGirdChungTu",
    scroll: true,
    border: false,
    height: 625,
    tbar: [
        {
            xtype: 'button',
            id: 'btnChungTuThemMoi',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '<span>', //Thêm Mới
            icon: Globals.Langs.Common.toolbar_image_them_moi
        }, '-', {
            xtype: 'button',
            id: 'btnChungTuXoa',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '<span>',
            icon: Globals.Langs.Common.toolbar_image_xoa,
        }, '-', {
            xtype: 'button',
            id: 'btnChungTuIn',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in + '<span>',
            icon: Globals.Langs.Common.toolbar_image_in,
        }, '-', {
            xtype: 'button',
            id: 'btnChungTuKetThuc',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '<span>',
            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
        }
    ],
    columns: [
        {
            header: Globals.Langs.ChungTu.khoa,
            dataIndex: "KHOA",
            cls: 'gridTitleCenterCss',
            width: 200,
        },
        {
            header: Globals.Langs.ChungTu.so_phieu,
            dataIndex: "SOPHIEU",
            cls: 'gridTitleCenterCss',
            width: 400
        }
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreChungTu',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});