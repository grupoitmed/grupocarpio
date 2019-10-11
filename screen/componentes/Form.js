import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import Inout from './Inputs'

export const LoginStruct = t.struct({
    user: t.String,
    password: t.String,
});

export const LoginOptions = {
    fields: {
        user: {
            template:Inout,
            config:{
                placeholder:"Introduce tu usuario",
                password:false,
                secureTextEntry:false,
                iconType:"font-awesome",
                iconName:"user",
                styles:{
                    width:'45%',
                },
            }
        },
        password:{
            template:Inout,
            config:{
                placeholder:"Introduce tu contraseña",
                secureTextEntry:true,
                password:true,
                iconType:"font-awesome",
                iconName:"lock",
                styles:{
                    width:'45%',
                },
            }
        }
    }
};
