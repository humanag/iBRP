Ext.define("iBRP.controller.ChungTuController", {
    extend: "Ext.app.Controller",
    models: ["ModelChungTu", "ModelChungTuCT"],
    stores: ["StoreChungTu", "StoreChungTuCT"],
    views: ["chungtu.LayoutChungTu"],
    refs: [
        {
            ref: 'gridChungTu',
            selector: 'gridchungtu'
        }
    ],

    init: function () {
        if (debug) {
            console.log("Init ChungTu Controller");
        }

        var store = Ext.getStore("StoreChungTu");
        store.addListener('load', this.finishedLoadStore, this);

        this.control({
            "#btnChungTuThemMoi": {
                click: this.themChungTu
            },
            "#btnChungTuXoa": {
                click: this.xoaChungTu
            },
            "#btnChungTuIn": {
                click: this.inChungTu
            },
            "#btnChungTuKetThuc": {
                click: this.thoatChungTu
            },

            "gridchungtu": {
                beforerender: this.initStoreForGrid,
                cellkeydown: this.pressKey
            }
        });
    },

    finishedLoadStore: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.ChungTuController.finishedLoadStore()]");
        }
        
        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        var grid = this.getGridChungTu();
        grid.getSelectionModel().select(0, true);
    },

    initStoreForGrid: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.ChungTuController.loadStore()]");
        }
        //Load for ChungTu Grid
        var store = Ext.getStore("StoreChungTu");
        var grid = this.getGridChungTu();
        grid.getStore().load();
    },

    themChungTu: function () {
        var formChungTuCT = Ext.create("iBRP.view.chungtu.LayoutChiTiet");
        formChungTuCT.show();
    },

    xoaChungTu: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.ChungTuController.xoaChungTu()]');
        }
        var grid = this.getGridChungTu();
        this.deleteSelectionRow();
    },

    thoatChungTu: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.ChungTuController.thoatChungTu()]');
        }

        this.getLayoutChungTu().close();
    }

});