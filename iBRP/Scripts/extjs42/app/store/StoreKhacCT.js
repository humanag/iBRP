Ext.define("iBRP.store.StoreKhacCT", {
    extend: "Ext.data.Store",
    xtype: "storekhacct",
    model: "iBRP.model.ModelKhacCT",
    autoLoad: false,
    pageSize: Globals.Vars.perItems,
    remoteSort: true,
    remoteFilter: true,
    proxy: {
        type: "ajax",
        api: {
            read: "/KhacCT/List",
            update: '/KhacCT/Update'
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