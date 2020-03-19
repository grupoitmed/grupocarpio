import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import Inout from './Inputs'
import Selects from './Selects'
import Selects_fecha from './Selects_fecha'

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
profecion = [{ color: 'gray', value:'1', label: 'ABOGADO/A'},{ color: 'gray', value:'2', label: 'ADMIN. EMPRESAS'},{ color: 'gray', value:'3', label: 'ADMINISTRADOR/A'},{ color: 'gray', value:'208', label: 'ADOBES'},{ color: 'gray', value:'4', label: 'AEROMOSA'},{ color: 'gray', value:'5', label: 'AGENTE ADANUAL'},{ color: 'gray', value:'6', label: 'AGENTE DE CARGO'},{ color: 'gray', value:'7', label: 'AGENTE SEGURIDAD'},{ color: 'gray', value:'8', label: 'AGRICULTOR/A'},{ color: 'gray', value:'9', label: 'AGRONOMO/A'},{ color: 'gray', value:'10', label: 'ALBAÑIL'},{ color: 'gray', value:'11', label: 'AMA DE CASA'},{ color: 'gray', value:'12', label: 'ANALISTA'},{ color: 'gray', value:'13', label: 'ARQUITECTO/A'},{ color: 'gray', value:'14', label: 'ARTESANO/A'},{ color: 'gray', value:'15', label: 'ASESOR DE SEGUROS'},{ color: 'gray', value:'16', label: 'ASESOR TECNICO'},{ color: 'gray', value:'17', label: 'ASISTENTE ADMINISTRA'},{ color: 'gray', value:'18', label: 'ASISTENTE DENTAL'},{ color: 'gray', value:'19', label: 'ASTRONAUTA'},{ color: 'gray', value:'20', label: 'AUXILIAR'},{ color: 'gray', value:'21', label: 'BACHILLER'},{ color: 'gray', value:'22', label: 'BAILARINA'},{ color: 'gray', value:'23', label: 'BARBERO'},{ color: 'gray', value:'24', label: 'BIBLIOTECARIO/A'},{ color: 'gray', value:'25', label: 'BIOLOGO/A'},{ color: 'gray', value:'26', label: 'BODEGUERO/A'},{ color: 'gray', value:'27', label: 'BOXEADOR/A'},{ color: 'gray', value:'28', label: 'CAJERO/A'},{ color: 'gray', value:'29', label: 'CAMAROGRAFO/A'},{ color: 'gray', value:'30', label: 'CARPINTERO/A'},{ color: 'gray', value:'31', label: 'CERRAGERO/A'},{ color: 'gray', value:'32', label: 'COCINERO/A'},{ color: 'gray', value:'33', label: 'COLABORADOR/A JUDIC'},{ color: 'gray', value:'34', label: 'COMERCIANTE'},{ color: 'gray', value:'35', label: 'CONSTRUCTOR/A'},{ color: 'gray', value:'36', label: 'CONTADOR/A'},{ color: 'gray', value:'37', label: 'CONTRATISTA'},{ color: 'gray', value:'38', label: 'COSMETOLOGO/A'},{ color: 'gray', value:'39', label: 'COSTURERO/A'},{ color: 'gray', value:'40', label: 'DECORADOR VEHICULOS'},{ color: 'gray', value:'41', label: 'DEPENDIENTE FARMACIA'},{ color: 'gray', value:'198', label: 'DESPACHADORA'},{ color: 'gray', value:'42', label: 'DIBUJANTE'},{ color: 'gray', value:'43', label: 'DIBUJANTE ARQUITECTO'},{ color: 'gray', value:'44', label: 'DIBUJANTE COMERCIAL'},{ color: 'gray', value:'45', label: 'DIGITADOR/A'},{ color: 'gray', value:'46', label: 'DIPLOMATICO/A'},{ color: 'gray', value:'47', label: 'DISEÑADORA'},{ color: 'gray', value:'48', label: 'DISEÑO AMBIENTAL'},{ color: 'gray', value:'49', label: 'DISEÑO GRAFICO'},{ color: 'gray', value:'204', label: 'DOCTOR DE ANIMALES'},{ color: 'gray', value:'205', label: 'DREEEES'},{ color: 'gray', value:'50', label: 'ECONOMISTA'},{ color: 'gray', value:'51', label: 'ECOTECNOLOGO/A'},{ color: 'gray', value:'52', label: 'EDITOR/A'},{ color: 'gray', value:'53', label: 'EJECUTIVO/A AT. CLIEN'},{ color: 'gray', value:'54', label: 'EJECUTIVO/A NEGOCIOS'},{ color: 'gray', value:'55', label: 'ELECTRICISTA'},{ color: 'gray', value:'56', label: 'ELECTROMECANICO'},{ color: 'gray', value:'57', label: 'EMPLEADO/A'},{ color: 'gray', value:'58', label: 'EMPLEADO/A JUBILADO'},{ color: 'gray', value:'59', label: 'EMPRESARIO/A'},{ color: 'gray', value:'60', label: 'ENFERMERO/A'},{ color: 'gray', value:'61', label: 'ESCRITOR/A'},{ color: 'gray', value:'62', label: 'ESTILISTA'},{ color: 'gray', value:'64', label: 'ESTUDIANTE'},{ color: 'gray', value:'65', label: 'FARMACEITICO/A'},{ color: 'gray', value:'66', label: 'FISIATRA'},{ color: 'gray', value:'67', label: 'FONTANERO/A'},{ color: 'gray', value:'68', label: 'FOTOGRAFO/A'},{ color: 'gray', value:'69', label: 'GANADERO/A'},{ color: 'gray', value:'70', label: 'GEOLOGO/A'},{ color: 'gray', value:'71', label: 'GERENTE ADMIN.'},{ color: 'gray', value:'72', label: 'GERENTE FINANCIERO'},{ color: 'gray', value:'73', label: 'GESTOR/A COBROS'},{ color: 'gray', value:'74', label: 'HERRERO/A'},{ color: 'gray', value:'75', label: 'HISTORIADOR/A'},{ color: 'gray', value:'76', label: 'HOGAR'},{ color: 'gray', value:'77', label: 'HOJALATERO/A'},{ color: 'gray', value:'78', label: 'INFANTE'},{ color: 'gray', value:'79', label: 'ING. AGRONOMO'},{ color: 'gray', value:'80', label: 'ING. AMBIENTALISTA'},{ color: 'gray', value:'195', label: 'ING. BIOMEDICO'},{ color: 'gray', value:'81', label: 'ING. CIVIL'},{ color: 'gray', value:'82', label: 'ING. ELECTRICISTA'},{ color: 'gray', value:'83', label: 'ING. EN COMPUTACION'},{ color: 'gray', value:'84', label: 'ING. EN ELECTRONICA'},{ color: 'gray', value:'85', label: 'ING. EN SISTEMAS'},{ color: 'gray', value:'86', label: 'ING. INDUSTRIAL'},{ color: 'gray', value:'87', label: 'ING. MECANICO'},{ color: 'gray', value:'88', label: 'ING. QUIMICO'},{ color: 'gray', value:'89', label: 'ING. TECNICO FARMACEUTICA'},{ color: 'gray', value:'202', label: 'INGENIERIA EN AGROINDUSTRIA'},{ color: 'gray', value:'90', label: 'INGENIRO'},{ color: 'gray', value:'91', label: 'INSTRUCTOR AEROBIC'},{ color: 'gray', value:'92', label: 'INTERPRETE'},{ color: 'gray', value:'93', label: 'JARDINERO/A'},{ color: 'gray', value:'94', label: 'JEFE DE AGENCIA'},{ color: 'gray', value:'95', label: 'JEFE DE PERSONAL'},{ color: 'gray', value:'96', label: 'JEFE DE PLANTA'},{ color: 'gray', value:'97', label: 'JORNALERO/A'},{ color: 'gray', value:'98', label: 'JOYERO/A'},{ color: 'gray', value:'99', label: 'JUBILADO/A'},{ color: 'gray', value:'100', label: 'JUEZ/A DE SENTENCIA'},{ color: 'gray', value:'101', label: 'LABORATORIO MÉDICO'},{ color: 'gray', value:'102', label: 'LABRADOR/A'},{ color: 'gray', value:'103', label: 'LIC. ADMON EMPRESAS'},{ color: 'gray', value:'104', label: 'LIC. ANESTESISTA'},{ color: 'gray', value:'105', label: 'LIC. CIENCIAS EDUCA'},{ color: 'gray', value:'106', label: 'LIC. CIENCIAS JURIDI'},{ color: 'gray', value:'107', label: 'LIC. COMUNICACIONES'},{ color: 'gray', value:'108', label: 'LIC. EN COMPUTACION'},{ color: 'gray', value:'109', label: 'LIC. EN ECONOMIA'},{ color: 'gray', value:'110', label: 'LIC. EN LETRAS'},{ color: 'gray', value:'111', label: 'LIC. EN MERCADEO'},{ color: 'gray', value:'112', label: 'LIC. EN RADIOLOGIA'},{ color: 'gray', value:'113', label: 'LIC. EN SALUD'},{ color: 'gray', value:'114', label: 'LIC. LAB. CLINICO'},{ color: 'gray', value:'115', label: 'LIC. QUIMICA FARMACEUTICA'},{ color: 'gray', value:'203', label: 'LICENCIATURA EN AGRICULTURA'},{ color: 'gray', value:'116', label: 'MAESTRO DE OBRA'},{ color: 'gray', value:'117', label: 'MECANICO AUTOMOTRIZ'},{ color: 'gray', value:'118', label: 'MECANICO INDUSTRIAL'},{ color: 'gray', value:'119', label: 'MECANICO SOLDADOR'},{ color: 'gray', value:'120', label: 'MEDICO'},{ color: 'gray', value:'121', label: 'MEDICO VETERINARIO'},{ color: 'gray', value:'122', label: 'MENOR'},{ color: 'gray', value:'123', label: 'MERCADOLOGO/A'},{ color: 'gray', value:'199', label: 'MERCADOTECNIA'},{ color: 'gray', value:'124', label: 'MISIONERO/A'},{ color: 'gray', value:'125', label: 'MODISTA'},{ color: 'gray', value:'126', label: 'MONJA'},{ color: 'gray', value:'127', label: 'MOTORISTA'},{ color: 'gray', value:'128', label: 'MUSICO/A'},{ color: 'gray', value:'129', label: 'NEGOCIO PROPIO'},{ color: 'gray', value:'130', label: 'NOTARIO/A'},{ color: 'gray', value:'131', label: 'OBRERO INDUSTRIAL'},{ color: 'gray', value:'132', label: 'ODONTOLOGO/A'},{ color: 'gray', value:'133', label: 'OFICIOS DOMESTICOS'},{ color: 'gray', value:'134', label: 'OPERADOR DE SISTEMA'},{ color: 'gray', value:'135', label: 'OPTOMETRISTA'},{ color: 'gray', value:'196', label: 'OTROS'},{ color: 'gray', value:'136', label: 'PANIFICADOR/A'},{ color: 'gray', value:'137', label: 'PASTOR EVANGELICO'},{ color: 'gray', value:'138', label: 'PENSIONADO/A'},{ color: 'gray', value:'139', label: 'PERIODISTA'},{ color: 'gray', value:'140', label: 'PESCADOR/A'},{ color: 'gray', value:'141', label: 'PILOTO AVIADOR'},{ color: 'gray', value:'215', label: 'PILOTO AVIANCA'},{ color: 'gray', value:'142', label: 'PINTOR/A'},{ color: 'gray', value:'143', label: 'PLANEADOR DE DEMANDA'},{ color: 'gray', value:'144', label: 'PLOMERO/A'},{ color: 'gray', value:'145', label: 'POLICIA'},{ color: 'gray', value:'147', label: 'PROFESOR/A'},{ color: 'gray', value:'148', label: 'PROFESOR/A JUBILADO'},{ color: 'gray', value:'149', label: 'PROGRAMADOR/A ANALIS'},{ color: 'gray', value:'150', label: 'PROMOTOR/A SALUD'},{ color: 'gray', value:'151', label: 'PUBLICISTA'},{ color: 'gray', value:'152', label: 'QUIMICO FARMACEUTICO'},{ color: 'gray', value:'153', label: 'RADIOTECNICO/A'},{ color: 'gray', value:'154', label: 'RECEPCIONISTA'},{ color: 'gray', value:'155', label: 'RELACIONES INTERNAC'},{ color: 'gray', value:'156', label: 'RELACIONES PUBLICAS'},{ color: 'gray', value:'197', label: 'RELIGIOSA'},{ color: 'gray', value:'157', label: 'RELOJERO/A'},{ color: 'gray', value:'158', label: 'SACERDOTE'},{ color: 'gray', value:'159', label: 'SASTRE'},{ color: 'gray', value:'160', label: 'SECRETARIA'},{ color: 'gray', value:'161', label: 'SECRETARIA EJECUTIVA BILINGÜE'},{ color: 'gray', value:'162', label: 'SECRETARIA JUBILADA'},{ color: 'gray', value:'163', label: 'SEMINARISTA'},{ color: 'gray', value:'164', label: 'SERENO'},{ color: 'gray', value:'165', label: 'SERIGRAFISTA'},{ color: 'gray', value:'166', label: 'SICOLOGO/A'},{ color: 'gray', value:'167', label: 'SOCIOLOGO/A'},{ color: 'gray', value:'168', label: 'SUPERVISOR/A'},{ color: 'gray', value:'169', label: 'TAPICERO/A'},{ color: 'gray', value:'170', label: 'TAXISTA'},{ color: 'gray', value:'171', label: 'TEC. EN ARQUITECTURA'},{ color: 'gray', value:'172', label: 'TEC. EN COMPUTACION'},{ color: 'gray', value:'173', label: 'TEC. EN ELECTRICIDAD'},{ color: 'gray', value:'174', label: 'TEC. EN ELECTRONICA'},{ color: 'gray', value:'175', label: 'TEC. EN MANTENIMIENTO'},{ color: 'gray', value:'176', label: 'TEC. EN SISTEMAS'},{ color: 'gray', value:'177', label: 'TEC. INDUSTRIAL'},{ color: 'gray', value:'178', label: 'TEC. ING. CIVIL'},{ color: 'gray', value:'179', label: 'TEC. REFRIGERACION'},{ color: 'gray', value:'180', label: 'TEC. TELEFONIA'},{ color: 'gray', value:'200', label: 'Tecnico en sistemas'},{ color: 'gray', value:'201', label: 'TECNICO EN SISTEMAS INFORMATICOS'},{ color: 'gray', value:'181', label: 'TECNICO TELECOMU'},{ color: 'gray', value:'182', label: 'TELEGRAFISTA'},{ color: 'gray', value:'183', label: 'TENEDOR DE LIBROS'},{ color: 'gray', value:'184', label: 'TEOLOGO/A'},{ color: 'gray', value:'185', label: 'TERAPEUTA'},{ color: 'gray', value:'186', label: 'TIPOGRAFO/A'},{ color: 'gray', value:'187', label: 'TOPOGRAFO/A'},{ color: 'gray', value:'188', label: 'TRABAJOR/A SOCIAL'},{ color: 'gray', value:'189', label: 'TRANSPORTISTA'},{ color: 'gray', value:'190', label: 'VENTAS'},{ color: 'gray', value:'191', label: 'VICERRECTOR FINANCIERO'},{ color: 'gray', value:'192', label: 'VIGILANTE'},{ color: 'gray', value:'193', label: 'VISITADOR MÉDICO'},{ color: 'gray', value:'194', label: 'ZAPATERO'}];
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
        profecion:{ template:Selects, 
            config:{
                label:"Profesión",
                view:{
                    marginBottom:40,
                },
                itemss:profecion
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
