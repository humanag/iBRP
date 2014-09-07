Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'iBRP',
    appFolder: '../Scripts/extjs42/app',
    autoCreateViewport: true,
    controllers: ["NganhHangController", "NhomController", "HomeController", "KhachHangController", "KhacCTController", "NhanVienController", "HangHoaController", "KhoController"],
    requires: ['iBRP.model.ModelHelper'],
    launch: function () {
        if (debug) {
            console.log('App Launch');
        }
    },
    
});