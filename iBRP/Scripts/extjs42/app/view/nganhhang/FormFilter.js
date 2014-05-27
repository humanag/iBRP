Ext.define("iBRP.view.nganhhang.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilternganhhang",
    id: "idformfilternganhhang",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.NganhHang.nganh_hang,
           defaults: { xtype: "textfield"},
           items: [
                //{
                //    id: "fmanghanh",
                //    name: "FMANGANH",
                //    fieldLabel: Globals.Langs.NganhHang.ma_nganh
                //},
                {
                    id: "ftennganh",
                    name: "FTENNGANH",
                    fieldLabel: Globals.Langs.NganhHang.ten_nganh
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterNganhHang'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnNganhHangFilter'
        }
    ]
});
