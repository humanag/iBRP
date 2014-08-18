Ext.define("iBRP.view.chungtu.FormChungTu", {
    extend: "Ext.form.Panel",
    xtype: "formchungtu",
    id: "idformchungtu",
    border: false,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.ChungTu.chung_tu,
           defaults: { xtype: "textfield", disabled: true },
           items: [
                {
                    id: "khoa",
                    name: "KHOA",
                    xtype: "hidden",
                    fieldLabel: Globals.Langs.ChungTu.khoa
                },
                {
                    id: "sophieu",
                    name: "SOPHIEU",
                    fieldLabel: Globals.Langs.ChungTu.so_phieu
                },
           ]
       }
    ],
    buttons: [{
        text: '<span class="buttonOnLayout">' + Globals.Langs.Common.button_luu + '</span>',
        id: 'btnChungTuLuu',
        icon: Globals.Langs.Common.button_image_luu,
        disabled: true
    }
    ]
});
