Ext.define("iBRP.store.StoreNhom", {
    extend: "Ext.data.Store",
    xtype: "storenhom",
    model: "iBRP.model.ModelNhom",
    autoLoad: false,
    pageSize: Globals.Vars.perItems,
    remoteSort: true,
    remoteFilter: true,
    proxy: {
        type: "ajax",
        api: {
            read: "/Nhom/List",
            update: '/Nhom/Update'
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