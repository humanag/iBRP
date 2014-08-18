Ext.define("iBRP.view.chungtu.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilterchungtu",
    id: "idformfilterchungtu",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.ChungTu.chung_tu,
           defaults: { xtype: "textfield"},
           items: [
                {
                    id: "fsophieu",
                    name: "FSOPHIEU",
                    fieldLabel: Globals.Langs.ChungTu.so_phieu
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterChungTu'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnChungTuFilter'
        }
    ]
});
