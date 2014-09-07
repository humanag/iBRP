Ext.define("iBRP.store.StoreNganhHang", {
    extend: "Ext.data.Store",
    xtype: "storenganhhang",
    model: "iBRP.model.ModelNganhHang",
    autoLoad: false,
    pageSize: Globals.Vars.perItems,
    remoteSort: true,
    remoteFilter: true,
    proxy: {
        type: "ajax",
        api: {
            read: "/NganhHang/List",
            update: '/NganhHang/Update'
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