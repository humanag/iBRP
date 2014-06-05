Ext.define("iBRP.view.nhom.GirdNhom", {
    extend: "Ext.grid.Panel",
    xtype: "girdnhom",
    store: 'StoreNhom',
    id: "idGirdNhom",
    scroll: true,
    columns: [
        { header: Globals.Langs.Nhom.ma_nhom, dataIndex: "MANHOM", width: 100 },
        { header: Globals.Langs.Nhom.ten_nhom, dataIndex: "TENNHOM", width: 400 },
        { header: Globals.Langs.NganhHang.ten_nganh, dataIndex: "TENNGANH", width: 400 },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreNhom',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});