Ext.define("iBRP.view.khacct.GirdKhacCT", {
    extend: "Ext.grid.Panel",
    xtype: "girdkhacct",
    store: 'StoreKhacCT',
    id: "idGirdKhacCT",
    scroll: true,
    columns: [
        { header: Globals.Langs.KhacCT.ten_khac, dataIndex: "TENKHAC", width: 400, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.KhacCT.ma_khac_ct, dataIndex: "MAKHAC_CT", width: 100, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.KhacCT.ten_khac_ct, dataIndex: "TENKHAC_CT", width: 400, cls: 'gridTitleCenterCss' },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreKhacCT',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});