import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import Inout from './Inputs'
import Selects from './Selects'

export const LoginStruct = t.struct({
    nombre: t.String,
    apellido: t.maybe(t.String),
    conocido: t.maybe(t.String),
    nacionalidad: t.maybe(t.String),
    fecha_nacimiento_dia: t.maybe(t.String),
    fecha_nacimiento_mes: t.maybe(t.String),
    fecha_nacimiento_anio: t.maybe(t.String),
    sexo: t.maybe(t.String),
    estado_civil: t.maybe(t.String), //select
    tipo_documento: t.maybe(t.String), //select
    num_documento: t.maybe(t.Number),
    direccion_domicilio: t.maybe(t.String),
    telfono_celular: t.maybe(t.Number),
    correo_electronico: t.maybe(t.String),
    telefono_domiciliar: t.maybe(t.Number),
    telefono_trabajo: t.maybe(t.Number),
    lugar_trabajo: t.maybe(t.String),
    conyugue: t.maybe(t.String),
    telefono_conyugue: t.maybe(t.Number),
    profecion: t.maybe(t.String), //select
    medicamentio_que_utiliza: t.maybe(t.String), 
    alergias: t.maybe(t.String), 
    enfermedades_actuales: t.maybe(t.String), 
    nombre_padre: t.maybe(t.String), 
    telefono_padre: t.maybe(t.Number), 
    ocupacion_padre: t.maybe(t.String), 
    nombre_madre: t.maybe(t.String), 
    telefono_madre: t.maybe(t.String), 
    ocupacion_madre:t.maybe( t.String),
    dui_padre_o_madre: t.maybe(t.String), 
    emergencia_llamar_a: t.maybe(t.String), 
    emergencia_telefono: t.maybe(t.Number), 
    referido_por: t.maybe(t.String), 
    medico_cabecera: t.maybe(t.String), 
    reg_iva:t.maybe( t.String), 
    seguro_medico: t.maybe(t.String), // select si || no 
    aseguradora: t.maybe(t.String),
    nu_polisa: t.maybe(t.String),
    nu_carnet: t.maybe(t.String),
    nu_certificado:t.maybe( t.String),
    titular_seguro: t.maybe(t.String),
});


dias = []; 
for (let i = 1; i < 31; i++) 
{ 
    dias.push({ color: 'gray', label: ""+i+"", value: i });
} 
var year = new Date().getFullYear();
anios = []; 
for (let i = year; i >= 1950; i--) 
{ 
    anios.push({ color: 'gray', label: ""+i+"", value: i });
}

