Ext.define("iBRP.view.nhanvien.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilternhanvien",
    id: "idformfilternhanvien",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.NhanVien.ten_nhan_vien,
           defaults: { xtype: "textfield"},
           items: [
                //{
                //    id: "fmanghanh",
                //    name: "FMANGANH",
                //    fieldLabel: Globals.Langs.NganhHang.ma_nganh
                //},
                {
                    id: "ftennhanvien",
                    name: "FTENNHANVIEN",
                    fieldLabel: Globals.Langs.NhanVien.ten_nhan_vien
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterNhanVien'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnNhanVienFilter'
        }
    ]
});
