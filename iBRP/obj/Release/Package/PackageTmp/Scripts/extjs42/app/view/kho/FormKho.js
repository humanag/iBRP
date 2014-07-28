Ext.define("iBRP.view.kho.FormKho", {
    extend: "Ext.form.Panel",
    xtype: "formkho",
    id: "idformkho",
    border: false,
    items: [
       {
           xtype: "fieldset",
           title: Globals.Langs.Kho.kho,
           defaults: { xtype: "textfield", disabled: true },
           items: [
                {
                    id: "makho",
                    name: "MAKHO",
                    fieldLabel: Globals.Langs.Kho.ma_kho,
                    xtype: "hidden"
                },
                {
                    id: "tenkho",
                    name: "TENKHO",
                    fieldLabel: Globals.Langs.Kho.ten_kho,
                    allowBlank: false
                },
                {
                    id: "diachi",
                    name: "DIACHI",
                    fieldLabel: Globals.Langs.Kho.dia_chi
                },
                {
                    id: "dienthoai",
                    name: "DIENTHOAI",
                    fieldLabel: Globals.Langs.Kho.dien_thoai
                },
                {
                    id: "fax",
                    name: "fax",
                    fieldLabel: Globals.Langs.Kho.fax
                },
                {
                    id: "thukho",
                    name: "THUKHO",
                    fieldLabel: Globals.Langs.Kho.thu_kho
                },
           ]
       }
    ],
    buttons: [{
        text: '<span class="buttonOnLayout">' + Globals.Langs.Common.button_luu + '</span>' ,
        id: 'btnKhoLuu',
        icon: Globals.Langs.Common.button_image_luu,
        disabled: true
    }
    ]
});
