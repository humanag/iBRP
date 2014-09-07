Ext.define("iBRP.view.nhom.FormFilter", {
    extend: "Ext.window.Window",
    xtype: "formfilternhom",
    id: "idformfilternhom",
    border: false,
    modal: true,
    title: Globals.Langs.Common.loc_du_lieu,
    items: [
       {
           xtype: "fieldset", title: Globals.Langs.Nhom.nhom,
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
                    id: "ftennhom",
                    name: "FTENNHOM",
                    fieldLabel: Globals.Langs.Nhom.ten_nhom
                },
           ]
       }
    ],
    buttons: [
        {
            text: Globals.Langs.Common.bo_loc_du_lieu,
            id: 'btnClearFilterNhom'
        },
        {
            text: Globals.Langs.Common.button_loc_du_lieu,
            id: 'btnNhomFilter'
        }
    ]
});
