Ext.define("iBRP.view.nganhhang.FormNganhHang", {
    extend: "Ext.form.Panel",
    xtype: "formnganhhang",
    id: "idformnganhhang",
    border: false,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.NganhHang.nganh_hang,
           defaults: { xtype: "textfield", disabled: true },
           items: [
                {
                    id: "manghanh",
                    name: "MANGANH",
                    xtype: "hidden",
                    fieldLabel: Globals.Langs.NganhHang.ma_nganh
                },
                {
                    id: "tennganh",
                    name: "TENNGANH",
                    fieldLabel: Globals.Langs.NganhHang.ten_nganh,
                    allowBlank: false
                },
           ]
       }
    ],
    buttons: [{
        text: Globals.Langs.Common.button_luu,
        id: 'btnNganhHangLuu',
        icon: Globals.Langs.Common.button_image_luu,
        disabled: true
    }
    //{
    //    text: Globals.Langs.Common.button_nhap_lai,
    //    id: 'btnNganhHangLamLai',
    //    icon: Globals.Langs.Common.button_image_nhap_lai,
    //    disabled: true
    //}
    ]
});
