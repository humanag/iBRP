Ext.define('iBRP.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'loginform',
    initComponent: function() {
        Ext.apply(this,
                {
                    xtype: 'form',
                    bodyStyle: 'padding:15px;background:transparent',
                    border: false,
                    items: [
                        {xtype: 'textfield', id: 'username', fieldLabel: 'Username',
                            allowBlank: false, minLength: 3, maxLength: 32, width: 300
                        },
                        {xtype: 'textfield', id: 'password', fieldLabel: 'Password', inputType: 'password',
                            allowBlank: false, minLength: 3, maxLength: 32, width: 300
                        }
                    ],
                    buttons: [{
                            text: 'Login',
                            handler: function() {
//                                Ext.getCmp('login-form').getForm().submit(
//                                        {
//                                            waitMsg: 'Processing',
//                                            success: function(form, action) {
//                                                window.location.href = '/admin';
//                                            },
//                                            failure: function(form, action) {
//                                                Ext.Msg.show({
//                                                    title: 'Warning',
//                                                    msg: 'Username or Password is invalid.',
//                                                    icon: Ext.MessageBox.ERROR,
//                                                    buttons: Ext.MessageBox.OK
//                                                });
//                                            }
//                                        }
//                                );
                            }
                        }]

                });
        this.callParent(arguments);
    }
    
});
