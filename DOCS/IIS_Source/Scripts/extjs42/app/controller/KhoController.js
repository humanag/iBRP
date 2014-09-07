Ext.define("iBRP.controller.KhoController", {
    extend: "Ext.app.Controller",
    models: ["ModelKho"],
    stores: ["StoreKho"],
    views: ["kho.LayoutKho", "kho.GirdKho", "kho.FormKho", "kho.FormFilter"],
    refs: [
        {
            ref: 'formKho',
            selector: 'formkho'
        },
        {
            ref: 'girdKho',
            selector: 'girdkho'
        },
        {
            ref: "maKho",
            selector: "formkho textfield[id=makho]"
        },
        {
            ref: "tenKho",
            selector: "formkho textfield[id=tenkho]"
        },
        {
            ref: "ftenKho",
            selector: "formfilterkho textfield[id=ftenkho]"
        },
        {
            ref: "layoutKho",
            selector: "layoutkho"
        },
        {
            ref: 'formFilterKho',
            selector: "formfilterkho"
        }
    ],

    init: function () {
        if (debug) {
            console.log("Init Kho Controller");
        }
        //Clear all old session
        Ext.util.Cookies.set("tenkho", "");
        //Ext.util.Cookies.set("makho", "");

        //Register events for store
        var store = Ext.getStore("StoreKho");
        store.addListener('load', this.finishedLoadStore, this);

        this.control({
            "#btnKhoThemMoi": {
                click: this.themKho
            },
            "#btnKhoXoa": {
                click: this.xoaKho
            },
            "#btnKhoIn": {
                click: this.inKho
            },
            "#btnKhoKetThuc": {
                click: this.thoatKho
            },
            "girdkho": {
                selectionchange: this.selectionKhoChange,
                beforerender: this.initStoreForGrid,
                itemclick: this.edit,
                cellkeydown: this.pressKey
            },
            "#btnKhoLuu": {
                click: this.save
            },
            "#btnKhoFilter": {
                click: this.filterData
            },
            "#btnClearFilterKho": {
                click: this.clearFilterData
            },
            "#btnKhoShowFilter": {
                click: this.showFilterForm
            }
        });
    },

    finishedLoadStore: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.KhoController.finishedLoadStore()]");
        }
        
        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        //var store = Ext.getStore("StoreKho");
        var grid = this.getGirdKho();
        grid.getSelectionModel().select(0, true);
    },

    initStoreForGrid: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.KhoController.initStoreForGrid()]");
        }
        var store = Ext.getStore("StoreKho");
        var grid = this.getGirdKho();
        grid.getStore().load();
    },

    selectionKhoChange: function (model, records) {
        if (debug) {
            console.log("This event will be fired when the grid change selection row. [iBRP.controller.KhoController.selectionKhoChange()]");
        }

        var fields;
        var form = this.getFormKho().getForm();
        if (records[0]) {
            rec = records[0];
            iBRP.model.ModelHelper.enableForm(form);
            form.loadRecord(rec);
        }

        //Enable toolbar and diable form button
        this.disableControl(false, false);
    },

    themKho: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Them. [iBRP.controller.KhoController.themKho()]');
        }
        //Clear value of the fields on the form and set ocus for the first field.
        form = this.getFormKho().getForm();
        iBRP.model.ModelHelper.clearForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    suaKho: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Sua.[iBRP.controller.KhoController.suaKho()]');
        }
        var form = this.getFormKho().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    xoaKho: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.KhoController.xoaKho()]');
        }
        this.deleteSelectionRow();
    },
    inKho: function () {
        console.log('This event will be fired when user click on button In. [iBRP.controller.KhoController.inKho()]');
    },
    thoatKho: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.KhoController.thoatKho()]');
        }
        this.getLayoutKho().close();
    },
    save: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Luu. [iBRP.controller.KhoController.save()]');
        }
        var form = this.getFormKho().getForm();
        var store = Ext.getStore("StoreKho");
        var grid = this.getGirdKho();
        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: '/Kho/Update',
                waitMsg: Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                success: function (f, a) {
                    //store.reload();
                    grid.getStore().load();
                    iBRP.model.ModelHelper.disabledForm(form);
                    iBRP.model.ModelHelper.showSuccessMsg();
                },
                failure: function (f, a) {
                    if (debug) {
                        console.log(a);
                    }
                    iBRP.model.ModelHelper.showErrorMsg(a.response);
                }
            });
            //Enable toolbar and disable form button
            this.disableControl(false, true);
        } else {
            Ext.Msg.show({
                title: Globals.Langs.Common.thong_bao,
                msg: Globals.Langs.Common.du_lieu_khong_hop_le_xin_vui_long_kiem_tra_lai,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }
    },
    refesh: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Lam Lai. [iBRP.controller.KhoController.refesh()]');
        }
        var form = this.getFormKho().getForm();
        form.reset();
    },
    edit: function () {
        if (debug) {
            console.log('This event will be fired when user double click on item on the gird. [iBRP.controller.KhoController.edit()]');
        }
        var form = this.getFormKho().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    disableControl: function (tlbar, frmButton) {
        //disable all toolbar button
        var arrayButton = Array();
        arrayButton[0] = "btnKhoThemMoi";
        //arrayButton[1] = "btnKhoChinhSua";
        arrayButton[1] = "btnKhoXoa";
        arrayButton[2] = "btnKhoIn";
        iBRP.model.ModelHelper.disableButtons(arrayButton, tlbar);
        //enable Luu, Lam Lai button
        var arrayButton = Array();
        arrayButton[0] = "btnKhoLuu";
        //arrayButton[1] = "btnKhoLamLai";
        iBRP.model.ModelHelper.disableButtons(arrayButton, frmButton);
    },
    deleteSelectionRow: function () {
        if (debug) {
            console.log('This function will be called when user delete item on the grid. [iBRP.controller.KhoController.deleteSelectionRow()]');
        }
        var grid = this.getGirdKho();
        var sm = grid.getSelectionModel();
        var sel = sm.getSelection()[0];
        var form = this.getFormKho().getForm();
        if (sm.hasSelection()) {
            Ext.Msg.show({
                title: Globals.Langs.Common.canh_bao,
                buttons: Ext.MessageBox.YESNO,
                msg: Globals.Langs.Common.ban_co_chac_muon_xoa_mau_tin_nay_khong,
                icon: Ext.MessageBox.WARNING,
                fn: function (btn) {
                    if (btn == 'yes') {
                        makho = sel.get('MAKHO');
                        Ext.MessageBox.wait(
                            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                            Globals.Langs.Common.thong_bao
                        );
                        if (makho != '') {
                            Ext.Ajax.request({
                                url: '/Kho/Delete',
                                timeout: 2400,
                                params: {
                                    makho: makho
                                },
                                method: 'POST',
                                success: function (response, opts) {
                                    Ext.MessageBox.hide();
                                    grid.getStore().remove(sel);
                                    grid.store.load();
                                    grid.reconfigure();

                                    form.reset();
                                },
                                failure: function (response, opts) {
                                    if (debug) {
                                        console.log(response);
                                    }
                                    iBRP.model.ModelHelper.showErrorMsg(response);
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
            console.log('This function will be called when user press key on the item grid. [iBRP.controller.KhoController.pressKey()]');
        }
        var key = e.getKey();
        switch (key) {
            case e.DELETE:
                this.deleteSelectionRow();
                break;
            case e.ENTER:
                var form = this.getFormKho().getForm();
                iBRP.model.ModelHelper.enableForm(form);

                //Disable toolbar and enable form button
                this.disableControl(true, false);
                break;
            case e.F:
                console.log("Show Filter Form");
                var filterForm = Ext.create("iBRP.view.kho.FormFilter");
                var tenkho = Ext.util.Cookies.get("tenkho");
                this.getFtenKho().setValue(tenkho);

                filterForm.show();
                break;
        }
    },

    filterData: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.KhoController.filterData()]');
        }

        var tenkho = this.getFtenKho().getValue();
        Ext.util.Cookies.set("tenkho", tenkho);

        var grid = this.getGirdKho();
        //Clear old filter
        grid.getStore().clearFilter(true);

        if (tenkho != '') {
            grid.getStore().filter('TENKHO', tenkho);
        }
        grid.getStore().currentPage = 1;
        grid.reconfigure();
        this.getFormFilterKho().close();
    },

    clearFilterData: function () {
        if (debug) {
            console.log('This function will be called when button Bo loc du lieu was clicked. [iBRP.controller.KhoController.clearFilterData()]');
        }
        //Clear filter data on the filter form
        this.getFtenKho().setValue("");
        Ext.util.Cookies.set("tenkho", "");

        //Reload for grid
        var grid = this.getGirdKho();
        grid.getStore().clearFilter(true);
        grid.getStore().load();
        grid.reconfigure();
        this.getFormFilterKho().close();
    },

    showFilterForm: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.KhoController.showFilterForm()]');
        }
        var filterForm = Ext.create("iBRP.view.kho.FormFilter");
        var tenkho = Ext.util.Cookies.get("tenkho");
        this.getFtenKho().setValue(tenkho);

        filterForm.show();
    }

});