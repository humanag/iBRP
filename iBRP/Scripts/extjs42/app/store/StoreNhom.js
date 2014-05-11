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
        }
    }
});