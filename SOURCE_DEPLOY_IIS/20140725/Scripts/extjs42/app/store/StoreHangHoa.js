Ext.define("iBRP.store.StoreHangHoa", {
    extend: "Ext.data.Store",
    xtype: "storehanghoa",
    model: "iBRP.model.ModelHangHoa",
    autoLoad: false,
    pageSize: Globals.Vars.perItems,
    remoteSort: true,
    remoteFilter: true,
    proxy: {
        type: "ajax",
        api: {
            read: "/HangHoa/List",
            update: '/HangHoa/Update'
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