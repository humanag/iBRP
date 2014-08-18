Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.chungtu.TopMenu",
    "iBRP.view.chungtu.GridChungTu",
    "iBRP.view.chungtu.GridChungTuCT",
    "iBRP.view.chungtu.FormChungTu",
    "iBRP.view.chungtu.LayoutChiTiet"
]);

Ext.define('iBRP.view.chungtu.LayoutChungTu', {
    extend: 'Ext.window.Window',
    xtype: "layoutchungtu",
    initComponent: function () {
        Ext.apply(this, {
            id: 'mainWindowDMChungTu',
            modal: true,
            draggable: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            width: document.body.offsetWidth,
            height: document.body.offsetHeight,
            margin: Globals.Vars.lenghtOfMainMenu + ' 0 0 0',
            layout: 'border',
            border: false,
            closable: true,
            items: [
            {
                //Vung luoi o giua
                region: 'center',
                items: [
                    {
                        title: Globals.Langs.ChungTu.danh_sach_chung_tu,
                        xtype: 'gridchungtu',
                    }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});