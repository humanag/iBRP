Ext.define("iBRP.controller.NganhHangController", {
    extend: "Ext.app.Controller",
    models: ["ModelNganhHang"],
    stores: ["StoreNganhHang"],
    views: ["nganhhang.LayoutNganhHang", "nganhhang.GirdNganhHang", "nganhhang.FormNganhHang", "nganhhang.FormFilter"],
    refs: [
        {
            ref: 'formNganhHang',
            selector: 'formnganhhang'
        },
        {
            ref: 'girdNganhHang',
            selector: 'girdnganhhang'
        },
        {
            ref: "maNganh",
            selector: "formnganhhang textfield[id=manghanh]"
        },
        {
            ref: "tenNganh",
            selector: "formnganhhang textfield[id=tennganh]"
        },
        //{
        //    ref: "fmaNganh",
        //    selector: "formfilternganhhang textfield[id=fmanghanh]"
        //},
        {
            ref: "ftenNganh",
            selector: "formfilternganhhang textfield[id=ftennganh]"
        },
        {
            ref: "layoutNganhHang",
            selector: "layoutnganhhang"
        },
        {
            ref: 'formFilterNganhHang',
            selector: "formfilternganhhang"
        }
    ],

    init: function () {
        if (debug) {
            console.log("Init NganhHang Controller");
        }
        //Clear all old session
        Ext.util.Cookies.set("tennganh", "");
        //Ext.util.Cookies.set("manganh", "");

        //Register events for store
        var store = Ext.getStore("StoreNganhHang");
        store.addListener('load', this.finishedLoadStore, this);

        this.control({
            "#btnNganhHangThemMoi": {
                click: this.themNganhHang
            },
            //"#btnNganhHangChinhSua": {
            //    click: this.suaNganhHang
            //},
            "#btnNganhHangXoa": {
                click: this.xoaNganhHang
            },
            "#btnNganhHangIn": {
                click: this.inNganhHang
            },
            "#btnNganhHangKetThuc": {
                click: this.thoatNganhHang
            },
            "girdnganhhang": {
                selectionchange: this.selectionNganhHangChange,
                beforerender: this.initStoreForGrid,
                itemclick: this.edit,
                cellkeydown: this.pressKey
            },
            "#btnNganhHangLuu": {
                click: this.save
            },
            //"#btnNganhHangLamLai": {
            //    click: this.refesh
            //},
            "#btnNganhHangFilter": {
                click: this.filterData
            },
            "#btnClearFilterNganhHang": {
                click: this.clearFilterData
            },
            "#btnNganhHangShowFilter": {
                click: this.showFilterForm
            }
        });
    },

    finishedLoadStore: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.NganhHangController.finishedLoadStore()]");
        }
        
        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        //var store = Ext.getStore("StoreNganhHang");
        var grid = this.getGirdNganhHang();
        grid.getSelectionModel().select(0, true);
    },

    initStoreForGrid: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.NganhHangController.initStoreForGrid()]");
        }
        var store = Ext.getStore("StoreNganhHang");
        var grid = this.getGirdNganhHang();
        grid.getStore().load();
    },

    selectionNganhHangChange: function (model, records) {
        if (debug) {
            console.log("This event will be fired when the grid change selection row. [iBRP.controller.NganhHangController.selectionNganhHangChange()]");
        }

        var fields;
        var form = this.getFormNganhHang().getForm();
        if (records[0]) {
            rec = records[0];
            iBRP.model.ModelHelper.enableForm(form);
            form.loadRecord(rec);
        }

        //Enable toolbar and diable form button
        this.disableControl(false, false);
    },

    themNganhHang: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Them. [iBRP.controller.NganhHangController.themNganhHang()]');
        }
        //Clear value of the fields on the form and set ocus for the first field.
        form = this.getFormNganhHang().getForm();
        iBRP.model.ModelHelper.clearForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    suaNganhHang: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Sua.[iBRP.controller.NganhHangController.suaNganhHang()]');
        }
        var form = this.getFormNganhHang().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    xoaNganhHang: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.NganhHangController.xoaNganhHang()]');
        }
        this.deleteSelectionRow();
    },
    inNganhHang: function () {
        console.log('This event will be fired when user click on button In. [iBRP.controller.NganhHangController.inNganhHang()]');
    },
    thoatNganhHang: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.NganhHangController.thoatNganhHang()]');
        }
        this.getLayoutNganhHang().close();
    },
    save: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Luu. [iBRP.controller.NganhHangController.save()]');
        }
        var form = this.getFormNganhHang().getForm();
        var store = Ext.getStore("StoreNganhHang");
        var grid = this.getGirdNganhHang();
        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: '/NganhHang/Update',
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
            console.log('This event will be fired when user click on button Lam Lai. [iBRP.controller.NganhHangController.refesh()]');
        }
        var form = this.getFormNganhHang().getForm();
        form.reset();
    },
    edit: function () {
        if (debug) {
            console.log('This event will be fired when user double click on item on the gird. [iBRP.controller.NganhHangController.edit()]');
        }
        var form = this.getFormNganhHang().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    disableControl: function (tlbar, frmButton) {
        //disable all toolbar button
        var arrayButton = Array();
        arrayButton[0] = "btnNganhHangThemMoi";
        //arrayButton[1] = "btnNganhHangChinhSua";
        arrayButton[1] = "btnNganhHangXoa";
        arrayButton[2] = "btnNganhHangIn";
        iBRP.model.ModelHelper.disableButtons(arrayButton, tlbar);
        //enable Luu, Lam Lai button
        var arrayButton = Array();
        arrayButton[0] = "btnNganhHangLuu";
        //arrayButton[1] = "btnNganhHangLamLai";
        iBRP.model.ModelHelper.disableButtons(arrayButton, frmButton);
    },
    deleteSelectionRow: function () {
        if (debug) {
            console.log('This function will be called when user delete item on the grid. [iBRP.controller.NganhHangController.deleteSelectionRow()]');
        }
        var grid = this.getGirdNganhHang();
        var sm = grid.getSelectionModel();
        var sel = sm.getSelection()[0];
        var form = this.getFormNganhHang().getForm();
        if (sm.hasSelection()) {
            Ext.Msg.show({
                title: Globals.Langs.Common.canh_bao,
                buttons: Ext.MessageBox.YESNO,
                msg: Globals.Langs.Common.ban_co_chac_muon_xoa_mau_tin_nay_khong,
                icon: Ext.MessageBox.WARNING,
                fn: function (btn) {
                    if (btn == 'yes') {
                        manganh = sel.get('MANGANH');
                        Ext.MessageBox.wait(
                            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                            Globals.Langs.Common.thong_bao
                        );
                        if (manganh != '') {
                            Ext.Ajax.request({
                                url: '/NganhHang/Delete',
                                timeout: 2400,
                                params: {
                                    manganh: manganh
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
            console.log('This function will be called when user press key on the item grid. [iBRP.controller.NganhHangController.pressKey()]');
        }
        var key = e.getKey();
        switch (key) {
            case e.DELETE:
                this.deleteSelectionRow();
                break;
            case e.ENTER:
                var form = this.getFormNganhHang().getForm();
                iBRP.model.ModelHelper.enableForm(form);

                //Disable toolbar and enable form button
                this.disableControl(true, false);
                break;
            case e.F:
                console.log("Show Filter Form");
                var filterForm = Ext.create("iBRP.view.nganhhang.FormFilter");
                var tennganh = Ext.util.Cookies.get("tennganh");
                //var manganh = Ext.util.Cookies.get("manganh");
                this.getFtenNganh().setValue(tennganh);
                //this.getFmaNganh().setValue(manganh);

                filterForm.show();
                break;
        }
    },

    filterData: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.NganhHangController.filterData()]');
        }

        var tennganh = this.getFtenNganh().getValue();
        //var manganh = this.getFmaNganh().getValue();
        Ext.util.Cookies.set("tennganh", tennganh);
        //Ext.util.Cookies.set("manganh", manganh);

        var grid = this.getGirdNganhHang();
        //Clear old filter
        grid.getStore().clearFilter(true);

        if (tennganh != '') {
            grid.getStore().filter('TENNGANH', tennganh);
        }
        //if (manganh != '') {
        //    grid.getStore().filter('MANGANH', manganh);
        //}
        grid.getStore().currentPage = 1;
        grid.reconfigure();
        this.getFormFilterNganhHang().close();
    },

    clearFilterData: function () {
        if (debug) {
            console.log('This function will be called when button Bo loc du lieu was clicked. [iBRP.controller.NganhHangController.clearFilterData()]');
        }
        //Clear filter data on the filter form
        this.getFtenNganh().setValue("");
        //this.getFmaNganh().setValue("");
        Ext.util.Cookies.set("tennganh", "");
        //Ext.util.Cookies.set("manganh", "");

        //Reload for grid
        var grid = this.getGirdNganhHang();
        grid.getStore().clearFilter(true);
        grid.getStore().load();
        grid.reconfigure();
        this.getFormFilterNganhHang().close();
    },

    showFilterForm: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.NganhHangController.showFilterForm()]');
        }
        var filterForm = Ext.create("iBRP.view.nganhhang.FormFilter");
        var tennganh = Ext.util.Cookies.get("tennganh");
        //var manganh = Ext.util.Cookies.get("manganh");
        this.getFtenNganh().setValue(tennganh);
        //this.getFmaNganh().setValue(manganh);

        filterForm.show();
    }

});