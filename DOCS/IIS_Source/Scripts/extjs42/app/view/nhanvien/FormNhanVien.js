Ext.define("iBRP.view.nhanvien.FormNhanVien", {
    extend: "Ext.form.Panel",
    xtype: "formnhanvien",
    id: "idformnhanvien",
    border: false,
    width: 500,
    items: [
       {
           xtype: "fieldset",
           title: Globals.Langs.NhanVien.nhan_vien,
           defaults: { xtype: "textfield", disabled: true },
           autoScroll: true,
           items: [
               {
                   xtype: 'textfield',
                   id: "manhanvien",
                   name: "MANHANVIEN",
                   labelWidth: 150,
                   fieldLabel: Globals.Langs.NhanVien.ma_nhan_vien,
                   maxLength: 5,
                   allowBlank: false,

               },
                {
                    id: "tennhanvien",
                    name: "TENNHANVIEN",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.NhanVien.ten_nhan_vien,
                    allowBlank: false
                },
                {
                    id: "bidanh",
                    name: "BIDANH",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.NhanVien.bi_danh
                },
                {
                    id: "manhom",
                    name: "NHOM",
                    xtype: "combobox",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.NhanVien.ten_nhom,
                    queryMode: 'remote',
                    displayField: 'TENKHAC_CT',
                    valueField: 'MAKHAC_CT',
                    allowBlank: false,
                    store: new Ext.data.Store({
                        fields: ['MAKHAC_CT', 'TENKHAC_CT'],
                        autoLoad: true,
                        proxy: {
                            type: "ajax",
                            api: {
                                read: "/NhanVien/GetNhomOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MAKHAC_CT'
                            }
                        },
                    }),
                },
                {
                    id: "diachi",
                    name: "DIACHI",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.NhanVien.dia_chi,
                    xtype: 'textarea',
                },
                {
                    id: "dienthoai",
                    name: "DIENTHOAI",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.NhanVien.dien_thoai
                },
                {
                    id: "fax",
                    name: "FAX",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.NhanVien.fax
                },
                {
                    id: "email",
                    name: "EMAIL",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.NhanVien.email,
                    vtype: 'email'
                },
                {
                    id: "ghichu",
                    name: "GHICHU",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.NhanVien.ghi_chu,
                    xtype: 'textarea',
                },
           ]
       }
    ],
    buttons: [{
        text: '<span class="buttonOnLayout">' + Globals.Langs.Common.button_luu + '</span>' ,
        id: 'btnNhanVienLuu',
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
