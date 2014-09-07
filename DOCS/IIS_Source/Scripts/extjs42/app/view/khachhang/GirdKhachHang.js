Ext.define("iBRP.view.khachhang.GirdKhachHang", {
    extend: "Ext.grid.Panel",
    xtype: "girdkhachhang",
    store: 'StoreKhachHang',
    id: "idGirdKhachHang",
    scroll: true,
    columns: [
        { header: Globals.Langs.KhachHang.ma_khach_hang, dataIndex: "MAKHACHHANG", width: 100, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.KhachHang.ten_khach_hang, dataIndex: "TENKHACHHANG", width: 400, cls: 'gridTitleCenterCss' },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreKhachHang',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});