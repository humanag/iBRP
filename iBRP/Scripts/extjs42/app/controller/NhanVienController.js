Ext.define("iBRP.controller.NhanVienController", {
    extend: "Ext.app.Controller",
    models: ["ModelNhanVien"],
    stores: ["StoreNhanVien"],
    views: ["nhanvien.LayoutNhanVien", "nhanvien.GirdNhanVien", "nhanvien.FormNhanVien", "nhanvien.FormFilter"],
    refs: [
        {
            ref: 'formNhanVien',
            selector: 'formnhanvien'
        },
        {
            ref: 'girdNhanVien',
            selector: 'girdnhanvien'
        },
        {
            ref: "maNhanVien",
            selector: "formnhanvien textfield[id=manhanvien]"
        },
        {
            ref: "tenNhanVien",
            selector: "formnhanvien textfield[id=tennhanvien]"
        },
        //{
        //    ref: "fmaNganh",
        //    selector: "formfilternganhhang textfield[id=fmanghanh]"
        //},
        {
            ref: "ftenNhanVien",
            selector: "formfilternhanvien textfield[id=ftennhanvien]"
        },
        {
            ref: "layoutNhanVien",
            selector: "layoutnhanvien"
        },
        {
            ref: 'formFilterNhanVien',
            selector: "formfilternhanvien"
        }
    ],

    init: function () {
        if (debug) {
            console.log("Init NhanVien Controller");
        }

        //Clear all old session
        Ext.util.Cookies.set("tenNhanVien", "");
        //Ext.util.Cookies.set("manganh", "");

        //Register events for store
        var store = Ext.getStore("StoreNhanVien");
        store.addListener('load', this.finishedLoadStore, this);

        this.control({
            "#btnNhanVienThemMoi": {
                click: this.themNhanVien
            },
            "#btnNhanVienXoa": {
                click: this.xoaNhanVien
            },
            "#btnNhanVienIn": {
                click: this.inNhanVien
            },
            "#btnNhanVienKetThuc": {
                click: this.thoatNhanVien
            },
            "girdnhanvien": {
                selectionchange: this.selectionNhanVienChange,
                beforerender: this.initStoreForGrid,
                itemclick: this.edit,
                cellkeydown: this.pressKey
            },
            "#btnNhanVienLuu": {
                click: this.save
            },
            "#btnNhanVienFilter": {
                click: this.filterData
            },
            "#btnClearFilterNhanVien": {
                click: this.clearFilterData
            },
            "#btnNhanVienShowFilter": {
                click: this.showFilterForm
            }
        });
    },

    finishedLoadStore: function (store, records, successful, eOpts) {
        if (debug) {
            console.log("This event will be fire whenever store is loaded. [iBRP.controller.NhanVienController.finishedLoadStore()]");
        }
        
        //If last page has just one record and we deleted this record so you need to load previous page.
        if (records != null && records.length <= 0 && store.currentPage > 1) {
            store.currentPage = store.currentPage - 1;
            store.load();
        }

        //var store = Ext.getStore("StoreNhanVien");
        var grid = this.getGirdNhanVien();
        grid.getSelectionModel().select(0, true);
    },

    initStoreForGrid: function () {
        if (debug) {
            console.log("Before render grid we need to load store. [iBRP.controller.NhanVienController.initStoreForGrid()]");
        }
        var store = Ext.getStore("StoreNhanVien");
        var grid = this.getGirdNhanVien();
        grid.getStore().load();
    },

    selectionNhanVienChange: function (model, records) {
        if (debug) {
            console.log("This event will be fired when the grid change selection row. [iBRP.controller.NhanVienController.selectionNhanVienChange()]");
        }

        var fields;
        var form = this.getFormNhanVien().getForm();
        if (records[0]) {
            rec = records[0];
            iBRP.model.ModelHelper.enableForm(form);
            form.loadRecord(rec);
        }

        //Enable toolbar and diable form button
        this.disableControl(false, false);
    },

    themNhanVien: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Them. [iBRP.controller.NhanVienController.themNhanVien()]');
        }
        //Clear value of the fields on the form and set ocus for the first field.
        form = this.getFormNhanVien().getForm();
        iBRP.model.ModelHelper.clearForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    suaNhanVien: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Sua.[iBRP.controller.NhanVienController.suaNhanVien()]');
        }
        var form = this.getFormNhanVien().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    xoaNhanVien: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Xoa. [iBRP.controller.NhanVienController.xoaNhanVien()]');
        }
        this.deleteSelectionRow();
    },
    inNhanVien: function () {
        console.log('This event will be fired when user click on button In. [iBRP.controller.NhanVienController.inNhanVien()]');
    },
    thoatNhanVien: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Thoat. [iBRP.controller.NhanVienController.thoatNhanVien()]');
        }
        this.getLayoutNhanVien().close();
    },
    save: function () {
        if (debug) {
            console.log('This event will be fired when user click on button Luu. [iBRP.controller.NhanVienController.save()]');
        }
        var form = this.getFormNhanVien().getForm();
        var store = Ext.getStore("StoreNhanVien");
        var grid = this.getGirdNhanVien();
        if (form.isValid()) {
            form.submit({
                method: 'POST',
                url: '/NhanVien/Update',
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
            console.log('This event will be fired when user click on button Lam Lai. [iBRP.controller.NhanVienController.refesh()]');
        }
        var form = this.getFormNhanVien().getForm();
        form.reset();
    },
    edit: function () {
        if (debug) {
            console.log('This event will be fired when user double click on item on the gird. [iBRP.controller.NhanVienController.edit()]');
        }
        var form = this.getFormNhanVien().getForm();
        iBRP.model.ModelHelper.enableForm(form);

        //Disable toolbar and enable form button
        this.disableControl(false, false);
    },
    disableControl: function (tlbar, frmButton) {
        //disable all toolbar button
        var arrayButton = Array();
        arrayButton[0] = "btnNhanVienThemMoi";
        //arrayButton[1] = "btnNhanVienChinhSua";
        arrayButton[1] = "btnNhanVienXoa";
        arrayButton[2] = "btnNhanVienIn";
        iBRP.model.ModelHelper.disableButtons(arrayButton, tlbar);
        //enable Luu, Lam Lai button
        var arrayButton = Array();
        arrayButton[0] = "btnNhanVienLuu";
        //arrayButton[1] = "btnNhanVienLamLai";
        iBRP.model.ModelHelper.disableButtons(arrayButton, frmButton);
    },
    deleteSelectionRow: function () {
        if (debug) {
            console.log('This function will be called when user delete item on the grid. [iBRP.controller.NhanVienController.deleteSelectionRow()]');
        }
        var grid = this.getGirdNhanVien();
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
                        maNhanVien = sel.get('MANHANVIEN');
                        Ext.MessageBox.wait(
                            Globals.Langs.Common.he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat,
                            Globals.Langs.Common.thong_bao
                        );
                        if (maNhanVien != '') {
                            Ext.Ajax.request({
                                url: '/NhanVien/Delete',
                                timeout: 2400,
                                params: {
                                    manhanvien: maNhanVien
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
            console.log('This function will be called when user press key on the item grid. [iBRP.controller.NhanVienController.pressKey()]');
        }
        var key = e.getKey();
        switch (key) {
            case e.DELETE:
                this.deleteSelectionRow();
                break;
            case e.ENTER:
                var form = this.getFormNhanVien().getForm();
                iBRP.model.ModelHelper.enableForm(form);

                //Disable toolbar and enable form button
                this.disableControl(true, false);
                break;
            case e.F:
                console.log("Show Filter Form");
                var filterForm = Ext.create("iBRP.view.nhanvien.FormFilter");
                var tenNhanVien = Ext.util.Cookies.get("tenNhanVien");
                //var manganh = Ext.util.Cookies.get("manganh");
                this.getFtenNhanVien().setValue(tenNhanVien);
                //this.getFmaNganh().setValue(manganh);

                filterForm.show();
                break;
        }
    },

    filterData: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.NhanVienController.filterData()]');
        }

        var tenNhanVien = this.getFtenNhanVien().getValue();
        //var manganh = this.getFmaNganh().getValue();
        Ext.util.Cookies.set("tenNhanVien", tenNhanVien);
        //Ext.util.Cookies.set("manganh", manganh);

        var grid = this.getGirdNhanVien();
        //Clear old filter
        grid.getStore().clearFilter(true);

        if (tenNhanVien != '') {
            grid.getStore().filter('TENNHANVIEN', tenNhanVien);
        }
        //if (manganh != '') {
        //    grid.getStore().filter('MANGANH', manganh);
        //}
        grid.getStore().currentPage = 1;
        grid.reconfigure();
        this.getFormFilterNhanVien().close();
    },

    clearFilterData: function () {
        if (debug) {
            console.log('This function will be called when button Bo loc du lieu was clicked. [iBRP.controller.NhanVienController.clearFilterData()]');
        }
        //Clear filter data on the filter form
        this.getFtenNhanVien().setValue("");
        //this.getFmaNganh().setValue("");
        Ext.util.Cookies.set("tenNhanVien", "");
        //Ext.util.Cookies.set("manganh", "");

        //Reload for grid
        var grid = this.getGirdNhanVien();
        grid.getStore().clearFilter(true);
        grid.getStore().load();
        grid.reconfigure();
        this.getFormFilterNhanVien().close();
    },

    showFilterForm: function () {
        if (debug) {
            console.log('This function will be called when button Loc du lieu was clicked. [iBRP.controller.NhanVienController.showFilterForm()]');
        }
        var filterForm = Ext.create("iBRP.view.tenNhanVien.FormFilter");
        var tenNhanVien = Ext.util.Cookies.get("tenNhanVien");
        //var manganh = Ext.util.Cookies.get("manganh");
        this.getFtenNhanVien().setValue(tenNhanVien);
        //this.getFmaNganh().setValue(manganh);

        filterForm.show();
    }

});