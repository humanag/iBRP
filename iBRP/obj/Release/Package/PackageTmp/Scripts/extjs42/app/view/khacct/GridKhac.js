Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.store.StoreKhac",
]);

var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToEdit: 0,
    autoCancel: false,
    listeners: {
        edit: function (editor, context, eOpts) {
            if (debug) {
                console.log('This function will be call when Update button on the grid was clicked.');
            }
            //Call update4KhacTable from controller function in order to update data for Khac table.
            iBRP.app.getController("iBRP.controller.KhacCTController").update4KhacTable(editor, context, eOpts);
        },
    }
});

Ext.define("iBRP.view.khacct.GridKhac", {
    extend: "Ext.grid.Panel",
    xtype: "gridkhac",
    store: 'StoreKhac',
    id: "idGirdKhac",
    scroll: true,
    plugins: [rowEditing],
    selType: 'rowmodel',
    border: false,
    tbar: [
        {
            xtype: 'button',
            id: 'btnKhacThemMoi',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '<span>', //Thêm Mới
            icon: Globals.Langs.Common.toolbar_image_them_moi,
        }, '-', {
            xtype: 'button',
            id: 'btnKhacXoa',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '<span>',
            icon: Globals.Langs.Common.toolbar_image_xoa,
        }, '-', {
            xtype: 'button',
            id: 'btnKhacIn',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in + '<span>',
            icon: Globals.Langs.Common.toolbar_image_in,
        }, '-', {
            xtype: 'button',
            id: 'btnKhacKetThuc',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '<span>',
            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
        }
    ],
    columns: [
        {
            header: Globals.Langs.KhacCT.ma_khac,
            dataIndex: "MAKHAC",
            cls: 'gridTitleCenterCss',
            width: 200,
            editor: {
                allowBlank: false
            }
        },
        {
            header: Globals.Langs.KhacCT.ten_khac,
            dataIndex: "TENKHAC",
            cls: 'gridTitleCenterCss',
            width: 400,
            editor: {
                allowBlank: false
            }
        },
        {
            header: Globals.Langs.KhacCT.loai,
            dataIndex: "PLOAI",
            cls: 'gridTitleCenterCss',
            width: 100,
            editor: {
                allowBlank: true
            }
        },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreKhac',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});