export const LoginOptions = {
    fields: {
        nombre:  {template:Inout, config:{ placeholder:"Ingrese su nombre", label:"Nombre *", password:false, secureTextEntry:false } },
        apellido:{template:Inout, config:{ placeholder:"Ingrese su apellido",label:"Apellido *", secureTextEntry:false, password:false} },
        conocido:{template:Inout, config:{ placeholder:"¿Como le dicen?",label:"¿Como le dicen?", secureTextEntry:false, password:false} },
        nacionalidad:{template:Inout, config:{ placeholder:"Ingrese su nacionalidad",label:"Nacionalidad", secureTextEntry:false, password:false} },
        
        fecha_nacimiento_dia:{template:Selects, config:{  label:"Dia de nacimiento *", 
                itemss:   dias,
                
            } 
        },
        fecha_nacimiento_mes:{template:Selects, config:{  label:"Mes de nacimiento *", 
                itemss:[{ color: 'gray', label: 'Enero',value: 1 },{ color: 'gray', label: 'Febrero',value: 2 },{ color: 'gray', label: 'Marzo',value: 3 },{ color: 'gray', label: 'Abril',value: 4 },{ color: 'gray', label: 'Mayo',value: 5 },{ color: 'gray', label: 'Junio',value: 6 },{ color: 'gray', label: 'Julio',value: 7 },{ color: 'gray', label: 'Agosto',value: 8 },{ color: 'gray', label: 'Septiembre',value: 9 },{ color: 'gray', label: 'Octubre',value: 10 },{ color: 'gray', label: 'Noviembre',value: 11 },{ color: 'gray', label: 'Diciembre',value: 12 }, ]
            } 
        },
        fecha_nacimiento_anio:{template:Selects, config:{  label:"Año de nacimiento *", 
                itemss:anios
            } 
        },
    
        
        estado_civil:{ template:Selects, config:{
                label:"Estado civil",
                itemss:[
                    { color: 'gray', label: 'SOLTERO/A', value: 'SOLTERO/A'}, { color: 'gray', label: 'CASADO/A', value: 'CASADO/A' }, { color: 'gray', label: 'ACOMPAÑADO/A', value: 'ACOMPAÑADO/A' }, { color: 'gray', label: 'DIVORCIADO/A', value: 'DIVORCIADO/A' },
                ]
            }
        },
        sexo:{ template:Selects, config:{
                label:"Sexo *",
                itemss:[
                    { color: 'gray', label: 'MASCULINO', value: 'M' }, { color: 'gray', label: 'FEMENINO', value: 'F' }, { color: 'gray', label: 'TRANSGENERO', value: 'T' },
                ]
            }
        },
        tipo_documento:{template:Selects, 
            config:{
                label:"Tipo de documento",
                itemss:[
                    { color: 'gray', label: 'DUI', value: '1' }, { color: 'gray', label: 'NIT', value: '2' }, { color: 'gray', label: 'PASAPORTE', value: '3' }, { color: 'gray', label: 'OTROS', value: '4' },
                ]
            } 
        },
        num_documento:{template:Inout, config:{ placeholder:"Ingrese su número de documento",label:"Numero de documento", secureTextEntry:false, password:false} },
        direccion_domicilio:{template:Inout, config:{ placeholder:"Ingrese su direccion domiciliar", label:"Dirección",secureTextEntry:false, password:false} },
        telfono_celular:{template:Inout, config:{ placeholder:"Ingrese su telefono celular", label:"Teléfono celular", secureTextEntry:false, password:false} },
        correo_electronico:{template:Inout, config:{ placeholder:"Ingrese su correo electrónico",label:"Correo electrónico", secureTextEntry:false, password:false} },
        telefono_domiciliar:{template:Inout, config:{ placeholder:"Ingrese su telefono domiciliar", label:"Teléfono domiciliar",secureTextEntry:false, password:false} },
        telefono_trabajo:{template:Inout, config:{ placeholder:"Ingrese su telefono de trabao", label:"Teléfono de trabajo",secureTextEntry:false, password:false} },
        
        lugar_trabajo:{template:Inout, config:{ placeholder:"Ingrese lugar de trabajo", label:"Lugar de trabajo",secureTextEntry:false, password:false} },
        conyugue:{template:Inout, config:{ placeholder:"Ingrese el nombre de su cónyuge", label:"Cónyuge",secureTextEntry:false, password:false} },
        telefono_conyugue:{template:Inout, config:{ placeholder:"Ingrese el telefono del cónyuge", label:"Teléfono del cónyuge",secureTextEntry:false, password:false} },
        
        profecion:{template:Selects, 
            config:{
                label:"Profesión",
                itemss:[
                    { color: 'gray', value:'1', label: 'ABOGADO/A'},{ color: 'gray', value:'2', label: 'ADMIN. EMPRESAS'},{ color: 'gray', value:'3', label: 'ADMINISTRADOR/A'},{ color: 'gray', value:'208', label: 'ADOBES'},{ color: 'gray', value:'4', label: 'AEROMOSA'},{ color: 'gray', value:'5', label: 'AGENTE ADANUAL'},{ color: 'gray', value:'6', label: 'AGENTE DE CARGO'},{ color: 'gray', value:'7', label: 'AGENTE SEGURIDAD'},{ color: 'gray', value:'8', label: 'AGRICULTOR/A'},{ color: 'gray', value:'9', label: 'AGRONOMO/A'},{ color: 'gray', value:'10', label: 'ALBAÑIL'},{ color: 'gray', value:'11', label: 'AMA DE CASA'},{ color: 'gray', value:'12', label: 'ANALISTA'},{ color: 'gray', value:'13', label: 'ARQUITECTO/A'},{ color: 'gray', value:'14', label: 'ARTESANO/A'},{ color: 'gray', value:'15', label: 'ASESOR DE SEGUROS'},{ color: 'gray', value:'16', label: 'ASESOR TECNICO'},{ color: 'gray', value:'17', label: 'ASISTENTE ADMINISTRA'},{ color: 'gray', value:'18', label: 'ASISTENTE DENTAL'},{ color: 'gray', value:'19', label: 'ASTRONAUTA'},{ color: 'gray', value:'20', label: 'AUXILIAR'},{ color: 'gray', value:'21', label: 'BACHILLER'},{ color: 'gray', value:'22', label: 'BAILARINA'},{ color: 'gray', value:'23', label: 'BARBERO'},{ color: 'gray', value:'24', label: 'BIBLIOTECARIO/A'},{ color: 'gray', value:'25', label: 'BIOLOGO/A'},{ color: 'gray', value:'26', label: 'BODEGUERO/A'},{ color: 'gray', value:'27', label: 'BOXEADOR/A'},{ color: 'gray', value:'28', label: 'CAJERO/A'},{ color: 'gray', value:'29', label: 'CAMAROGRAFO/A'},{ color: 'gray', value:'30', label: 'CARPINTERO/A'},{ color: 'gray', value:'31', label: 'CERRAGERO/A'},{ color: 'gray', value:'32', label: 'COCINERO/A'},{ color: 'gray', value:'33', label: 'COLABORADOR/A JUDIC'},{ color: 'gray', value:'34', label: 'COMERCIANTE'},{ color: 'gray', value:'35', label: 'CONSTRUCTOR/A'},{ color: 'gray', value:'36', label: 'CONTADOR/A'},{ color: 'gray', value:'37', label: 'CONTRATISTA'},{ color: 'gray', value:'38', label: 'COSMETOLOGO/A'},{ color: 'gray', value:'39', label: 'COSTURERO/A'},{ color: 'gray', value:'40', label: 'DECORADOR VEHICULOS'},{ color: 'gray', value:'41', label: 'DEPENDIENTE FARMACIA'},{ color: 'gray', value:'198', label: 'DESPACHADORA'},{ color: 'gray', value:'42', label: 'DIBUJANTE'},{ color: 'gray', value:'43', label: 'DIBUJANTE ARQUITECTO'},{ color: 'gray', value:'44', label: 'DIBUJANTE COMERCIAL'},{ color: 'gray', value:'45', label: 'DIGITADOR/A'},{ color: 'gray', value:'46', label: 'DIPLOMATICO/A'},{ color: 'gray', value:'47', label: 'DISEÑADORA'},{ color: 'gray', value:'48', label: 'DISEÑO AMBIENTAL'},{ color: 'gray', value:'49', label: 'DISEÑO GRAFICO'},{ color: 'gray', value:'204', label: 'DOCTOR DE ANIMALES'},{ color: 'gray', value:'205', label: 'DREEEES'},{ color: 'gray', value:'50', label: 'ECONOMISTA'},{ color: 'gray', value:'51', label: 'ECOTECNOLOGO/A'},{ color: 'gray', value:'52', label: 'EDITOR/A'},{ color: 'gray', value:'53', label: 'EJECUTIVO/A AT. CLIEN'},{ color: 'gray', value:'54', label: 'EJECUTIVO/A NEGOCIOS'},{ color: 'gray', value:'55', label: 'ELECTRICISTA'},{ color: 'gray', value:'56', label: 'ELECTROMECANICO'},{ color: 'gray', value:'57', label: 'EMPLEADO/A'},{ color: 'gray', value:'58', label: 'EMPLEADO/A JUBILADO'},{ color: 'gray', value:'59', label: 'EMPRESARIO/A'},{ color: 'gray', value:'60', label: 'ENFERMERO/A'},{ color: 'gray', value:'61', label: 'ESCRITOR/A'},{ color: 'gray', value:'62', label: 'ESTILISTA'},{ color: 'gray', value:'64', label: 'ESTUDIANTE'},{ color: 'gray', value:'65', label: 'FARMACEITICO/A'},{ color: 'gray', value:'66', label: 'FISIATRA'},{ color: 'gray', value:'67', label: 'FONTANERO/A'},{ color: 'gray', value:'68', label: 'FOTOGRAFO/A'},{ color: 'gray', value:'69', label: 'GANADERO/A'},{ color: 'gray', value:'70', label: 'GEOLOGO/A'},{ color: 'gray', value:'71', label: 'GERENTE ADMIN.'},{ color: 'gray', value:'72', label: 'GERENTE FINANCIERO'},{ color: 'gray', value:'73', label: 'GESTOR/A COBROS'},{ color: 'gray', value:'74', label: 'HERRERO/A'},{ color: 'gray', value:'75', label: 'HISTORIADOR/A'},{ color: 'gray', value:'76', label: 'HOGAR'},{ color: 'gray', value:'77', label: 'HOJALATERO/A'},{ color: 'gray', value:'78', label: 'INFANTE'},{ color: 'gray', value:'79', label: 'ING. AGRONOMO'},{ color: 'gray', value:'80', label: 'ING. AMBIENTALISTA'},{ color: 'gray', value:'195', label: 'ING. BIOMEDICO'},{ color: 'gray', value:'81', label: 'ING. CIVIL'},{ color: 'gray', value:'82', label: 'ING. ELECTRICISTA'},{ color: 'gray', value:'83', label: 'ING. EN COMPUTACION'},{ color: 'gray', value:'84', label: 'ING. EN ELECTRONICA'},{ color: 'gray', value:'85', label: 'ING. EN SISTEMAS'},{ color: 'gray', value:'86', label: 'ING. INDUSTRIAL'},{ color: 'gray', value:'87', label: 'ING. MECANICO'},{ color: 'gray', value:'88', label: 'ING. QUIMICO'},{ color: 'gray', value:'89', label: 'ING. TECNICO FARMACEUTICA'},{ color: 'gray', value:'202', label: 'INGENIERIA EN AGROINDUSTRIA'},{ color: 'gray', value:'90', label: 'INGENIRO'},{ color: 'gray', value:'91', label: 'INSTRUCTOR AEROBIC'},{ color: 'gray', value:'92', label: 'INTERPRETE'},{ color: 'gray', value:'93', label: 'JARDINERO/A'},{ color: 'gray', value:'94', label: 'JEFE DE AGENCIA'},{ color: 'gray', value:'95', label: 'JEFE DE PERSONAL'},{ color: 'gray', value:'96', label: 'JEFE DE PLANTA'},{ color: 'gray', value:'97', label: 'JORNALERO/A'},{ color: 'gray', value:'98', label: 'JOYERO/A'},{ color: 'gray', value:'99', label: 'JUBILADO/A'},{ color: 'gray', value:'100', label: 'JUEZ/A DE SENTENCIA'},{ color: 'gray', value:'101', label: 'LABORATORIO MÉDICO'},{ color: 'gray', value:'102', label: 'LABRADOR/A'},{ color: 'gray', value:'103', label: 'LIC. ADMON EMPRESAS'},{ color: 'gray', value:'104', label: 'LIC. ANESTESISTA'},{ color: 'gray', value:'105', label: 'LIC. CIENCIAS EDUCA'},{ color: 'gray', value:'106', label: 'LIC. CIENCIAS JURIDI'},{ color: 'gray', value:'107', label: 'LIC. COMUNICACIONES'},{ color: 'gray', value:'108', label: 'LIC. EN COMPUTACION'},{ color: 'gray', value:'109', label: 'LIC. EN ECONOMIA'},{ color: 'gray', value:'110', label: 'LIC. EN LETRAS'},{ color: 'gray', value:'111', label: 'LIC. EN MERCADEO'},{ color: 'gray', value:'112', label: 'LIC. EN RADIOLOGIA'},{ color: 'gray', value:'113', label: 'LIC. EN SALUD'},{ color: 'gray', value:'114', label: 'LIC. LAB. CLINICO'},{ color: 'gray', value:'115', label: 'LIC. QUIMICA FARMACEUTICA'},{ color: 'gray', value:'203', label: 'LICENCIATURA EN AGRICULTURA'},{ color: 'gray', value:'116', label: 'MAESTRO DE OBRA'},{ color: 'gray', value:'117', label: 'MECANICO AUTOMOTRIZ'},{ color: 'gray', value:'118', label: 'MECANICO INDUSTRIAL'},{ color: 'gray', value:'119', label: 'MECANICO SOLDADOR'},{ color: 'gray', value:'120', label: 'MEDICO'},{ color: 'gray', value:'121', label: 'MEDICO VETERINARIO'},{ color: 'gray', value:'122', label: 'MENOR'},{ color: 'gray', value:'123', label: 'MERCADOLOGO/A'},{ color: 'gray', value:'199', label: 'MERCADOTECNIA'},{ color: 'gray', value:'124', label: 'MISIONERO/A'},{ color: 'gray', value:'125', label: 'MODISTA'},{ color: 'gray', value:'126', label: 'MONJA'},{ color: 'gray', value:'127', label: 'MOTORISTA'},{ color: 'gray', value:'128', label: 'MUSICO/A'},{ color: 'gray', value:'129', label: 'NEGOCIO PROPIO'},{ color: 'gray', value:'130', label: 'NOTARIO/A'},{ color: 'gray', value:'131', label: 'OBRERO INDUSTRIAL'},{ color: 'gray', value:'132', label: 'ODONTOLOGO/A'},{ color: 'gray', value:'133', label: 'OFICIOS DOMESTICOS'},{ color: 'gray', value:'134', label: 'OPERADOR DE SISTEMA'},{ color: 'gray', value:'135', label: 'OPTOMETRISTA'},{ color: 'gray', value:'196', label: 'OTROS'},{ color: 'gray', value:'136', label: 'PANIFICADOR/A'},{ color: 'gray', value:'137', label: 'PASTOR EVANGELICO'},{ color: 'gray', value:'138', label: 'PENSIONADO/A'},{ color: 'gray', value:'139', label: 'PERIODISTA'},{ color: 'gray', value:'140', label: 'PESCADOR/A'},{ color: 'gray', value:'141', label: 'PILOTO AVIADOR'},{ color: 'gray', value:'215', label: 'PILOTO AVIANCA'},{ color: 'gray', value:'142', label: 'PINTOR/A'},{ color: 'gray', value:'143', label: 'PLANEADOR DE DEMANDA'},{ color: 'gray', value:'144', label: 'PLOMERO/A'},{ color: 'gray', value:'145', label: 'POLICIA'},{ color: 'gray', value:'147', label: 'PROFESOR/A'},{ color: 'gray', value:'148', label: 'PROFESOR/A JUBILADO'},{ color: 'gray', value:'149', label: 'PROGRAMADOR/A ANALIS'},{ color: 'gray', value:'150', label: 'PROMOTOR/A SALUD'},{ color: 'gray', value:'151', label: 'PUBLICISTA'},{ color: 'gray', value:'152', label: 'QUIMICO FARMACEUTICO'},{ color: 'gray', value:'153', label: 'RADIOTECNICO/A'},{ color: 'gray', value:'154', label: 'RECEPCIONISTA'},{ color: 'gray', value:'155', label: 'RELACIONES INTERNAC'},{ color: 'gray', value:'156', label: 'RELACIONES PUBLICAS'},{ color: 'gray', value:'197', label: 'RELIGIOSA'},{ color: 'gray', value:'157', label: 'RELOJERO/A'},{ color: 'gray', value:'158', label: 'SACERDOTE'},{ color: 'gray', value:'159', label: 'SASTRE'},{ color: 'gray', value:'160', label: 'SECRETARIA'},{ color: 'gray', value:'161', label: 'SECRETARIA EJECUTIVA BILINGÜE'},{ color: 'gray', value:'162', label: 'SECRETARIA JUBILADA'},{ color: 'gray', value:'163', label: 'SEMINARISTA'},{ color: 'gray', value:'164', label: 'SERENO'},{ color: 'gray', value:'165', label: 'SERIGRAFISTA'},{ color: 'gray', value:'166', label: 'SICOLOGO/A'},{ color: 'gray', value:'167', label: 'SOCIOLOGO/A'},{ color: 'gray', value:'168', label: 'SUPERVISOR/A'},{ color: 'gray', value:'169', label: 'TAPICERO/A'},{ color: 'gray', value:'170', label: 'TAXISTA'},{ color: 'gray', value:'171', label: 'TEC. EN ARQUITECTURA'},{ color: 'gray', value:'172', label: 'TEC. EN COMPUTACION'},{ color: 'gray', value:'173', label: 'TEC. EN ELECTRICIDAD'},{ color: 'gray', value:'174', label: 'TEC. EN ELECTRONICA'},{ color: 'gray', value:'175', label: 'TEC. EN MANTENIMIENTO'},{ color: 'gray', value:'176', label: 'TEC. EN SISTEMAS'},{ color: 'gray', value:'177', label: 'TEC. INDUSTRIAL'},{ color: 'gray', value:'178', label: 'TEC. ING. CIVIL'},{ color: 'gray', value:'179', label: 'TEC. REFRIGERACION'},{ color: 'gray', value:'180', label: 'TEC. TELEFONIA'},{ color: 'gray', value:'200', label: 'Tecnico en sistemas'},{ color: 'gray', value:'201', label: 'TECNICO EN SISTEMAS INFORMATICOS'},{ color: 'gray', value:'181', label: 'TECNICO TELECOMU'},{ color: 'gray', value:'182', label: 'TELEGRAFISTA'},{ color: 'gray', value:'183', label: 'TENEDOR DE LIBROS'},{ color: 'gray', value:'184', label: 'TEOLOGO/A'},{ color: 'gray', value:'185', label: 'TERAPEUTA'},{ color: 'gray', value:'186', label: 'TIPOGRAFO/A'},{ color: 'gray', value:'187', label: 'TOPOGRAFO/A'},{ color: 'gray', value:'188', label: 'TRABAJOR/A SOCIAL'},{ color: 'gray', value:'189', label: 'TRANSPORTISTA'},{ color: 'gray', value:'190', label: 'VENTAS'},{ color: 'gray', value:'191', label: 'VICERRECTOR FINANCIERO'},{ color: 'gray', value:'192', label: 'VIGILANTE'},{ color: 'gray', value:'193', label: 'VISITADOR MÉDICO'},{ color: 'gray', value:'194', label: 'ZAPATERO'},
                ]
            } 
        },
        medicamentio_que_utiliza:{template:Inout, config:{ placeholder:"Ingrese medicamento que utiliza",label:"Medicamentos que utiliza", secureTextEntry:false, password:false} },
        alergias:{template:Inout, config:{ placeholder:"Ingrese sus alérgias",label:"Alérgias", secureTextEntry:false, password:false} },
        enfermedades_actuales:{template:Inout, config:{ placeholder:"Ingrese enfermedades actuales",label:"Enfermedades Actuales", secureTextEntry:false, password:false} },
        nombre_padre:{template:Inout, config:{ placeholder:"Ingrese el nombre de su padre",label:"Nombre del Padre", secureTextEntry:false, password:false} },
        telefono_padre:{template:Inout, config:{ placeholder:"Ingrese el telefono de su padre",label:"Teléfono del padre", secureTextEntry:false, password:false} },
        ocupacion_padre:{template:Inout, config:{ placeholder:"Ingrese la ocupación de su padre",label:"Ocupación del Padre", secureTextEntry:false, password:false} },
        nombre_madre:{template:Inout, config:{ placeholder:"Ingrese el nombre de su madre",label:"Nombre de la Madre", secureTextEntry:false, password:false} },
        telefono_madre:{template:Inout, config:{ placeholder:"Ingrese el telefono de su madre", label:"Teléfono de la madre",secureTextEntry:false, password:false} },
        ocupacion_madre:{template:Inout, config:{ placeholder:"Ingrese la ocupación de su madre",label:"Ocupación de la madre", secureTextEntry:false, password:false} },
        dui_padre_o_madre:{template:Inout, config:{ placeholder:"Ingrese # de su padre o madre",label:"Número de DUI de padre o  madre", secureTextEntry:false, password:false} },
        emergencia_llamar_a:{template:Inout, config:{ placeholder:"Ingrese a quien llamar en caso de emergencia llamar ",label:"En caso de emergencia llamar a", secureTextEntry:false, password:false} },
        emergencia_telefono:{template:Inout, config:{ placeholder:"Ingrese el telefono de emergencia ",label:"Teléfono de emergencia", secureTextEntry:false, password:false} },
        referido_por:{template:Inout, config:{ placeholder:"Ingrese por quien fue referido", label:"Referido por",secureTextEntry:false, password:false} },
        medico_cabecera:{template:Inout, config:{ placeholder:"Ingrese su médico de cabecera", label:"Médico de Cabecera",secureTextEntry:false, password:false} },
        reg_iva:{template:Inout, config:{ placeholder:"Ingrese registro de IVA", label:"Registro de IVA",secureTextEntry:false, password:false} },
        seguro_medico:{template:Selects, 
            config:{
                label:"Tiene seguro medico",
                itemss:[
                    { color: 'gray', label: 'SI', value: '1' },
                    { color: 'gray', label: 'NO', value: '2' },
                ]
            } 
        },
        aseguradora:{template:Inout, config:{ placeholder:"Ingrese la aseguradora",label:"Aseguradora", secureTextEntry:false, password:false} },
        nu_polisa:{template:Inout, config:{ placeholder:"Ingrese número de polisa", label:"Número de póliza",secureTextEntry:false, password:false} },
        nu_certificado:{template:Inout, config:{ placeholder:"Ingrese número certificado",label:"Número de certificado", secureTextEntry:false, password:false} },
        nu_carnet:{template:Inout, config:{ placeholder:"Ingrese número de carnet",label:"Número de carnet", secureTextEntry:false, password:false} },
        titular_seguro:{template:Inout, config:{ placeholder:"Ingrese titular del seguro",label:"Titular del seguro", secureTextEntry:false, password:false} }
    }
};
