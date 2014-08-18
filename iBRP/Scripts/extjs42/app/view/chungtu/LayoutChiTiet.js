Ext.define('iBRP.view.chungtu.LayoutChiTiet', {
    extend: "Ext.window.Window",
    xtype: "layoutchungtuct",
    id: "idlayoutchungtuct",
    border: false,
    modal: true,
    title: Globals.Langs.ChungTu.chi_tiet,
    items: [
       {
            title: Globals.Langs.ChungTu.danh_sach_chung_tu,
            xtype: 'gridchungtuct'
       }
    ]

});