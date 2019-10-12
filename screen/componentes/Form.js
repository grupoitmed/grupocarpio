import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import Inout from './Inputs'
import Estado_civil from './Selects'

export const LoginStruct = t.struct({
    nombre: t.String,
    apellido: t.String,
    conocido: t.maybe(t.String),
    nacionalidad: t.String,
    fecha_nacimiento: t.String,
    estado_civil: t.String, //select
    tipo_documento: t.String, //select
    num_documento: t.String,
    direccion_domicilio: t.String,
    telfono_celular: t.String,
    correo_electronico: t.String,
    telefono_domiciliar: t.String,
    telefono_trabajo: t.String,
    profecion: t.String, //select
    medicamentio_que_utiliza: t.String, 
    alergias: t.String, 
    enfermedades_actuales: t.String, 
    nombre_padre: t.String, 
    telefono_padre: t.String, 
    ocupacion_padre: t.String, 
    nombre_madre: t.String, 
    telefono_madre: t.String, 
    ocupacion_madre: t.String,
    dui_padre_o_madre: t.String, 
    emergencia_llamar_a: t.String, 
    emergencia_telefono: t.String, 
    referido_por: t.String, 
    medico_cabecera: t.String, 
    reg_iva: t.String, 
    seguro_medico: t.String, // select si || no 
    aseguradora: t.String,
    nu_polisa: t.String,
    nu_certificado: t.String,
    titular_seguro: t.String,
});

export const LoginOptions = {
    fields: {
        nombre:  {template:Inout, config:{ placeholder:"Ingrese su nombre", password:false, secureTextEntry:false } },
        apellido:{template:Inout, config:{ placeholder:"Ingrese su apellido", secureTextEntry:false, password:false} },
        conocido:{template:Inout, config:{ placeholder:"Lo comonoce por?", secureTextEntry:false, password:false} },
        nacionalidad:{template:Inout, config:{ placeholder:"Ingrese su nacionalidad", secureTextEntry:false, password:false} },
        fecha_nacimiento:{template:Inout, config:{ placeholder:"Ingrese su fecha de nacimiento", secureTextEntry:false, password:false } },
        estado_civil:{ template:Estado_civil },
        tipo_documento:{template:Inout, config:{ placeholder:"----------------------", secureTextEntry:false, password:false} },
        num_documento:{template:Inout, config:{ placeholder:"Ingrese su numero de documento", secureTextEntry:false, password:false} },
        direccion_domicilio:{template:Inout, config:{ placeholder:"Ingrese su direccion domiciliar", secureTextEntry:false, password:false} },
        telfono_celular:{template:Inout, config:{ placeholder:"Ingrese su telefono celular", secureTextEntry:false, password:false} },
        correo_electronico:{template:Inout, config:{ placeholder:"Ingrese su correo electronico", secureTextEntry:false, password:false} },
        telefono_domiciliar:{template:Inout, config:{ placeholder:"Ingrese su telefono domiciliar", secureTextEntry:false, password:false} },
        telefono_trabajo:{template:Inout, config:{ placeholder:"Ingrese su telefono de trabao", secureTextEntry:false, password:false} },
        profecion:{template:Inout, config:{ placeholder:"----------------", secureTextEntry:false, password:false} },
        medicamentio_que_utiliza:{template:Inout, config:{ placeholder:"Ingrese medicamento que utiliza", secureTextEntry:false, password:false} },
        alergias:{template:Inout, config:{ placeholder:"Ingrese sus alergias", secureTextEntry:false, password:false} },
        enfermedades_actuales:{template:Inout, config:{ placeholder:"Ingrese enfermedades actuales", secureTextEntry:false, password:false} },
        nombre_padre:{template:Inout, config:{ placeholder:"Ingrese el nombre de su padre", secureTextEntry:false, password:false} },
        telefono_padre:{template:Inout, config:{ placeholder:"Ingrese el telefono de su padre", secureTextEntry:false, password:false} },
        ocupacion_padre:{template:Inout, config:{ placeholder:"Ingrese la ocupaciones de su padre", secureTextEntry:false, password:false} },
        nombre_madre:{template:Inout, config:{ placeholder:"Ingrese el nombre de su madre", secureTextEntry:false, password:false} },
        telefono_madre:{template:Inout, config:{ placeholder:"Ingrese el telefono de su madre", secureTextEntry:false, password:false} },
        ocupacion_madre:{template:Inout, config:{ placeholder:"Ingrese la ocupacion de su madre", secureTextEntry:false, password:false} },
        dui_padre_o_madre:{template:Inout, config:{ placeholder:"Ingrese # de su padre o madre", secureTextEntry:false, password:false} },
        emergencia_llamar_a:{template:Inout, config:{ placeholder:"Ingrese a quien llamar en caso de emergencia llamar ", secureTextEntry:false, password:false} },
        emergencia_telefono:{template:Inout, config:{ placeholder:"Ingrese el telefono de emergencia ", secureTextEntry:false, password:false} },
        referido_por:{template:Inout, config:{ placeholder:"Ingrese de quien viene referido", secureTextEntry:false, password:false} },
        medico_cabecera:{template:Inout, config:{ placeholder:"Ingrese su medico de cabecera", secureTextEntry:false, password:false} },
        reg_iva:{template:Inout, config:{ placeholder:"Ingrese registro de IVA", secureTextEntry:false, password:false} },
        seguro_medico:{template:Inout, config:{ placeholder:"-----------", secureTextEntry:false, password:false} },
        aseguradora:{template:Inout, config:{ placeholder:"Ingrese la aseguradora", secureTextEntry:false, password:false} },
        nu_polisa:{template:Inout, config:{ placeholder:"Ingrese numero de polisa", secureTextEntry:false, password:false} },
        nu_certificado:{template:Inout, config:{ placeholder:"Ingrese numero certificado", secureTextEntry:false, password:false} },
        titular_seguro:{template:Inout, config:{ placeholder:"Ingrese titular del seguro", secureTextEntry:false, password:false} }
    }
};
