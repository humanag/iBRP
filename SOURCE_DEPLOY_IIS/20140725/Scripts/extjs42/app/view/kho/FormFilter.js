Ext.define("iBRP.view.kho.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilterkho",
    id: "idformfilterkho",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.Kho.kho,
           defaults: { xtype: "textfield"},
           items: [
                {
                    id: "ftenkho",
                    name: "FTENKHO",
                    fieldLabel: Globals.Langs.Kho.ten_kho
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterKho'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnKhoFilter'
        }
    ]
});
