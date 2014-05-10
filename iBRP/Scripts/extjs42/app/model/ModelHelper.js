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
        var isFocus = true;
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