Ext.define("iBRP.view.nganhhang.GirdNganhHang", {
    extend: "Ext.grid.Panel",
    xtype: "girdnganhhang",
    store: 'StoreNganhHang',
    id: "idGirdNganhHang",
    scroll: true,
    columns: [
        { header: Globals.Langs.NganhHang.ma_nganh, dataIndex: "MANGANH", width: 100, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.NganhHang.ten_nganh, dataIndex: "TENNGANH", width: 400, cls: 'gridTitleCenterCss' },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreNganhHang',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});