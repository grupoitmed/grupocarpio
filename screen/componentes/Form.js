import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import Inout from './Inputs'
import Selects from './Selects'
import Selects_fecha from './Selects_fecha'
var _ = require('lodash');
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
 
stylesheet.fieldset = {
    flexDirection: "row",
    width:'50%'
};

datos_profesion = [];
    
export const LoginStruct = t.struct({
    nombre:t.String,
    apellido:t.maybe(t.String),
    conocido:t.maybe(t.String),
    fecha_nacimiento_dia:t.maybe(t.String),
    fecha_nacimiento_mes:t.maybe(t.String),
    fecha_nacimiento_anio:t.maybe(t.String),
    telfono_celular:t.maybe(t.Number),
    telefono_domiciliar:t.maybe(t.Number),
    correo_electronico:t.maybe(t.String),
    nacionalidad:t.maybe(t.String),
    tipo_documento:t.maybe(t.String),
    num_documento:t.maybe(t.Number),
    direccion_domicilio:t.maybe(t.String), 
    seguro_medico:t.maybe(t.String),
    referido_por:t.maybe(t.String), 
    profecion:t.maybe(t.String), 
    lugar_trabajo:t.maybe(t.String),
    telefono_trabajo:t.maybe(t.Number),
    conyugue:t.maybe(t.String),
    telefono_conyugue:t.maybe(t.Number)
});

export const MedicStruct = t.struct({
    medicamentio_que_utiliza: t.maybe(t.String), 
    alergias: t.maybe(t.String), 
});

export const NinoStruct = t.struct({ 
    nombre_padre: t.maybe(t.String), 
    telefono_padre: t.maybe(t.Number), 
    ocupacion_padre: t.maybe(t.String), 
    nombre_madre: t.maybe(t.String), 
    telefono_madre: t.maybe(t.Number), 
    ocupacion_madre:t.maybe(t.String),
});

dias = []; 
for (let i = 1; i <= 31; i++) 
{ 
    dias.push({ color: 'black', label: ""+i+"", value: i });
}

