Ext.define("iBRP.controller.NhomController", {
    extend: "Ext.app.Controller",
    models: ["ModelNhom"],
    stores: ["StoreNhom"],
    views: ["nhom.LayoutNhom", "nhom.GirdNhom", "nhom.FormNhom", "nhom.FormFilter"],
    refs: [
        {
            ref: 'formNhom',
            selector: 'formnhom'
        },
        {
            ref: 'girdNhom',
            selector: 'girdnhom'
        },
        {
            ref: "maNhom",
            selector: "formnhomtextfield[id=manhom]"
        },
        {
            ref: "tenNhom",
            selector: "formnhom textfield[id=tennhom]"
        },
        {
            ref: "fmaNhom",
            selector: "formfilternhom textfield[id=fmanhom]"
        },
        {
            ref: "ftenNhom",
            selector: "formfilternhom textfield[id=ftennhomganh]"
        },
        {
            ref: "layoutNhom",
            selector: "layoutnhom"
        },
        {
            ref: 'formFilterNhom',
            selector: "formfilternhom"
        }
    ],

    init: function () {
        if (debug) {
            console.log("Init Nhom Controller");
        }
        //Clear all old session
        Ext.util.Cookies.set("tennhom", "");
        Ext.util.Cookies.set("manhom", "");

        //Register events for store
        var store = Ext.getStore("StoreNhom");
        store.addListener('load', this.finishedLoadStore, this);

        this.control({
            "#btnNhomThemMoi": {
                click: this.themNhom
            },
            //"#btnNhomChinhSua": {
            //    click: this.suaNhom
            //},
            "#btnNhomXoa": {
                click: this.xoaNhom
            },
            "#btnNhomIn": {
                click: this.inNhom
            },
            "#btnNhomKetThuc": {
                click: this.thoatNhom
            },
            "girdNhom": {
                selectionchange: this.selectionNhomChange,
                beforerender: this.initStoreForGrid,
                itemclick: this.edit,
                cellkeydown: this.pressKey
            },
            "#btnNhomLuu": {
                click: this.save
            },
            //"#btnNhomLamLai": {
            //    click: this.refesh
            //},
            "#btnNhomFilter": {
                click: this.filterData
            },
            "#btnClearFilterNhom": {
                click: this.clearFilterData
            },
            "#btnNhomShowFilter": {
                click: this.showFilterForm
            }
        });
    },

    finishedLoadStore: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.NhomController.finishedLoadStore()]");
        }
        
        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        //var store = Ext.getStore("StoreNhom");
        var grid = this.getGirdNhom();
        grid.getSelectionModel().select(0, true);
    },

    initStoreForGrid: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.NhomController.loadStore()]");
        }
        var store = Ext.getStore("StoreNhom");
        var grid = this.getGirdNhom();
        grid.getStore().load();
    },

    selectionNhomChange: function (model, records) {
        if (debug) {
            console.log("This event will be fired when the grid change selection row. [iBRP.controller.NhomController.selectionNhomChange()]");
        }

        var fields;
        var form = this.getFormNhom().getForm();
        if (records[0]) {
            rec = records[0];
            iBRP.model.ModelHelper.enableForm(form);
            form.loadRecord(rec);
        }

        //Enable toolbar and diable form button
        this.disableControl(false, false);
    },

    themNhom: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Them. [iBRP.controller.NhomController.themNhom()]');
        }
        //Clear value of the fields on the form and set ocus for the first field.
        form = this.getFormNhom().getForm();
        iBRP.model.ModelHelper.clearForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    suaNhom: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Sua.[iBRP.controller.NhomController.suaNhom()]');
        }
        var form = this.getFormNhom().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    xoaNhom: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.NhomController.xoaNhom()]');
        }
        this.deleteSelectionRow();
    },
    inNhom: function () {
        console.log('This event will be fired when user click on button In. [iBRP.controller.NhomController.inNhom()]');
    },
    thoatNhom: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.NhomController.thoatNhom()]');
        }
        this.getLayoutNhom().close();
    },
    save: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Luu. [iBRP.controller.NhomController.save()]');
        }
        var form = this.getFormNhom().getForm();
        var store = Ext.getStore("StoreNhom");
        var grid = this.getGirdNhom();
        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: '/Nhom/Update',
                waitMsg: Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                success: function (f, a) {
                    //store.reload();
                    grid.getStore().load();
                    iBRP.model.ModelHelper.disabledForm(form);
                    iBRP.model.ModelHelper.showSuccessMsg();
                },
                failure: function (f, a) {
                    iBRP.model.ModelHelper.showErrorMsg();
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
            console.log('This event will be fired when user click on button Lam Lai. [iBRP.controller.NhomController.refesh()]');
        }
        var form = this.getFormNhom().getForm();
        form.reset();
    },
    edit: function () {
        if (debug) {
            console.log('This event will be fired when user double click on item on the gird. [iBRP.controller.NhomController.edit()]');
        }
        var form = this.getFormNhom().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    disableControl: function (tlbar, frmButton) {
        //disable all toolbar button
        var arrayButton = Array();
        arrayButton[0] = "btnNhomThemMoi";
        //arrayButton[1] = "btnNhomChinhSua";
        arrayButton[1] = "btnNhomXoa";
        arrayButton[2] = "btnNhomIn";
        iBRP.model.ModelHelper.disableButtons(arrayButton, tlbar);
        //enable Luu, Lam Lai button
        var arrayButton = Array();
        arrayButton[0] = "btnNhomLuu";
        //arrayButton[1] = "btnNhomLamLai";
        iBRP.model.ModelHelper.disableButtons(arrayButton, frmButton);
    },
    deleteSelectionRow: function () {
        if (debug) {
            console.log('This function will be called when user delete item on the grid. [iBRP.controller.NhomController.deleteSelectionRow()]');
        }
        var grid = this.getGirdNhom();
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
                        manhom = sel.get('MANHOM');
                        Ext.MessageBox.wait(
                            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                            Globals.Langs.Common.thong_bao
                        );
                        if (manhom != '') {
                            Ext.Ajax.request({
                                url: '/Nhom/Delete',
                                timeout: 2400,
                                params: {
                                    manhom: manhom
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
            console.log('This function will be called when user press key on the item grid. [iBRP.controller.NhomController.pressKey()]');
        }
        var key = e.getKey();
        switch (key) {
            case e.DELETE:
                this.deleteSelectionRow();
                break;
            case e.ENTER:
                var form = this.getFormNhom().getForm();
                iBRP.model.ModelHelper.enableForm(form);

                //Disable toolbar and enable form button
                this.disableControl(true, false);
                break;
            case e.F:
                console.log("Show Filter Form");
                var filterForm = Ext.create("iBRP.view.nhom.FormFilter");
                var tennhom = Ext.util.Cookies.get("tennhom");
                var manhom = Ext.util.Cookies.get("manhom");
                this.getFtenNhom().setValue(tennhom);
                this.getFmaNhom().setValue(manhom);

                filterForm.show();
                break;
        }
    },

    filterData: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.NhomController.filterData()]');
        }

        var tennhom = this.getFtenNhom().getValue();
        var manhom = this.getFmaNhom().getValue();
        Ext.util.Cookies.set("tennhom", tennhom);
        Ext.util.Cookies.set("manhom", manhom);

        var grid = this.getGirdNhom();
        //Clear old filter
        grid.getStore().clearFilter(true);

        if (tennhom != '') {
            grid.getStore().filter('TENNHOM', tennhom);
        }
        if (manhom != '') {
            grid.getStore().filter('MANHOM', manhom);
        }
        grid.getStore().currentPage = 1;
        grid.reconfigure();
        this.getFormFilterNhom().close();
    },

    clearFilterData: function () {
        if (debug) {
            console.log('This function will be called when button Bo loc du lieu was clicked. [iBRP.controller.NhomController.clearFilterData()]');
        }
        //Clear filter data on the filter form
        this.getFtenNhom().setValue("");
        this.getFmaNhom().setValue("");
        Ext.util.Cookies.set("tennhom", "");
        Ext.util.Cookies.set("manhom", "");

        //Reload for grid
        var grid = this.getGirdNhom();
        grid.getStore().clearFilter(true);
        grid.getStore().load();
        grid.reconfigure();
        this.getFormFilterNhom().close();
    },

    showFilterForm: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.NhomController.showFilterForm()]');
        }
        var filterForm = Ext.create("iBRP.view.nhom.FormFilter");
        var tennganh = Ext.util.Cookies.get("tennhom");
        var manganh = Ext.util.Cookies.get("mannhom");
        this.getFtenNganh().setValue(tennganh);
        this.getFmaNganh().setValue(manganh);

        filterForm.show();
    }

});