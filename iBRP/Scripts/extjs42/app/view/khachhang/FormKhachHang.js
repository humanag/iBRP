Ext.define("iBRP.view.khachhang.FormKhachHang", {
    extend: "Ext.form.Panel",
    xtype: "formkhachhang",
    id: "idformkhachhang",
    border: false,
    items: [
       {
           xtype: "fieldset",
           title: Globals.Langs.KhachHang.khach_hang,
           defaults: { xtype: "textfield", disabled: true },
           items: [
                {
                    id: "tenkhachhang",
                    name: "TENKHACHHANG",
                    fieldLabel: Globals.Langs.KhachHang.ten_khach_hang,
                    allowBlank: false
                },
           ]
       }
    ],
    buttons: [{
        text: '<span class="buttonOnLayout">' + Globals.Langs.Common.button_luu + '</span>' ,
        id: 'btnKhachHangLuu',
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
