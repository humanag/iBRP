Ext.define("iBRP.model.ModelKhachHang", {
    extend: "Ext.data.Model",
    fields: ["MAKHACHHANG", "TENKHACHHANG", "NHOM", "LOAI", "MST", "DIACHI", "DIENTHOAI", "FAX", "EMAIL", "MANV", "CN_DAUKY_TIEN", {
        name: "CN_DAUKY_NGAY", type: "date", convert: function (v, record) {
            return Ext.Date.format(new Date(v), 'd/m/Y');
        }
    }, "CN_SOTIEN", "CN_SONGAY", "GHICHU"]
});