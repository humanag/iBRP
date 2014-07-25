Ext.define('iBRP.view.home.LayoutHome', {
    extend: 'Ext.panel.Panel',
    xtype: "layouthome",
    initComponent: function () {
        Ext.apply(this, {
            id: 'idLayoutHome',
            draggable: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            width: document.body.offsetWidth,
            height: document.body.offsetHeight,
            layout: 'border',
            border: false,
            closable: true,
            layout: 'border',
            id: 'main',
            items: [
                {
                    region: "north",
                    border: false,
                    tbar: [{
                        xtype: 'toolbar',
                        items: [{
                            text: 'HE THONG',
                            iconCls: 'icon-table',
                            menu: [
                                {
                                    text: 'Exit',
                                    handler: function (item) {
                                        window.location.href = '/Auth/Login'
                                    }
                                }
                            ]
                        }, '-', {
                            text: 'SAN PHAM',
                            iconCls: 'icon-chart',
                            menu: [{ text: 'Menu 3' }, { text: 'Menu 4' }]
                        }, '-', {
                            text: 'DANH MUC',
                            iconCls: 'icon-chart',
                            menu: [
                                {
                                    text: 'DM NGANH HANG',
                                    handler: function (item) {
                                        console.log('Load grid nganh hang');
                                        //Show main layout for DM Nganh Hang
                                        var store = Ext.getStore("StoreNganhHang");
                                        store.load();
                                        var nganhhang = Ext.create("iBRP.view.nganhhang.LayoutNganhHang");
                                        nganhhang.show();
                                    }
                                }, {
                                    text: 'DM NHA CUNG CAP',
                                    handler: function () {
                                        //Show main layout for DM Nganh Hang
                                        //var dmNcc = new DMNhaCungCap();
                                        //dmNcc.showMainWindow(document.body.offsetWidth, document.body.offsetHeight);
                                    }
                                }
                            ]
                        }, '-', {
                            text: 'BAO CAO',
                            iconCls: 'icon-chart',
                            menu: [{ text: 'Menu 3' }, { text: 'Menu 4' }]
                        }, '-', {
                            text: 'TRO GIUP',
                            iconCls: 'icon-chart',
                            menu: [{ text: 'Menu 3' }, { text: 'Menu 4' }]
                        }]
                    }]
                },
                {
                    region: 'center',
                    border: false
                }
            ]
        });
        this.callParent(arguments);
    }
});