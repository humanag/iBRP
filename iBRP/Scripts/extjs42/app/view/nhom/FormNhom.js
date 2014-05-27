Ext.define("iBRP.view.nhom.FormNhom", {
    extend: "Ext.form.Panel",
    xtype: "formnhom",
    id: "idformnhom",
    border: false,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.Nhom.nhom,
           defaults: { xtype: "textfield", disabled: true },
           items: [
                {
                    id: "mannhom",
                    name: "MANHOM",
                    xtype: "hidden",
                    fieldLabel: Globals.Langs.Nhom.ma_nhom
                },
                {
                    id: "tennhom",
                    name: "TENNHOM",
                    fieldLabel: Globals.Langs.Nhom.ten_nhom,
                    allowBlank: false
                },
                {
                    id: "manganh",
                    name: "MANGANH",
                    xtype: "combobox",
                    fieldLabel: Globals.Langs.NganhHang.ten_nganh,
                    queryMode: 'remote',
                    displayField: 'TENNGANH',
                    valueField: 'MANGANH',
                    allowBlank: false,
                    store: new Ext.data.Store({
                        fields: ['MANGANH', 'TENNGANH'],
                        autoLoad: true,
                        proxy: {
                            type: "ajax",
                            api: {
                                read: "/NganhHang/Options",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MANGANH'
                            }
                        },
                    }),
                }
           ]
       }
    ],
    buttons: [{
        text: Globals.Langs.Common.button_luu,
        id: 'btnNhomLuu',
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
