Ext.define("iBRP.view.khacct.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilterkhacct",
    id: "idformfilterkhacct",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.KhacCT.khacct,
           defaults: { xtype: "textfield"},
           items: [
                //{
                //    id: "fmanganh",
                //    name: "FMANGANH",
                //    xtype: "combobox",
                //    fieldLabel: Globals.Langs.NganhHang.ten_nganh,
                //    queryMode: 'remote',
                //    displayField: 'TENNGANH',
                //    valueField: 'MANGANH',
                //    allowBlank: false,
                //    store: new Ext.data.Store({
                //        fields: ['MANGANH', 'TENNGANH'],
                //        autoLoad: true,
                //        proxy: {
                //            type: "ajax",
                //            api: {
                //                read: "/NganhHang/Options",
                //            },
                //            reader: {
                //                type: "json",
                //                root: "actionitems",
                //                idProperty: 'MANGANH'
                //            }
                //        },
                //    }),
                //},
                {
                    id: "ftenkhacct",
                    name: "FTENKHAC_CT",
                    fieldLabel: Globals.Langs.KhacCT.ten_khac_ct
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterKhacCT'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnKhacCTFilter'
        }
    ]
});
