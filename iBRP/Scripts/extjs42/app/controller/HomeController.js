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
        console.log("Show layout Nhom");
    },
    thoatKhoiChuongTrinh: function () {
        console.log("Thoat khoi chuong trinh !!!");
    }
    
});