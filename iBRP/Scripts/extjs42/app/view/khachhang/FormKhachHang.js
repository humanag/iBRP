Ext.define("iBRP.view.khachhang.FormKhachHang", {
    extend: "Ext.form.Panel",
    xtype: "formkhachhang",
    id: "idformkhachhang",
    border: false,
    width: 500,
    items: [
       {
           xtype: "fieldset",
           title: Globals.Langs.KhachHang.khach_hang,
           defaults: { xtype: "textfield", disabled: true },
           autoScroll: true,
           items: [
               {
                   xtype: 'textfield',
                   id: "makhachhang",
                   name: "MAKHACHHANG",
                   labelWidth: 150,
                   fieldLabel: Globals.Langs.KhachHang.ma_khach_hang,
                   maxLength: 15,
                   allowBlank: false
               },
                {
                    id: "tenkhachhang",
                    name: "TENKHACHHANG",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.ten_khach_hang,
                    allowBlank: false
                },
                {
                    id: "manhom",
                    name: "NHOM",
                    xtype: "combobox",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.ten_nhom,
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
                                read: "/KhachHang/GetNhomOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MAKHAC_CT'
                            }
                        },
                    })
                },
                {
                    id: "loai",
                    name: "LOAI",
                    xtype: "combobox",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.loai,
                    queryMode: 'remote',
                    displayField: 'TEN_LOAI',
                    valueField: 'MA_LOAI',
                    allowBlank: false,
                    width: 300,
                    store: new Ext.data.Store({
                        fields: ['MA_LOAI', 'TEN_LOAI'],
                        autoLoad: true,
                        proxy: {
                            type: "ajax",
                            api: {
                                read: "/KhachHang/GetLoaiKHOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MA_LOAI'
                            }
                        },
                    }),
                },
                {
                    id: "mst",
                    name: "MAST",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.ma_so_thue
                },
                {
                    id: "diachi",
                    name: "DIACHI",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.dia_chi,
                    xtype: 'textarea',
                },
                {
                    id: "dienthoai",
                    name: "DIENTHOAI",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.dien_thoai
                },
                {
                    id: "fax",
                    name: "FAX",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.fax
                },
                {
                    id: "email",
                    name: "EMAIL",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.email,
                    vtype: 'email'
                },
                {
                    id: "manv",
                    name: "MANV",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.ma_nhan_vien,
                    xtype: "combobox",
                    queryMode: 'remote',
                    displayField: 'TENNHANVIEN',
                    valueField: 'MANHANVIEN',
                    allowBlank: false,
                    width: 300,
                    store: new Ext.data.Store({
                        fields: ['MANHANVIEN', 'TENNHANVIEN'],
                        autoLoad: true,
                        proxy: {
                            type: "ajax",
                            api: {
                                read: "/KhachHang/GetNhanVienOptions",
                            },
                            reader: {
                                type: "json",
                                root: "actionitems",
                                idProperty: 'MANHANVIEN'
                            }
                        },
                    }),
                },
                {
                    id: "CNDAUKYTIEN",
                    name: "CN_DAUKY_TIEN",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.KhachHang.cong_no_dau_ky_tien
                },
                {
                    xtype: 'datefield',
                    format: 'd/m/Y',
                    id: "CNDAUKYNGAY",
                    name: "CN_DAUKY_NGAY",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.cong_no_dau_ky_ngay
                },
                {
                    id: "CNSOTIEN",
                    name: "CN_SOTIEN",
                    labelWidth: 150,
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    fieldLabel: Globals.Langs.KhachHang.cong_no_so_tien
                },
                {
                    xtype: 'numberfield',
                    minValue: 0,
                    hideTrigger: true,
                    id: "CNSONGAY",
                    name: "CN_SONGAY",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.cong_no_so_ngay
                },
                {
                    id: "ghichu",
                    name: "GHICHU",
                    labelWidth: 150,
                    fieldLabel: Globals.Langs.KhachHang.ghi_chu,
                    xtype: 'textarea',
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
