﻿Ext.require([
    'Ext.form.*',
    'Ext.window.Window',
    "iBRP.view.nganhhang.TopMenu",
    "iBRP.view.nganhhang.GirdNganhHang",
    "iBRP.view.nganhhang.FormNganhHang",
]);

Ext.define('iBRP.view.nganhhang.LayoutNganhHang', {
    extend: 'Ext.window.Window',
    xtype: "layoutnganhhang",
    initComponent: function () {
        Ext.apply(this, {
            title: Globals.Langs.NganhHang.danh_sach_nganh_hang,
            id: 'mainWindowDMNganhHang',
            draggable: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            width: document.body.offsetWidth,
            height: document.body.offsetHeight,
            layout: 'border',
            border: false,
            closable: true,
            items: [
            {
                //Menu top phia tren
                region: 'north',
                tbar: [
                    { xtype: "nganhhangtopmenu" }
                ]
            }, {
                //Form ben trai
                region: 'east',
                id: 'panelLeft',
                title: Globals.Langs.Common.thong_tin_chi_tiet,
                split: true,
                collapsed: false,
                collapsible: true,
                animCollapse: true,
                collapseMode: 'mini',
                width: 400,
                items: [
                    { xtype: "formnganhhang" }
                ]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [
                    { xtype: "girdnganhhang" }
                ]
            }
            ]//item layout border
        });
        this.callParent(arguments);
    }
});