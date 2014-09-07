Ext.define("iBRP.view.hanghoa.GirdHangHoa", {
    extend: "Ext.grid.Panel",
    xtype: "girdhanghoa",
    store: 'StoreHangHoa',
    id: "idGirdHangHoa",
    scroll: true,
    columns: [
        { header: Globals.Langs.HangHoa.ma_hang_hoa, dataIndex: "MAHANGHOA", width: 100, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.HangHoa.ten_hang_hoa, dataIndex: "TENHANGHOA", width: 400, cls: 'gridTitleCenterCss' },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreHangHoa',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});