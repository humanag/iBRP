Ext.define("iBRP.view.hanghoa.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilterhanghoa",
    id: "idformfilterhanghoa",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.HangHoa.ten_hang_hoa,
           defaults: { xtype: "textfield"},
           items: [
                {
                    id: "ftenhanghoa",
                    name: "FTENHANGHOA",
                    fieldLabel: Globals.Langs.HangHoa.ten_hang_hoa
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterHangHoa'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnHangHoaFilter'
        }
    ]
});
