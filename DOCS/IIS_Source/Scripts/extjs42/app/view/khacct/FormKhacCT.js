Ext.define("iBRP.view.khacct.FormKhacCT", {
    extend: "Ext.form.Panel",
    xtype: "formkhacct",
    id: "idformkhacct",
    border: false,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.KhacCT.khacct,
           defaults: { xtype: "textfield", disabled: true },
           items: [
                {
                    id: "mankhacct",
                    name: "MAKHAC_CT",
                    xtype: "hidden",
                    fieldLabel: Globals.Langs.KhacCT.ma_khac_ct
                },
                {
                    id: "tenkhacct",
                    name: "TENKHAC_CT",
                    fieldLabel: Globals.Langs.KhacCT.ten_khac_ct,
                    allowBlank: false
                },
                //{
                //    id: "mahac",
                //    name: "MAKHAC",
                //    xtype: "combobox",
                //    fieldLabel: Globals.Langs.KhacCT.ten_khac,
                //    queryMode: 'local',
                //    displayField: 'TENKHAC',
                //    valueField: 'MAKHAC',
                //    allowBlank: false,
                //    store: new Ext.data.Store({
                //        fields: ['MAKHAC', 'TENKHAC'],
                //        autoLoad: true,
                //        proxy: {
                //            type: "ajax",
                //            api: {
                //                read: "/KhacCT/OptionsKhac",
                //            },
                //            reader: {
                //                type: "json",
                //                root: "actionitems",
                //                idProperty: 'MAKHAC'
                //            }
                //        },
                //    }),
                //}
           ]
       }
    ],
    buttons: [{
        text: '<span class="buttonOnLayout">' + Globals.Langs.Common.button_luu + '</span>',
        id: 'btnKhacCTLuu',
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
