Ext.define("iBRP.view.kho.GirdKho", {
    extend: "Ext.grid.Panel",
    xtype: "girdkho",
    store: 'StoreKho',
    id: "idGirdKho",
    scroll: true,
    columns: [
        { header: Globals.Langs.Kho.ma_kho, dataIndex: "MAKHO", width: 100, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.Kho.ten_kho, dataIndex: "TENKHO", width: 400, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.Kho.dien_thoai, dataIndex: "DIENTHOAI", width: 400, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.Kho.dia_chi, dataIndex: "DIA_CHI", width: 400, cls: 'gridTitleCenterCss' },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreKho',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});