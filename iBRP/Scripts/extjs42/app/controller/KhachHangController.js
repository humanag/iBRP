Ext.define("iBRP.controller.KhachHangController", {
    extend: "Ext.app.Controller",
    models: ["ModelKhachHang"],
    stores: ["StoreKhachHang"],
    views: ["khachhang.LayoutKhachHang", "khachhang.GirdKhachHang", "khachhang.FormKhachHang", "khachhang.FormFilter"],
    refs: [
        {
            ref: 'formKhachHang',
            selector: 'formkhachhang'
        },
        {
            ref: 'girdKhachHang',
            selector: 'girdkhachhang'
        },
        {
            ref: "maKhachHang",
            selector: "formkhachhang textfield[id=makhachhang]"
        },
        {
            ref: "tenKhachHang",
            selector: "formkhachhang textfield[id=tenkhachhang]"
        },
        //{
        //    ref: "fmaNganh",
        //    selector: "formfilternganhhang textfield[id=fmanghanh]"
        //},
        {
            ref: "ftenKhachHang",
            selector: "formfilterkhachhang textfield[id=ftenkhachhang]"
        },
        {
            ref: "layoutKhachHang",
            selector: "layoutkhachhang"
        },
        {
            ref: 'formFilterKhachHang',
            selector: "formfilterkhachhang"
        }
    ],

    init: function () {
        if (debug) {
            console.log("Init KhachHang Controller");
        }
        //Clear all old session
        Ext.util.Cookies.set("tenKhachHang", "");
        //Ext.util.Cookies.set("manganh", "");

        //Register events for store
        var store = Ext.getStore("StoreKhachHang");
        store.addListener('load', this.finishedLoadStore, this);

        this.control({
            "#btnKhachHangThemMoi": {
                click: this.themKhachHang
            },
            //"#btnKhachHangChinhSua": {
            //    click: this.suaKhachHang
            //},
            "#btnKhachHangXoa": {
                click: this.xoaKhachHang
            },
            "#btnKhachHangIn": {
                click: this.inKhachHang
            },
            "#btnKhachHangKetThuc": {
                click: this.thoatKhachHang
            },
            "girdkhachhang": {
                selectionchange: this.selectionKhachHangChange,
                beforerender: this.initStoreForGrid,
                itemclick: this.edit,
                cellkeydown: this.pressKey
            },
            "#btnKhachHangLuu": {
                click: this.save
            },
            //"#btnKhachHangLamLai": {
            //    click: this.refesh
            //},
            "#btnKhachHangFilter": {
                click: this.filterData
            },
            "#btnClearFilterKhachHang": {
                click: this.clearFilterData
            },
            "#btnKhachHangShowFilter": {
                click: this.showFilterForm
            }
        });
    },

    finishedLoadStore: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.KhachHangController.finishedLoadStore()]");
        }
        
        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        //var store = Ext.getStore("StoreKhachHang");
        var grid = this.getGirdKhachHang();
        grid.getSelectionModel().select(0, true);
    },

    initStoreForGrid: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.KhachHangController.initStoreForGrid()]");
        }
        var store = Ext.getStore("StoreKhachHang");
        var grid = this.getGirdKhachHang();
        grid.getStore().load();
    },

    selectionKhachHangChange: function (model, records) {
        if (debug) {
            console.log("This event will be fired when the grid change selection row. [iBRP.controller.KhachHangController.selectionKhachHangChange()]");
        }

        var fields;
        var form = this.getFormKhachHang().getForm();
        if (records[0]) {
            rec = records[0];
            iBRP.model.ModelHelper.enableForm(form);
            form.loadRecord(rec);
        }

        //Enable toolbar and diable form button
        this.disableControl(false, false);
    },

    themKhachHang: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Them. [iBRP.controller.KhachHangController.themKhachHang()]');
        }
        //Clear value of the fields on the form and set ocus for the first field.
        form = this.getFormKhachHang().getForm();
        iBRP.model.ModelHelper.clearForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    suaKhachHang: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Sua.[iBRP.controller.KhachHangController.suaKhachHang()]');
        }
        var form = this.getFormKhachHang().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    xoaKhachHang: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.KhachHangController.xoaKhachHang()]');
        }
        this.deleteSelectionRow();
    },
    inKhachHang: function () {
        console.log('This event will be fired when user click on button In. [iBRP.controller.KhachHangController.inKhachHang()]');
    },
    thoatKhachHang: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.KhachHangController.thoatKhachHang()]');
        }
        this.getLayoutKhachHang().close();
    },
    save: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Luu. [iBRP.controller.KhachHangController.save()]');
        }
        var form = this.getFormKhachHang().getForm();
        var store = Ext.getStore("StoreKhachHang");
        var grid = this.getGirdKhachHang();
        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: '/KhachHang/Update',
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
            console.log('This event will be fired when user click on button Lam Lai. [iBRP.controller.KhachHangController.refesh()]');
        }
        var form = this.getFormKhachHang().getForm();
        form.reset();
    },
    edit: function () {
        if (debug) {
            console.log('This event will be fired when user double click on item on the gird. [iBRP.controller.KhachHangController.edit()]');
        }
        var form = this.getFormKhachHang().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    disableControl: function (tlbar, frmButton) {
        //disable all toolbar button
        var arrayButton = Array();
        arrayButton[0] = "btnKhachHangThemMoi";
        //arrayButton[1] = "btnKhachHangChinhSua";
        arrayButton[1] = "btnKhachHangXoa";
        arrayButton[2] = "btnKhachHangIn";
        iBRP.model.ModelHelper.disableButtons(arrayButton, tlbar);
        //enable Luu, Lam Lai button
        var arrayButton = Array();
        arrayButton[0] = "btnKhachHangLuu";
        //arrayButton[1] = "btnKhachHangLamLai";
        iBRP.model.ModelHelper.disableButtons(arrayButton, frmButton);
    },
    deleteSelectionRow: function () {
        if (debug) {
            console.log('This function will be called when user delete item on the grid. [iBRP.controller.KhachHangController.deleteSelectionRow()]');
        }
        var grid = this.getGirdKhachHang();
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
                        maKhachHang = sel.get('MAKHACHHANG');
                        Ext.MessageBox.wait(
                            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                            Globals.Langs.Common.thong_bao
                        );
                        if (maKhachHang != '') {
                            Ext.Ajax.request({
                                url: '/KhachHang/Delete',
                                timeout: 2400,
                                params: {
                                    makhachhang: maKhachHang
                                },
                                method: 'POST',
                                success: function (response, opts) {
                                    Ext.MessageBox.hide();
                                    grid.getStore().remove(sel);
                                    grid.store.load();
                                    grid.reconfigure();
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
            console.log('This function will be called when user press key on the item grid. [iBRP.controller.KhachHangController.pressKey()]');
        }
        var key = e.getKey();
        switch (key) {
            case e.DELETE:
                this.deleteSelectionRow();
                break;
            case e.ENTER:
                var form = this.getFormKhachHang().getForm();
                iBRP.model.ModelHelper.enableForm(form);

                //Disable toolbar and enable form button
                this.disableControl(true, false);
                break;
            case e.F:
                console.log("Show Filter Form");
                var filterForm = Ext.create("iBRP.view.khachhang.FormFilter");
                var tenKhachHang = Ext.util.Cookies.get("tenKhachHang");
                //var manganh = Ext.util.Cookies.get("manganh");
                this.getFtenKhachHang().setValue(tenKhachHang);
                //this.getFmaNganh().setValue(manganh);

                filterForm.show();
                break;
        }
    },

    filterData: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.KhachHangController.filterData()]');
        }

        var tenKhachHang = this.getFtenKhachHang().getValue();
        //var manganh = this.getFmaNganh().getValue();
        Ext.util.Cookies.set("tenKhachHang", tenKhachHang);
        //Ext.util.Cookies.set("manganh", manganh);

        var grid = this.getGirdKhachHang();
        //Clear old filter
        grid.getStore().clearFilter(true);

        if (tenKhachHang != '') {
            grid.getStore().filter('TENKHACHHANG', tenKhachHang);
        }
        //if (manganh != '') {
        //    grid.getStore().filter('MANGANH', manganh);
        //}
        grid.getStore().currentPage = 1;
        grid.reconfigure();
        this.getFormFilterKhachHang().close();
    },

    clearFilterData: function () {
        if (debug) {
            console.log('This function will be called when button Bo loc du lieu was clicked. [iBRP.controller.KhachHangController.clearFilterData()]');
        }
        //Clear filter data on the filter form
        this.getFtenKhachHang().setValue("");
        //this.getFmaNganh().setValue("");
        Ext.util.Cookies.set("tenKhachHang", "");
        //Ext.util.Cookies.set("manganh", "");

        //Reload for grid
        var grid = this.getGirdKhachHang();
        grid.getStore().clearFilter(true);
        grid.getStore().load();
        grid.reconfigure();
        this.getFormFilterKhachHang().close();
    },

    showFilterForm: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.KhachHangController.showFilterForm()]');
        }
        var filterForm = Ext.create("iBRP.view.tenKhachHang.FormFilter");
        var tenKhachHang = Ext.util.Cookies.get("tenKhachHang");
        //var manganh = Ext.util.Cookies.get("manganh");
        this.getFtenKhachHang().setValue(tenKhachHang);
        //this.getFmaNganh().setValue(manganh);

        filterForm.show();
    }

});