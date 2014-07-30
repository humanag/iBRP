Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.khacct.TopMenu",
]);

var rowEditingCT = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToEdit: 0,
    autoCancel: false,
    listeners: {
        edit: function (editor, context, eOpts) {
            if (debug) {
                console.log('This function will be call when Update button on the grid was clicked.');
            }
            //Call update4KhacTable from controller function in order to update data for Khac table.
            iBRP.app.getController("iBRP.controller.KhacCTController").update4KhacCTTable(editor, context, eOpts);
        },
    }
});

Ext.define("iBRP.view.khacct.GridKhacCT", {
    extend: "Ext.grid.Panel",
    xtype: "gridkhacct",
    store: 'StoreKhacCT',
    id: "idGirdKhacCT",
    scroll: true,
    plugins: [rowEditingCT],
    height: 625,
    tbar: [
        {
            xtype: 'button',
            id: 'btnKhacCTThemMoi',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_them_moi + '<span>', //Thêm Mới
            icon: Globals.Langs.Common.toolbar_image_them_moi,
            handler: function () {
                if (debug) {
                    console.log('This event will be fired when user click on button Them. [iBRP.view.khacct.themKhacCT()]');
                }
                // Create a model instance
                var r = Ext.create('iBRP.model.ModelKhacCT', {
                    MAKHAC_CT: Globals.Langs.KhacCT.ma_khac_ct,
                    TENKHAC_CT: Globals.Langs.KhacCT.ten_khac_ct,
                }
                );
                var store = Ext.getStore('StoreKhacCT');
                store.insert(0, r);
                rowEditingCT.startEdit(r, 0);
            }
        }, '-', {
            xtype: 'button',
            id: 'btnKhacCTXoa',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_xoa + '<span>',
            icon: Globals.Langs.Common.toolbar_image_xoa,
        }, '-', {
            xtype: 'button',
            id: 'btnKhacCTIn',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_in + '<span>',
            icon: Globals.Langs.Common.toolbar_image_in,
        }, '-', {
            xtype: 'button',
            id: 'btnKhacCTKetThuc',
            text: '<span class="buttonOnLayout">' + Globals.Langs.Common.toolbar_ket_thuc + '<span>',
            icon: Globals.Langs.Common.toolbar_image_ket_thuc,
        },
        ,"->",
        {
            id: "cboMaKhacOnFilterGridKhacCT",
            name: "MAKHAC",
            xtype: "combobox",
            fieldLabel: Globals.Langs.KhacCT.ten_khac,
            queryMode: 'local',
            displayField: 'TENKHAC',
            valueField: 'MAKHAC',
            allowBlank: false,
            store: new Ext.data.Store({
                fields: ['MAKHAC', 'TENKHAC'],
                autoLoad: true,
                proxy: {
                    type: "ajax",
                    api: {
                        read: "/KhacCT/OptionsKhac",
                    },
                    reader: {
                        type: "json",
                        root: "actionitems",
                        idProperty: 'MAKHAC'
                    }
                },
            }),
        }
    ],
    columns: [
        { header: Globals.Langs.KhacCT.ma_khac_ct, dataIndex: "MAKHAC_CT", width: 100, cls: 'gridTitleCenterCss', editor: { allowBlank: false } },
        { header: Globals.Langs.KhacCT.ten_khac_ct, dataIndex: "TENKHAC_CT", width: 400, cls: 'gridTitleCenterCss', editor: { allowBlank: false } },
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StoreKhacCT',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true,
        displayMsg: Globals.Langs.Common.hien_thi + ' {0} - {1} ' + Globals.Langs.Common.trong_tong_so + ' {2} ' + Globals.Langs.Common.mau_tin + '.',
        emptyMsg: Globals.Langs.Common.khong_ton_tai_mau_tin_nao
    }],
});