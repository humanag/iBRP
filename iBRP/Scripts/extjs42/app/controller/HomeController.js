Ext.define("iBRP.controller.HomeController", {
    extend: "Ext.app.Controller",
    
    views: ["home.MainMenu"],
    init: function () {
        if (debug) {
            console.log("Init Home Controller");
        }
        

        this.control({
            "#mainMenuDMNganhHang": {
                click: this.showLayoutNganhHang
            },
            "#mainMenuThoat": {
                click: this.thoatKhoiChuongTrinh
            },
            "#mainMenuDMNhom": {
                click: this.showLayoutNhom
            },
            "#mainMenuDMKhacCT": {
                click: this.showLayoutKhacCT
            },
            "#mainMenuDMKhachHang": {
                click: this.showLayoutKhachHang
            }
            
        });
    },
    showLayoutNganhHang: function () {
        if (debug) {
            console.log('The nganhhang layout will be shown when user click on the button DM NGANH HANG on the main menu. [iBRP.controller.HomeController.showLayoutNganhHang()]');
        }
        //Create and show layout nganhhang
        var nganhhang = Ext.create("iBRP.view.nganhhang.LayoutNganhHang");
        nganhhang.show();
    },
    showLayoutNhom: function () {
        if (debug) {
            console.log('The nhom layout will be shown when user click on the button DM NHOM on the main menu. [iBRP.controller.HomeController.showLayoutNhom()]');
        }
        //Create and show layout nganhhang
        var nhom = Ext.create("iBRP.view.nhom.LayoutNhom");
        nhom.show();
    },
    thoatKhoiChuongTrinh: function () {
        console.log("Thoat khoi chuong trinh !!!");
    },
    showLayoutKhachHang: function () {
        if (debug) {
            console.log('The khach hang layout will be shown when user click on the button DM KHACH HANG on the main menu. [iBRP.controller.HomeController.showLayoutKhachHang()]');
        }
        //Create and show layout khach hang
        var kh = Ext.create("iBRP.view.khachhang.LayoutKhachHang");
        kh.show();
        //set maxlenght for makhachhang input
        att = { maxlength: '15' }; // generate attribute list 
        Ext.get("makhachhang-inputEl").set(att);
        //set maxlenght for manv input
        att = { maxlength: '5' }; // generate attribute list 
        Ext.get("manv-inputEl").set(att);
    },
    showLayoutKhacCT: function () {
        if (debug) {
            console.log('The Khac CT layout will be shown when user click on the button DM KHAC CT on the main menu. [iBRP.controller.HomeController.showLayoutKhachHang()]');
        }
        //Create and show layout khach hang
        var kh = Ext.create("iBRP.view.khacct.LayoutKhacCT");
        kh.show();
    }

    
});