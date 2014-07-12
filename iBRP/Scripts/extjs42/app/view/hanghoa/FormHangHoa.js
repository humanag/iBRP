Ext.define("iBRP.view.hanghoa.FormHangHoa", {
    extend: "Ext.form.Panel",
    xtype: "formhanghoa",
    id: "idformhanghoa",
    border: false,
    width: 500,
    items: [
       {
           xtype: "fieldset",
           title: Globals.Langs.HangHoa.hang_hoa,
           defaults: { xtype: "textfield", disabled: true },
           autoScroll: true,
           items: [
               {
                   xtype: 'textfield',
                   id: "mahanghoa",
                   name: "MAHANGHOA",
                   labelWidth: 150,
                   fieldLabel: Globals.Langs.HangHoa.ma_hang_hoa,
                   maxLength: 15,
                   allowBlank: false,

               },
                {
                    id: "tenhanghoa",
                    name: "TENHANGHOA",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.ten_hang_hoa,
                    allowBlank: false
                },
                {
                    id: "manganh",
                    name: "MANGANH",
                    xtype: "combobox",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.nganh,
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
                                read: "/HangHoa/GetNganhOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MANGANH'
                            }
                        },
                    }),
                },
                {
                    id: "manhom",
                    name: "MANHOM",
                    xtype: "combobox",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.nhom,
                    queryMode: 'remote',
                    displayField: 'TENNHOM',
                    valueField: 'MANHOM',
                    allowBlank: false,
                    store: new Ext.data.Store({
                        fields: ['MANHOM', 'TENNHOM'],
                        autoLoad: true,
                        proxy: {
                            type: "ajax",
                            api: {
                                read: "/HangHoa/GetNhomOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MANHOM'
                            }
                        },
                    }),
                },
                {
                    id: "mamau",
                    name: "MAMAU",
                    xtype: "combobox",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.mau,
                    queryMode: 'remote',
                    displayField: 'TENMAU',
                    valueField: 'MAMAU',
                    allowBlank: false,
                    store: new Ext.data.Store({
                        fields: ['MAMAU', 'TENMAU'],
                        autoLoad: true,
                        proxy: {
                            type: "ajax",
                            api: {
                                read: "/HangHoa/GetMauOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MAMAU'
                            }
                        },
                    }),
                }, {
                    id: "masize",
                    name: "MASIZE",
                    xtype: "combobox",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.size,
                    queryMode: 'remote',
                    displayField: 'TENSIZE',
                    valueField: 'MASIZE',
                    allowBlank: false,
                    store: new Ext.data.Store({
                        fields: ['MASIZE', 'TENSIZE'],
                        autoLoad: true,
                        proxy: {
                            type: "ajax",
                            api: {
                                read: "/HangHoa/GetSizeOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MASIZE'
                            }
                        },
                    }),
                }, {
                    id: "MADVT",
                    name: "MADVT",
                    xtype: "combobox",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.don_vi_tinh,
                    queryMode: 'remote',
                    displayField: 'TENDVT',
                    valueField: 'MADVT',
                    allowBlank: false,
                    store: new Ext.data.Store({
                        fields: ['MADVT', 'TENDVT'],
                        autoLoad: true,
                        proxy: {
                            type: "ajax",
                            api: {
                                read: "/HangHoa/GetDVTOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MADVT'
                            }
                        },
                    }),
                }, {
                    id: "quidoi",
                    name: "QUIDOI",
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.qui_doi,
                }, {
                    id: "dvtlon",
                    name: "DVTLON",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.don_vi_ton_lon,
                }, {
                    id: "tonmax",
                    name: "TONMAX",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.ton_max,
                }, {
                    id: "tonmin",
                    name: "TONMIN",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.ton_min,
                }, {
                    id: "trangthai",
                    name: "TRANGTHAI",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.trang_thai,
                }, {
                    id: "VATIN",
                    name: "VATIN",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.vat_in,
                }, {
                    id: "VATOUT",
                    name: "VATOUT",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.vat_out,
                }, {
                    id: "GIAMUA",
                    name: "GIAMUA",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.gia_mua,
                }, {
                    id: "TLLAILE",
                    name: "TLLAILE",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.tl_lai_le,
                }, {
                    id: "GIABANLE",
                    name: "GIABANLE",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.gia_ban_le,
                }, {
                    id: "TLLAISI",
                    name: "TLLAISI",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.tl_lai_sy,
                }, {
                    id: "GIABANSI",
                    name: "GIABANSI",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.HangHoa.gia_ban_sy,
                }, {
                    id: "GHICHU",
                    name: "GHICHU",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.HangHoa.ghi_chu,
                    xtype: 'textarea',
                },


                
           ]
       }
    ],
    buttons: [{
        text: '<span class="buttonOnLayout">' + Globals.Langs.Common.button_luu + '</span>' ,
        id: 'btnHangHoaLuu',
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
