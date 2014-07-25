Ext.define("iBRP.controller.HangHoaController", {
    extend: "Ext.app.Controller",
    models: ["ModelHangHoa"],
    stores: ["StoreHangHoa"],
    views: ["hanghoa.LayoutHangHoa", "hanghoa.GirdHangHoa", "hanghoa.FormHangHoa", "hanghoa.FormFilter"],
    refs: [
        {
            ref: 'formHangHoa',
            selector: 'formhanghoa'
        },
        {
            ref: 'girdHangHoa',
            selector: 'girdhanghoa'
        },
        {
            ref: "maHangHoa",
            selector: "formhanghoa textfield[id=mahanghoa]"
        },
        {
            ref: "tenHangHoa",
            selector: "formhanghoa textfield[id=tenhanghoa]"
        },
        //{
        //    ref: "fmaNganh",
        //    selector: "formfilternganhhang textfield[id=fmanghanh]"
        //},
        {
            ref: "ftenHangHoa",
            selector: "formfilterhanghoa textfield[id=ftenhanghoa]"
        },
        {
            ref: "layoutHangHoa",
            selector: "layouthanghoa"
        },
        {
            ref: 'formFilterHangHoa',
            selector: "formfilterhanghoa"
        }
    ],

    init: function () {
        if (debug) {
            console.log("Init HangHoa Controller");
        }

        //Clear all old session
        Ext.util.Cookies.set("tenHangHoa", "");
        //Ext.util.Cookies.set("manganh", "");

        //Register events for store
        var store = Ext.getStore("StoreHangHoa");
        store.addListener('load', this.finishedLoadStore, this);

        this.control({
            "#btnHangHoaThemMoi": {
                click: this.themHangHoa
            },
            "#btnHangHoaXoa": {
                click: this.xoaHangHoa
            },
            "#btnHangHoaIn": {
                click: this.inHangHoa
            },
            "#btnHangHoaKetThuc": {
                click: this.thoatHangHoa
            },
            "girdhanghoa": {
                selectionchange: this.selectionHangHoaChange,
                beforerender: this.initStoreForGrid,
                itemclick: this.edit,
                cellkeydown: this.pressKey
            },
            "#btnHangHoaLuu": {
                click: this.save
            },
            "#btnHangHoaFilter": {
                click: this.filterData
            },
            "#btnClearFilterHangHoa": {
                click: this.clearFilterData
            },
            "#btnHangHoaShowFilter": {
                click: this.showFilterForm
            }
        });
    },

    finishedLoadStore: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.HangHoaController.finishedLoadStore()]");
        }
        
        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        //var store = Ext.getStore("StoreHangHoa");
        var grid = this.getGirdHangHoa();
        grid.getSelectionModel().select(0, true);
    },

    initStoreForGrid: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.HangHoaController.initStoreForGrid()]");
        }
        var store = Ext.getStore("StoreHangHoa");
        var grid = this.getGirdHangHoa();
        grid.getStore().load();
    },

    selectionHangHoaChange: function (model, records) {
        if (debug) {
            console.log("This event will be fired when the grid change selection row. [iBRP.controller.HangHoaController.selectionHangHoaChange()]");
        }

        var fields;
        var form = this.getFormHangHoa().getForm();
        if (records[0]) {
            rec = records[0];
            iBRP.model.ModelHelper.enableForm(form);
            form.loadRecord(rec);
        }

        //Enable toolbar and diable form button
        this.disableControl(false, false);
    },

    themHangHoa: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Them. [iBRP.controller.HangHoaController.themHangHoa()]');
        }
        //Clear value of the fields on the form and set ocus for the first field.
        form = this.getFormHangHoa().getForm();
        iBRP.model.ModelHelper.clearForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    suaHangHoa: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Sua.[iBRP.controller.HangHoaController.suaHangHoa()]');
        }
        var form = this.getFormHangHoa().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    xoaHangHoa: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.HangHoaController.xoaHangHoa()]');
        }
        this.deleteSelectionRow();
    },
    inHangHoa: function () {
        console.log('This event will be fired when user click on button In. [iBRP.controller.HangHoaController.inHangHoa()]');
    },
    thoatHangHoa: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.HangHoaController.thoatHangHoa()]');
        }
        this.getLayoutHangHoa().close();
    },
    save: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Luu. [iBRP.controller.HangHoaController.save()]');
        }
        var form = this.getFormHangHoa().getForm();
        var store = Ext.getStore("StoreHangHoa");
        var grid = this.getGirdHangHoa();
        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: '/HangHoa/Update',
                waitMsg: Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                success: function (f, a) {
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
            console.log('This event will be fired when user click on button Lam Lai. [iBRP.controller.HangHoaController.refesh()]');
        }
        var form = this.getFormHangHoa().getForm();
        form.reset();
    },
    edit: function () {
        if (debug) {
            console.log('This event will be fired when user double click on item on the gird. [iBRP.controller.HangHoaController.edit()]');
        }
        var form = this.getFormHangHoa().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    disableControl: function (tlbar, frmButton) {
        //disable all toolbar button
        var arrayButton = Array();
        arrayButton[0] = "btnHangHoaThemMoi";
        //arrayButton[1] = "btnHangHoaChinhSua";
        arrayButton[1] = "btnHangHoaXoa";
        arrayButton[2] = "btnHangHoaIn";
        iBRP.model.ModelHelper.disableButtons(arrayButton, tlbar);
        //enable Luu, Lam Lai button
        var arrayButton = Array();
        arrayButton[0] = "btnHangHoaLuu";
        //arrayButton[1] = "btnHangHoaLamLai";
        iBRP.model.ModelHelper.disableButtons(arrayButton, frmButton);
    },
    deleteSelectionRow: function () {
        if (debug) {
            console.log('This function will be called when user delete item on the grid. [iBRP.controller.HangHoaController.deleteSelectionRow()]');
        }
        var grid = this.getGirdHangHoa();
        var sm = grid.getSelectionModel();
        var sel = sm.getSelection()[0];
        var form = this.getFormHangHoa().getForm();
        if (sm.hasSelection()) {
            Ext.Msg.show({
                title: Globals.Langs.Common.canh_bao,
                buttons: Ext.MessageBox.YESNO,
                msg: Globals.Langs.Common.ban_co_chac_muon_xoa_mau_tin_nay_khong,
                icon: Ext.MessageBox.WARNING,
                fn: function (btn) {
                    if (btn == 'yes') {
                        maHangHoa = sel.get('MAHANGHOA');
                        Ext.MessageBox.wait(
                            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                            Globals.Langs.Common.thong_bao
                        );
                        if (maHangHoa != '') {
                            Ext.Ajax.request({
                                url: '/HangHoa/Delete',
                                timeout: 2400,
                                params: {
                                    mahanghoa: maHangHoa
                                },
                                method: 'POST',
                                success: function (response, opts) {
                                    Ext.MessageBox.hide();
                                    grid.getStore().remove(sel);
                                    grid.store.load();
                                    grid.reconfigure();
                                    //Reset form
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
            console.log('This function will be called when user press key on the item grid. [iBRP.controller.HangHoaController.pressKey()]');
        }
        var key = e.getKey();
        switch (key) {
            case e.DELETE:
                this.deleteSelectionRow();
                break;
            case e.ENTER:
                var form = this.getFormHangHoa().getForm();
                iBRP.model.ModelHelper.enableForm(form);

                //Disable toolbar and enable form button
                this.disableControl(true, false);
                break;
            case e.F:
                console.log("Show Filter Form");
                var filterForm = Ext.create("iBRP.view.hanghoa.FormFilter");
                var tenHangHoa = Ext.util.Cookies.get("tenHangHoa");
                //var manganh = Ext.util.Cookies.get("manganh");
                this.getFtenHangHoa().setValue(tenHangHoa);
                //this.getFmaNganh().setValue(manganh);

                filterForm.show();
                break;
        }
    },

    filterData: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.HangHoaController.filterData()]');
        }

        var tenHangHoa = this.getFtenHangHoa().getValue();
        //var manganh = this.getFmaNganh().getValue();
        Ext.util.Cookies.set("tenHangHoa", tenHangHoa);
        //Ext.util.Cookies.set("manganh", manganh);

        var grid = this.getGirdHangHoa();
        //Clear old filter
        grid.getStore().clearFilter(true);

        if (tenHangHoa != '') {
            grid.getStore().filter('TENHANGHOA', tenHangHoa);
        }
        //if (manganh != '') {
        //    grid.getStore().filter('MANGANH', manganh);
        //}
        grid.getStore().currentPage = 1;
        grid.reconfigure();
        this.getFormFilterHangHoa().close();
    },

    clearFilterData: function () {
        if (debug) {
            console.log('This function will be called when button Bo loc du lieu was clicked. [iBRP.controller.HangHoaController.clearFilterData()]');
        }
        //Clear filter data on the filter form
        this.getFtenHangHoa().setValue("");
        //this.getFmaNganh().setValue("");
        Ext.util.Cookies.set("tenHangHoa", "");
        //Ext.util.Cookies.set("manganh", "");

        //Reload for grid
        var grid = this.getGirdHangHoa();
        grid.getStore().clearFilter(true);
        grid.getStore().load();
        grid.reconfigure();
        this.getFormFilterHangHoa().close();
    },

    showFilterForm: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.HangHoaController.showFilterForm()]');
        }
        var filterForm = Ext.create("iBRP.view.tenHangHoa.FormFilter");
        var tenHangHoa = Ext.util.Cookies.get("tenHangHoa");
        //var manganh = Ext.util.Cookies.get("manganh");
        this.getFtenHangHoa().setValue(tenHangHoa);
        //this.getFmaNganh().setValue(manganh);

        filterForm.show();
    }

});