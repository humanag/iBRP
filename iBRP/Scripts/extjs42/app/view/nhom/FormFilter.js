Ext.define("iBRP.view.nhom.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilternhom",
    id: "idformfilternhom",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.Nhom.nhom,
           defaults: { xtype: "textfield"},
           items: [
                {
                    id: "fmanhom",
                    name: "FMANHOM",
                    fieldLabel: Globals.Langs.Nhom.ma_nhom
                },
                {
                    id: "ftenhom",
                    name: "FTENNHOM",
                    fieldLabel: Globals.Langs.Nhom.ten_nhom
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterNhom'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnNhomFilter'
        }
    ]
});
