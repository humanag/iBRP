Ext.define("iBRP.model.ModelHelper", {
    singleton: true,

    clearForm: function (form) {
        if (debug) {
            console.log("This function will clear value of the fields on the form and will set focus for the first field. [iBRP.model.ModelHelper.clearForm()]");
        }
        var isFocus = true;
        fields = form.getFields();
        fields.each(function (field) {
            if (isFocus) {
                field.focus(true, 200);
                isFocus = false;
            }
            field.enable();
            field.setValue('');
        });
    },
    disabledForm: function (form) {
        if (debug) {
            console.log("This function will set disable for all fields on the form. [iBRP.model.ModelHelper.disabledForm()]");
        }
        fields = form.getFields();
        fields.each(function (field) {
            field.setDisabled(true);
        });
    },
    enableForm: function (form) {
        if (debug) {
            console.log("This function will set enable for all fields on the form. [iBRP.model.ModelHelper.enableForm()]");
        }
        var isFocus = false;
        fields = form.getFields();
        fields.each(function (field) {
            if (isFocus) {
                field.focus(true, 200);
                isFocus = false;
            }
            field.enable();
        });
    },

    showSuccessMsg: function () {
        if (debug) {
            console.log("This function will be show a success message. [iBRP.model.ModelHelper.showSuccessMsg()]");
        }
        Ext.Msg.show({
            title: Globals.Langs.Common.thong_bao,
            msg: Globals.Langs.Common.thao_tac_thanh_cong,
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.INFO
        })
    },

    showErrorMsg: function () {
        if (debug) {
            console.log("This function will be show an error message. [iBRP.model.ModelHelper.showSuccessMsg()]");
        }
        Ext.Msg.show({
            title: Globals.Langs.Common.thong_bao,
            msg: Globals.Langs.Common.thao_tac_khong_thanh_cong,
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.ERROR
        })
    },

    showErrorMsg: function (response) {
        if (debug) {
            console.log("This function will be show an error message. [iBRP.model.ModelHelper.showErrorMsg()]");
        }

        var errorMsg = Globals.Langs.Common.qua_trinh_ket_noi_may_chu_gap_van_de;
        switch (parseInt(Globals.Vars.showError)) {
            case parseInt(Globals.Vars.ErrorTypes.detail):
                errorMsg = response.responseText;
                break;
            default:
        }

        Ext.Msg.show({
            title: Globals.Langs.Common.thong_bao,
            msg: errorMsg,
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.ERROR,
            cls: 'myWindowCls'
        });

    },
    disableButtons: function (arrButton, v) {
        if (debug) {
            console.log("This function will set disable for buttons. [iBRP.model.ModelHelper.disableButtons()]");
        }
        for (var i = 0; i < arrButton.length; i++) {
            var nameBtn = arrButton[i]
            var btn = Ext.getCmp(nameBtn);
            btn.setDisabled(v);
        }
    }
});