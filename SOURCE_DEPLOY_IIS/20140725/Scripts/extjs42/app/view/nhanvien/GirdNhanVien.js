Ext.define("iBRP.view.nhanvien.GirdNhanVien", {
    extend: "Ext.grid.Panel",
    xtype: "girdnhanvien",
    store: 'StoreNhanVien',
    id: "idGirdNhanVien",
    scroll: true,
    columns: [
        { header: Globals.Langs.NhanVien.ma_nhan_vien, dataIndex: "MANHANVIEN", width: 100, cls: 'gridTitleCenterCss' },
        { header: Globals.Langs.NhanVien.ten_nhan_vien, dataIndex: "TENNHANVIEN", width: 400, cls: 'gridTitleCenterCss' },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreNhanVien',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});