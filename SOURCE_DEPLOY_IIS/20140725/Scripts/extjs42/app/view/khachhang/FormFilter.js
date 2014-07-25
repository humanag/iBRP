Ext.define("iBRP.view.khachhang.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilterkhachhang",
    id: "idformfilterkhachhang",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.KhachHang.khach_hang,
           defaults: { xtype: "textfield"},
           items: [
                //{
                //    id: "fmanghanh",
                //    name: "FMANGANH",
                //    fieldLabel: Globals.Langs.NganhHang.ma_nganh
                //},
                {
                    id: "ftenkhachhang",
                    name: "FTENKHACHHANG",
                    fieldLabel: Globals.Langs.KhachHang.ten_khach_hang
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterKhachHang'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnKhachHangFilter'
        }
    ]
});
