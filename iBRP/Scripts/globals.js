debug = true;

var Globals = {
    //Define global configs
    Vars: {
        perItems: 5,
        lenghtOfMainMenu: 30,
        showError: 2,
        ErrorTypes: {
            generalness: 1,   //show generalness error message.
            detail: 2         //show detail error message.
        }
    },

    //Define global languages
    Langs: {
        //define common languages
        Common: {
            mainmenu_he_thong: 'HỆ THỐNG',
            mainmenu_san_pham: 'SẢN PHẨM',
            mainmenu_danh_muc: 'DANH MỤC',
            mainmenu_bao_cao: 'BÁO CÁO',
            mainmenu_tro_giup: 'TRỢ GIÚP',
            main_menu_submenu_dm_nganhhang: 'DM NGÀNH HÀNG',
            main_menu_submenu_dm_nhom: 'DM NHÓM',
            main_menu_submenu_dm_khach_hang: 'DM KHÁCH HÀNG',
            main_menu_submenu_dm_khac_ct: 'DM KHÁC',
            toolbar_them_moi: 'Thêm Mới',
            toolbar_image_them_moi: '../Content/themes/iBRP/images/icons/16/add.png',
            toolbar_chinh_sua: 'Chỉnh Sửa',
            toolbar_image_chinh_sua: '../Content/themes/iBRP/images/icons/16/edit.png',
            toolbar_xoa: 'Xóa',
            toolbar_image_xoa: '../Content/themes/iBRP/images/icons/16/delete.png',
            toolbar_in: 'In',
            toolbar_image_in: '../Content/themes/iBRP/images/icons/16/print.png',
            toolbar_ket_thuc: 'Kết Thúc',
            toolbar_image_ket_thuc: '../Content/themes/iBRP/images/icons/16/home.png',
            toolbar_loc_du_lieu: 'Lọc dữ liệu',
            toolbar_image_loc_du_lieu: '../Content/themes/iBRP/images/icons/16/home.png',
            button_luu: 'Lưu',
            button_image_luu: '../Content/themes/iBRP/images/icons/16/save.png',
            button_nhap_lai: 'Nhập Lại',
            button_image_nhap_lai: '../Content/themes/iBRP/images/icons/16/refesh.png',
            button_loc_du_lieu: 'Lọc dữ liệu',
            hien_thi: 'Hiện thị',
            trong_tong_so: 'trong tổng số',
            mau_tin: 'mẫu tin',
            thong_tin_chi_tiet: 'Thông Tin Chi Tiết',
            khong_ton_tai_mau_tin_nao: 'Không tồn tại mẫu tin nào',
            he_thong_dang_xu_ly_xin_vui_long_cho_trong_giay_lat: 'Hệ thống đang xữ lý. Xin vui lòng chờ trong giây lát.',
            thong_bao: 'Thông báo',
            thao_tac_thanh_cong: 'Thao tác thành công.',
            thao_tac_khong_thanh_cong: 'Thao tác không thành công. Xin vui lòng thực hiện lại.',
            canh_bao: 'Cảnh Báo',
            ban_co_chac_muon_xoa_mau_tin_nay_khong: 'Bạn có chắc muốn xóa mẫu tin này không?',
            du_lieu_khong_hop_le_xin_vui_long_kiem_tra_lai: 'Dữ liệu không hợp lệ. Xin vui lòng kiểm tra lại.',
            loc_du_lieu: 'Lọc dữ liệu',
            bo_loc_du_lieu: 'Bỏ dữ liệu',
            xin_vui_long_chon_mau_tin: 'Xin vui lòng chọn mẫu tin.',
            qua_trinh_ket_noi_may_chu_gap_van_de: 'Quá trình kết nối với máy chủ gặp vấn đề. xin vui lòng liên hệ với người quản trị.'
        },
        //define nganhHang languages
        NganhHang: {
            nganh_hang: 'Ngành Hàng',
            danh_sach_nganh_hang: 'DANH MỤC NGÀNH HÀNG',
            ma_nganh: 'Mã ngành',
            ten_nganh: 'Tên ngành'
        },
        //define nhom languages
        Nhom: {
            nhom: 'Nhóm',
            danh_sach_nhom: 'DANH MỤC NHÓM',
            ma_nhom: 'Mã nhóm',
            ten_nhom: 'Tên nhóm'
        },
        //define nganhHang languages
        KhachHang: {
            khach_hang: 'Khách Hàng',
            danh_sach_khach_hang: 'DANH MỤC KHÁCH HÀNG',
            ma_khach_hang: 'Mã khách hàng',
            ten_khach_hang: 'Tên khách hàng'
        },
        //define nhom languages
        KhacCT: {
            khac_ct: 'Khác',
            danh_sach_khac: 'DANH MỤC KHÁC',
            danh_sach_khac_ct: 'CHI TIẾT',
            ma_khac: 'Mã khác',
            ma_khac_ct: 'Mã khác chi tiết',
            ten_khac_ct: 'Tên khác chi tiết',
            ten_khac: 'Tên khác',
            loai: 'Loại'
        },
    }
    
}