var year = new Date().getFullYear();
anios = []; 
for (let i = year; i >= 1900; i--) 
{ 
    anios.push({ color: 'black', label: ""+i+"", value: i });
}
export const LoginOptions = {
    fields: {
        nombre:  { template:Inout, config:{ placeholder:"Ingrese su nombre", label:"Nombre *", password:false, secureTextEntry:false } },

        apellido:{ template:Inout, config:{ placeholder:"Ingrese su apellido",label:"Apellido *", secureTextEntry:false, password:false} },
        conocido:{ template:Inout, config:{ placeholder:"¿Como le dicen?",label:"Nombre que le gusta utilizar",
        secureTextEntry:false, password:false} },
        
        fecha_nacimiento_dia:{ template:Selects, 
            config:{
                label:"Día de nacimiento *",
                itemss:dias,
                view:{
                    width: '100%', 
                    marginLeft: 5,
                }
            }
        },
        fecha_nacimiento_mes:{ template:Selects, 
            config:{
                label:"Mes de Nacimiento",
                view:{
                    width: '100%', 
                    marginLeft: 5,
                },
                itemss:[
                    { color: 'black', label: 'Enero',value: "01" },{ color: 'black', label: 'Febrero',value: "02" },{ color: 'black', label: 'Marzo',value: "03" },{ color: 'black', label: 'Abril',value: "04" },{ color: 'black', label: 'Mayo',value: "05" },{ color: 'black', label: 'Junio',value: "06" },{ color: 'black', label: 'Julio',value: "07" },{ color: 'black', label: 'Agosto',value: "08" },{ color: 'black', label: 'Septiembre',value: "09" },{ color: 'black', label: 'Octubre',value: 10 },{ color: 'black', label: 'Noviembre',value: 11 },{ color: 'black', label: 'Diciembre',value: 12 },
                ]
            } 
        },
        fecha_nacimiento_anio:{ template:Selects, 
            config:{
                label:"Año de Nacimiento",
                view:{
                    width: '100%', 
                    marginLeft: 5,
                },
                itemss:anios
            } 
        },
        telfono_celular:{ template:Inout, config:{ placeholder:"Ingrese su teléfono celular", label:"Teléfono celular", secureTextEntry:false, password:false} },
        telefono_domiciliar:{ template:Inout, config:{ placeholder:"Ingrese su teléfono domiciliar", label:"Teléfono domiciliar",secureTextEntry:false, password:false} },
        correo_electronico:{ template:Inout, config:{ placeholder:"Ingrese su correo electrónico",label:"Correo electrónico", secureTextEntry:false, password:false} },
        nacionalidad:{ template:Inout, config:{placeholder:"Ingrese su nacionalidad",label:"Nacionalidad", secureTextEntry:false, password:false}},
        tipo_documento:{ template:Selects, 
            config:{
                label:"Tipo de documento",
                itemss:[
                    { color: 'black', label: 'DUI', value: '1' }, { color: 'black', label: 'NIT', value: '2' }, { color: 'black', label: 'PASAPORTE', value: '3' }, { color: 'black', label: 'OTROS', value: '4' },
                ],
                view:{
                    marginBottom:40,
                }
            } 
        },
        num_documento:{ template:Inout, config:{ placeholder:"Ingrese su número de documento",label:"Documento de  Identificación", secureTextEntry:false, password:false} },
        direccion_domicilio:{template:Inout, config:{ placeholder:"Ingrese su dirección domiciliar", label:"Dirección",secureTextEntry:false, password:false} },
        
        seguro_medico:{ template:Inout, config:{ placeholder:"Tipo Seguro Médico",label:"Tipo Seguro Médico", secureTextEntry:false, password:false} },
        referido_por:{ template:Inout, config:{ placeholder:"Ingrese por quíen fue referido", label:"Referido por",secureTextEntry:false, password:false} },
        profecion:{ template:Selects_fecha, 
            config:{
                label:"Profesión",
                view:{
                    marginBottom:40,
                },
                itemss:datos_profesion
            } 
        },
        lugar_trabajo:{ template:Inout, config:{ placeholder:"Ingrese lugar de trabajo", label:"Lugar de trabajo",secureTextEntry:false, password:false} },
        telefono_trabajo:{ template:Inout, config:{ placeholder:"Ingrese su teléfono de oficina", label:"Teléfono de oficina",secureTextEntry:false, password:false} },
        conyugue:{ template:Inout, config:{ placeholder:"Ingrese el nombre de su cónyuge", label:"Nombre del Cónyuge",secureTextEntry:false, password:false} },
        telefono_conyugue:{ template:Inout, config:{ placeholder:"Ingrese el teléfono del cónyuge", label:"Teléfono del cónyuge",secureTextEntry:false, password:false} },


    }
};
export const MedicOptions = {
    fields: {
        medicamentio_que_utiliza:{template:Inout, config:{ placeholder:"Ingrese medicamento que utiliza",label:"Medicamentos que utiliza", secureTextEntry:false, password:false} },
        alergias:{template:Inout, config:{ placeholder:"Ingrese sus alérgias",label:"Alérgico a", secureTextEntry:false, password:false} }, 
    }
};
export const NinoOptions = {
    fields: {
        nombre_padre:{template:Inout, config:{ placeholder:"Ingrese el nombre del padre",label:"Nombre del Padre", secureTextEntry:false, password:false} },
        telefono_padre:{template:Inout, config:{ placeholder:"Ingrese el teléfono del padre",label:"Teléfono", secureTextEntry:false, password:false} },
        ocupacion_padre:{template:Inout, config:{ placeholder:"Ingrese la ocupación del padre",label:"Ocupación", secureTextEntry:false, password:false} },
        nombre_madre:{template:Inout, config:{ placeholder:"Ingrese el nombre de la madre",label:"Nombre de la Madre", secureTextEntry:false, password:false} },
        telefono_madre:{template:Inout, config:{ placeholder:"Ingrese el teléfono de la madre", label:"Teléfono",secureTextEntry:false, password:false} },
        ocupacion_madre:{template:Inout, config:{ placeholder:"Ingrese la ocupación de la madre",label:"Ocupación ", secureTextEntry:false, password:false} },
    }
};
