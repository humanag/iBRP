Ext.define("iBRP.store.StoreKhac", {
    extend: "Ext.data.Store",
    xtype: "storekhac",
    model: "iBRP.model.ModelKhac",
    autoLoad: false,
    pageSize: Globals.Vars.perItems,
    remoteSort: true,
    remoteFilter: true,
    proxy: {
        type: "ajax",
        api: {
            read: "/KhacCT/ListKhac",
        },
        reader: {
            type: "json",
            root: "actionitems",
            totalProperty: 'totalCount',
            successProperty: 'success'
        },
        listeners: {
            exception: function (proxy, response, operation, eventOpts) {
                if (debug) {
                    console.log(response);
                }
                iBRP.model.ModelHelper.showErrorMsg(response);

            }
        }
    }
});