Ext.define("iBRP.controller.KhacCTController", {
    extend: "Ext.app.Controller",
    models: ["ModelKhacCT", "ModelKhac"],
    stores: ["StoreKhacCT", "StoreKhac"],
    views: ["khacct.LayoutKhacCT", "khacct.GridKhac"],
    refs: [
        {
            ref: 'gridKhacCT',
            selector: 'gridkhacct'
        },
        {
            ref: 'gridKhac',
            selector: 'gridkhac'
        },
        {
            ref: "layoutKhacCT",
            selector: "layoutkhacct"
        },
        {
            ref: "maKhacOnFilterGridKhacCT",
            selector: "gridkhacct combobox[id=cboMaKhacOnFilterGridKhacCT]"
        },
    ],

    init: function () {
        if (debug) {
            console.log("Init KhacCT Controller");
        }

        //Register events for store
        var store = Ext.getStore("StoreKhacCT");
        store.addListener('load', this.finishedLoadStoreCT, this);

        var store = Ext.getStore("StoreKhac");
        store.addListener('load', this.finishedLoadStore, this);

        this.control({
            "#btnKhacCTThemMoi": {
                click: this.themKhacCT
            },
            "#btnKhacCTXoa": {
                click: this.xoaKhacCT
            },
            "#btnKhacCTIn": {
                click: this.inKhacCT
            },
            "#btnKhacCTKetThuc": {
                click: this.thoatKhacCT
            },

            //Assign event to button on GridKhac grid
            "#btnKhacThemMoi": {
                click: this.themKhac
            },
            "#btnKhacXoa": {
                click: this.xoaKhac
            },
            "#btnKhacIn": {
                click: this.inKhac
            },
            "#btnKhacKetThuc": {
                click: this.thoatKhac
            },

            "gridkhacct": {
                //selectionchange: this.selectionKhacCTChange,
                beforerender: this.initStoreForGridCT,
                //itemclick: this.edit,
                cellkeydown: this.pressKey
            },
            "gridkhac": {
                //selectionchange: this.selectionKhacCTChange,
                beforerender: this.initStoreForGrid,
                //itemclick: this.edit,
                cellkeydown: this.pressKey
            },
            
            "#cboMaKhacOnFilterGridKhacCT": {
                change: this.filterKhacCTByMaKhac
            }
        });
    },

    finishedLoadStoreCT: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.KhacCTController.finishedLoadStoreCT()]");
        }

        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        //var store = Ext.getStore("StoreKhacCT");
        var grid = this.getGridKhacCT();
        grid.getSelectionModel().select(0, true);
    },

    finishedLoadStore: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.KhacCTController.finishedLoadStore()]");
        }
        
        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        var grid = this.getGridKhac();
        grid.getSelectionModel().select(0, true);
    },

    initStoreForGrid: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.KhacCTController.loadStore()]");
        }
        //Load for Khac Grid
        var store = Ext.getStore("StoreKhac");
        var grid = this.getGridKhac();
        grid.getStore().load();
    },

    initStoreForGridCT: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.KhacCTController.loadStore()]");
        }
        var store = Ext.getStore("StoreKhacCT");
        var grid = this.getGridKhacCT();
        grid.getStore().load();
    },

    //Events of the button on the GridKhac grid
    themKhac: function () {
        if (debug) {
            console.log('This function will be called when button Them Moi on the GridKhac grid was clicked. [iBRP.controller.KhacCTController.themKhac()]');
        }
        var grid = this.getGridKhac();
        var store = grid.getStore();
        
        // Create a model instance
        var r = Ext.create('iBRP.model.ModelKhac', {
            MAKHAC: Globals.Langs.KhacCT.ma_khac,
            TENKHAC: Globals.Langs.KhacCT.ten_khac,
            PLOAI: "1"

        });
        store.insert(0, r);
        rowEditing.startEdit(0, 0);
    },

    themKhacCT: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Them. [iBRP.controller.KhacCTController.themKhacCT()]');
        }
        var grid = this.getGridKhacCT();
        var store = grid.getStore();

        // Create a model instance
        var r = Ext.create('iBRP.model.ModelKhacCT', {
                MAKHAC_CT: Globals.Langs.KhacCT.ma_khac_ct,
                TENKHAC_CT: Globals.Langs.KhacCT.ten_khac_ct,
            }
        );

        store.insert(0, r);
        rowEditingCT.startEdit(0, 0);
    },

    xoaKhac: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.KhacCTController.xoaKhacCT()]');
        }
        var grid = this.getGridKhac();
        this.deleteSelectionRow();
    },

    xoaKhacCT: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.KhacCTController.xoaKhacCT()]');
        }
        var grid = this.getGridKhacCT();
        this.deleteSelectionRowKhacCT();
    },

    inKhacCT: function () {
        console.log('This event will be fired when user click on button In. [iBRP.controller.KhacCTController.inKhacCT()]');
    },
    thoatKhac: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.KhacCTController.thoatKhacCT()]');
        }

        this.getLayoutKhacCT().close();
    },

    thoatKhacCT: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.KhacCTController.thoatKhacCT()]');
        }

        this.getLayoutKhacCT().close();
    },

    deleteSelectionRow: function () {
        if (debug) {
            console.log('This function will be called when user delete item on the grid. [iBRP.controller.KhacCTController.deleteSelectionRow()]');
        }
        var grid = this.getGridKhac();
        var sm = grid.getSelectionModel();
        var sel = sm.getSelection()[0];
        if (sm.hasSelection()) {
            Ext.Msg.show({
                title: Globals.Langs.Common.canh_bao,
                buttons: Ext.MessageBox.YESNO,
                msg: Globals.Langs.Common.ban_co_chac_muon_xoa_mau_tin_nay_khong,
                icon: Ext.MessageBox.WARNING,
                fn: function (btn) {
                    if (btn == 'yes') {
                        Ext.MessageBox.wait(
                            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                            Globals.Langs.Common.thong_bao
                        );
                        value = sel.get("MAKHAC");
                        if (value != '') {
                            Ext.Ajax.request({
                                url: '/KhacCT/DeleteKhac',
                                timeout: 2400,
                                params: {
                                    maKhac: value
                                },
                                method: 'POST',
                                success: function (response, opts) {
                                    Ext.MessageBox.hide();
                                    grid.getStore().remove(sel);
                                    grid.store.load();
                                    grid.reconfigure();
                                },
                                failure: function (response, opts) {
                                    Ext.Msg.show({
                                        title: Globals.Langs.Common.thong_bao,
                                        msg: Globals.Langs.Common.thao_tac_khong_thanh_cong,
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.ERROR
                                    })
                                }
                            });
                        }
                    }
                }
            });
        } else {
            Ext.Msg.show({
                title: Globals.Langs.Common.thong_bao,
                msg: Globals.Langs.Common.xin_vui_long_chon_mau_tin,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }
    },

    deleteSelectionRowKhacCT: function () {
        if (debug) {
            console.log('This function will be called when user delete item on the grid. [iBRP.controller.KhacCTController.deleteSelectionRow()]');
        }
        var grid = this.getGridKhacCT();
        var sm = grid.getSelectionModel();
        var sel = sm.getSelection()[0];
        if (sm.hasSelection()) {
            Ext.Msg.show({
                title: Globals.Langs.Common.canh_bao,
                buttons: Ext.MessageBox.YESNO,
                msg: Globals.Langs.Common.ban_co_chac_muon_xoa_mau_tin_nay_khong,
                icon: Ext.MessageBox.WARNING,
                fn: function (btn) {
                    if (btn == 'yes') {
                        Ext.MessageBox.wait(
                            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                            Globals.Langs.Common.thong_bao
                        );
                        value = sel.get("MAKHAC_CT");
                        if (value != '') {
                            Ext.Ajax.request({
                                url: '/KhacCT/Delete',
                                timeout: 2400,
                                params: {
                                    maKhacCT: value
                                },
                                method: 'POST',
                                success: function (response, opts) {
                                    Ext.MessageBox.hide();
                                    grid.getStore().remove(sel);
                                    grid.store.load();
                                    grid.reconfigure();
                                },
                                failure: function (response, opts) {
                                    Ext.Msg.show({
                                        title: Globals.Langs.Common.thong_bao,
                                        msg: Globals.Langs.Common.thao_tac_khong_thanh_cong,
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.ERROR
                                    })
                                }
                            });
                        }
                    }
                }
            });
        } else {
            Ext.Msg.show({
                title: Globals.Langs.Common.thong_bao,
                msg: Globals.Langs.Common.xin_vui_long_chon_mau_tin,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }
    },

    pressKey: function (table, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        if (debug) {
            console.log('This function will be called when user press key on the item grid. [iBRP.controller.KhacCTController.pressKey()]');
        }
        var key = e.getKey();
        switch (key) {
            case e.DELETE:
                this.deleteSelectionRow();
                break;
            case e.F:
                console.log("Show Filter Form");
                var filterForm = Ext.create("iBRP.view.khacct.FormFilter");
                var tenkhacct = Ext.util.Cookies.get("tenkhacct");
                //var manganh = Ext.util.Cookies.get("manganh");
                this.getFtenKhacCT().setValue(tenkhacct);
                //this.getFmaNganh().setValue(manganh);

                filterForm.show();
                break;
        }
    },

    
    update4KhacTable: function (editor, context, eOpts) {
        if (debug) {
            console.log('This function will be called when we click update buttong on the khac grid');
        }

        var grid = context.grid;
        var data = context.record.data;
        Ext.MessageBox.wait(
            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
            Globals.Langs.Common.thong_bao
        );

        Ext.Ajax.request({
            url: '/KhacCT/UpdateKhac',
            timeout: 2400,
            params: {
                makhac: data.MAKHAC,
                tenkhac: data.TENKHAC,
                ploai: data.PLOAI
            },
            method: 'POST',
            success: function (response, opts) {
                Ext.MessageBox.hide();
                grid.store.load();
                grid.reconfigure();
                iBRP.model.ModelHelper.showSuccessMsg();
            },
            failure: function (f, a) {
                Ext.MessageBox.hide();
                if (debug) {
                    console.log(f);
                }
                iBRP.model.ModelHelper.showErrorMsg(f);
            }
        });
    },

    update4KhacCTTable: function (editor, context, eOpts) {
        if (debug) {
            console.log('This function will be called when we click update buttong on the khacct grid');
        }

        var grid = context.grid;
        var data = context.record.data;
        Ext.MessageBox.wait(
            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
            Globals.Langs.Common.thong_bao
        );

        var makhac = this.getMaKhacOnFilterGridKhacCT().getValue();
        Ext.Ajax.request({
            url: '/KhacCT/Update',
            timeout: 2400,
            params: {
                maKhac: makhac,
                maKhacCT: data.MAKHAC_CT,
                tenKhacCT: data.TENKHAC_CT,
                
            },
            method: 'POST',
            success: function (response, opts) {
                Ext.MessageBox.hide();
                grid.store.load();
                grid.reconfigure();
                iBRP.model.ModelHelper.showSuccessMsg();
            },
            failure: function (f, a) {
                Ext.MessageBox.hide();
                iBRP.model.ModelHelper.showErrorMsg(f);
            }
        });
    },

    filterKhacCTByMaKhac: function (me, makhac, oldValue, eOpts) {
        if (debug) {
            console.log('This function will be called when Ten Khac on the grid khac ct was clicked. [iBRP.controller.KhacCTController.filterKhacCTByMaKhac()]');
        }
       
        var grid = this.getGridKhacCT();
        //Clear old filter
        grid.getStore().clearFilter(true);
        if (makhac != '') {
            grid.getStore().filter('makhac', makhac);
        }
        grid.getStore().currentPage = 1;
        grid.reconfigure();

    }

});