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
    fecha_nacimiento: t.maybe(t.String),
    sexo: t.maybe(t.String),
    estado_civil: t.maybe(t.String), //select
    tipo_documento: t.maybe(t.String), //select
    num_documento: t.maybe(t.String),
    direccion_domicilio: t.maybe(t.String),
    telfono_celular: t.maybe(t.String),
    correo_electronico: t.maybe(t.String),
    telefono_domiciliar: t.maybe(t.String),
    telefono_trabajo: t.maybe(t.String),
    profecion: t.maybe(t.String), //select
    medicamentio_que_utiliza: t.maybe(t.String), 
    alergias: t.maybe(t.String), 
    enfermedades_actuales: t.maybe(t.String), 
    nombre_padre: t.maybe(t.String), 
    telefono_padre: t.maybe(t.String), 
    ocupacion_padre: t.maybe(t.String), 
    nombre_madre: t.maybe(t.String), 
    telefono_madre: t.maybe(t.String), 
    ocupacion_madre:t.maybe( t.String),
    dui_padre_o_madre: t.maybe(t.String), 
    emergencia_llamar_a: t.maybe(t.String), 
    emergencia_telefono: t.maybe(t.String), 
    referido_por: t.maybe(t.String), 
    medico_cabecera: t.maybe(t.String), 
    reg_iva:t.maybe( t.String), 
    seguro_medico: t.maybe(t.String), // select si || no 
    aseguradora: t.maybe(t.String),
    nu_polisa: t.maybe(t.String),
    nu_certificado:t.maybe( t.String),
    titular_seguro: t.maybe(t.String),
});

export const LoginOptions = {
    fields: {
        nombre:  {template:Inout, config:{ placeholder:"Ingrese su nombre", label:"Nombre", password:false, secureTextEntry:false } },
        apellido:{template:Inout, config:{ placeholder:"Ingrese su apellido",label:"Apellido", secureTextEntry:false, password:false} },
        conocido:{template:Inout, config:{ placeholder:"Lo comonoce por?",label:"Lo comonoce por?", secureTextEntry:false, password:false} },
        nacionalidad:{template:Inout, config:{ placeholder:"Ingrese su nacionalidad",label:"Nacionalidad", secureTextEntry:false, password:false} },
        fecha_nacimiento:{template:Inout, config:{ placeholder:"Ingrese su fecha de nacimiento", label:"Fecha de nacimiento",secureTextEntry:false, password:false } },
        estado_civil:{ template:Selects, config:{
                label:"Estado civil:",
                itemss:[
                    { label: 'SOLTERO/A', value: 'SOLTERO/A' }, { label: 'CASADO/A', value: 'CASADO/A' }, { label: 'ACOMPAÑADO/A', value: 'ACOMPAÑADO/A' }, { label: 'DIVORCIADO/A', value: 'DIVORCIADO/A' },
                ]
            }
        },
        sexo:{ template:Selects, config:{
                label:"Sexo:",
                itemss:[
                    { label: 'MASCULINO', value: 'M' }, { label: 'FEMENINO', value: 'F' }, { label: 'TRANSGENERO', value: 'T' },
                ]
            }
        },
        tipo_documento:{template:Selects, 
            config:{
                label:"Tipo De Documento:",
                itemss:[
                    { label: 'DUI', value: '1' }, { label: 'NIT', value: '2' }, { label: 'PASAPORTE', value: '3' }, { label: 'OTROS', value: '4' },
                ]
            } 
        },
        num_documento:{template:Inout, config:{ placeholder:"Ingrese su numero de documento",label:"Numero de documento:", secureTextEntry:false, password:false} },
        direccion_domicilio:{template:Inout, config:{ placeholder:"Ingrese su direccion domiciliar", label:"Dirección:",secureTextEntry:false, password:false} },
        telfono_celular:{template:Inout, config:{ placeholder:"Ingrese su telefono celular", label:"Teléfono celular:", secureTextEntry:false, password:false} },
        correo_electronico:{template:Inout, config:{ placeholder:"Ingrese su correo electronico",label:"Correo electronico:", secureTextEntry:false, password:false} },
        telefono_domiciliar:{template:Inout, config:{ placeholder:"Ingrese su telefono domiciliar", label:"Teléfono domiciliar:",secureTextEntry:false, password:false} },
        telefono_trabajo:{template:Inout, config:{ placeholder:"Ingrese su telefono de trabao", label:"Teléfono de trabajo",secureTextEntry:false, password:false} },
        profecion:{template:Selects, 
            config:{
                label:"Profesión:",
                itemss:[
                    { value: '1', label: 'ABOGADO/A'},{ value: '2', label: 'ADMIN. EMPRESAS'},{ value: '3', label: 'ADMINISTRADOR/A'},{ value: '208', label: 'ADOBES'},{ value: '4', label: 'AEROMOSA'},{ value: '5', label: 'AGENTE ADANUAL'},{ value: '6', label: 'AGENTE DE CARGO'},{ value: '7', label: 'AGENTE SEGURIDAD'},{ value: '8', label: 'AGRICULTOR/A'},{ value: '9', label: 'AGRONOMO/A'},{ value: '10', label: 'ALBAÑIL'},{ value: '11', label: 'AMA DE CASA'},{ value: '12', label: 'ANALISTA'},{ value: '13', label: 'ARQUITECTO/A'},{ value: '14', label: 'ARTESANO/A'},{ value: '15', label: 'ASESOR DE SEGUROS'},{ value: '16', label: 'ASESOR TECNICO'},{ value: '17', label: 'ASISTENTE ADMINISTRA'},{ value: '18', label: 'ASISTENTE DENTAL'},{ value: '19', label: 'ASTRONAUTA'},{ value: '20', label: 'AUXILIAR'},{ value: '21', label: 'BACHILLER'},{ value: '22', label: 'BAILARINA'},{ value: '23', label: 'BARBERO'},{ value: '24', label: 'BIBLIOTECARIO/A'},{ value: '25', label: 'BIOLOGO/A'},{ value: '26', label: 'BODEGUERO/A'},{ value: '27', label: 'BOXEADOR/A'},{ value: '28', label: 'CAJERO/A'},{ value: '29', label: 'CAMAROGRAFO/A'},{ value: '30', label: 'CARPINTERO/A'},{ value: '31', label: 'CERRAGERO/A'},{ value: '32', label: 'COCINERO/A'},{ value: '33', label: 'COLABORADOR/A JUDIC'},{ value: '34', label: 'COMERCIANTE'},{ value: '35', label: 'CONSTRUCTOR/A'},{ value: '36', label: 'CONTADOR/A'},{ value: '37', label: 'CONTRATISTA'},{ value: '38', label: 'COSMETOLOGO/A'},{ value: '39', label: 'COSTURERO/A'},{ value: '40', label: 'DECORADOR VEHICULOS'},{ value: '41', label: 'DEPENDIENTE FARMACIA'},{ value: '198', label: 'DESPACHADORA'},{ value: '42', label: 'DIBUJANTE'},{ value: '43', label: 'DIBUJANTE ARQUITECTO'},{ value: '44', label: 'DIBUJANTE COMERCIAL'},{ value: '45', label: 'DIGITADOR/A'},{ value: '46', label: 'DIPLOMATICO/A'},{ value: '47', label: 'DISEÑADORA'},{ value: '48', label: 'DISEÑO AMBIENTAL'},{ value: '49', label: 'DISEÑO GRAFICO'},{ value: '204', label: 'DOCTOR DE ANIMALES'},{ value: '205', label: 'DREEEES'},{ value: '50', label: 'ECONOMISTA'},{ value: '51', label: 'ECOTECNOLOGO/A'},{ value: '52', label: 'EDITOR/A'},{ value: '53', label: 'EJECUTIVO/A AT. CLIEN'},{ value: '54', label: 'EJECUTIVO/A NEGOCIOS'},{ value: '55', label: 'ELECTRICISTA'},{ value: '56', label: 'ELECTROMECANICO'},{ value: '57', label: 'EMPLEADO/A'},{ value: '58', label: 'EMPLEADO/A JUBILADO'},{ value: '59', label: 'EMPRESARIO/A'},{ value: '60', label: 'ENFERMERO/A'},{ value: '61', label: 'ESCRITOR/A'},{ value: '62', label: 'ESTILISTA'},{ value: '64', label: 'ESTUDIANTE'},{ value: '65', label: 'FARMACEITICO/A'},{ value: '66', label: 'FISIATRA'},{ value: '67', label: 'FONTANERO/A'},{ value: '68', label: 'FOTOGRAFO/A'},{ value: '69', label: 'GANADERO/A'},{ value: '70', label: 'GEOLOGO/A'},{ value: '71', label: 'GERENTE ADMIN.'},{ value: '72', label: 'GERENTE FINANCIERO'},{ value: '73', label: 'GESTOR/A COBROS'},{ value: '74', label: 'HERRERO/A'},{ value: '75', label: 'HISTORIADOR/A'},{ value: '76', label: 'HOGAR'},{ value: '77', label: 'HOJALATERO/A'},{ value: '78', label: 'INFANTE'},{ value: '79', label: 'ING. AGRONOMO'},{ value: '80', label: 'ING. AMBIENTALISTA'},{ value: '195', label: 'ING. BIOMEDICO'},{ value: '81', label: 'ING. CIVIL'},{ value: '82', label: 'ING. ELECTRICISTA'},{ value: '83', label: 'ING. EN COMPUTACION'},{ value: '84', label: 'ING. EN ELECTRONICA'},{ value: '85', label: 'ING. EN SISTEMAS'},{ value: '86', label: 'ING. INDUSTRIAL'},{ value: '87', label: 'ING. MECANICO'},{ value: '88', label: 'ING. QUIMICO'},{ value: '89', label: 'ING. TECNICO FARMACEUTICA'},{ value: '202', label: 'INGENIERIA EN AGROINDUSTRIA'},{ value: '90', label: 'INGENIRO'},{ value: '91', label: 'INSTRUCTOR AEROBIC'},{ value: '92', label: 'INTERPRETE'},{ value: '93', label: 'JARDINERO/A'},{ value: '94', label: 'JEFE DE AGENCIA'},{ value: '95', label: 'JEFE DE PERSONAL'},{ value: '96', label: 'JEFE DE PLANTA'},{ value: '97', label: 'JORNALERO/A'},{ value: '98', label: 'JOYERO/A'},{ value: '99', label: 'JUBILADO/A'},{ value: '100', label: 'JUEZ/A DE SENTENCIA'},{ value: '101', label: 'LABORATORIO MÉDICO'},{ value: '102', label: 'LABRADOR/A'},{ value: '103', label: 'LIC. ADMON EMPRESAS'},{ value: '104', label: 'LIC. ANESTESISTA'},{ value: '105', label: 'LIC. CIENCIAS EDUCA'},{ value: '106', label: 'LIC. CIENCIAS JURIDI'},{ value: '107', label: 'LIC. COMUNICACIONES'},{ value: '108', label: 'LIC. EN COMPUTACION'},{ value: '109', label: 'LIC. EN ECONOMIA'},{ value: '110', label: 'LIC. EN LETRAS'},{ value: '111', label: 'LIC. EN MERCADEO'},{ value: '112', label: 'LIC. EN RADIOLOGIA'},{ value: '113', label: 'LIC. EN SALUD'},{ value: '114', label: 'LIC. LAB. CLINICO'},{ value: '115', label: 'LIC. QUIMICA FARMACEUTICA'},{ value: '203', label: 'LICENCIATURA EN AGRICULTURA'},{ value: '116', label: 'MAESTRO DE OBRA'},{ value: '117', label: 'MECANICO AUTOMOTRIZ'},{ value: '118', label: 'MECANICO INDUSTRIAL'},{ value: '119', label: 'MECANICO SOLDADOR'},{ value: '120', label: 'MEDICO'},{ value: '121', label: 'MEDICO VETERINARIO'},{ value: '122', label: 'MENOR'},{ value: '123', label: 'MERCADOLOGO/A'},{ value: '199', label: 'MERCADOTECNIA'},{ value: '124', label: 'MISIONERO/A'},{ value: '125', label: 'MODISTA'},{ value: '126', label: 'MONJA'},{ value: '127', label: 'MOTORISTA'},{ value: '128', label: 'MUSICO/A'},{ value: '129', label: 'NEGOCIO PROPIO'},{ value: '130', label: 'NOTARIO/A'},{ value: '131', label: 'OBRERO INDUSTRIAL'},{ value: '132', label: 'ODONTOLOGO/A'},{ value: '133', label: 'OFICIOS DOMESTICOS'},{ value: '134', label: 'OPERADOR DE SISTEMA'},{ value: '135', label: 'OPTOMETRISTA'},{ value: '196', label: 'OTROS'},{ value: '136', label: 'PANIFICADOR/A'},{ value: '137', label: 'PASTOR EVANGELICO'},{ value: '138', label: 'PENSIONADO/A'},{ value: '139', label: 'PERIODISTA'},{ value: '140', label: 'PESCADOR/A'},{ value: '141', label: 'PILOTO AVIADOR'},{ value: '215', label: 'PILOTO AVIANCA'},{ value: '142', label: 'PINTOR/A'},{ value: '143', label: 'PLANEADOR DE DEMANDA'},{ value: '144', label: 'PLOMERO/A'},{ value: '145', label: 'POLICIA'},{ value: '147', label: 'PROFESOR/A'},{ value: '148', label: 'PROFESOR/A JUBILADO'},{ value: '149', label: 'PROGRAMADOR/A ANALIS'},{ value: '150', label: 'PROMOTOR/A SALUD'},{ value: '151', label: 'PUBLICISTA'},{ value: '152', label: 'QUIMICO FARMACEUTICO'},{ value: '153', label: 'RADIOTECNICO/A'},{ value: '154', label: 'RECEPCIONISTA'},{ value: '155', label: 'RELACIONES INTERNAC'},{ value: '156', label: 'RELACIONES PUBLICAS'},{ value: '197', label: 'RELIGIOSA'},{ value: '157', label: 'RELOJERO/A'},{ value: '158', label: 'SACERDOTE'},{ value: '159', label: 'SASTRE'},{ value: '160', label: 'SECRETARIA'},{ value: '161', label: 'SECRETARIA EJECUTIVA BILINGÜE'},{ value: '162', label: 'SECRETARIA JUBILADA'},{ value: '163', label: 'SEMINARISTA'},{ value: '164', label: 'SERENO'},{ value: '165', label: 'SERIGRAFISTA'},{ value: '166', label: 'SICOLOGO/A'},{ value: '167', label: 'SOCIOLOGO/A'},{ value: '168', label: 'SUPERVISOR/A'},{ value: '169', label: 'TAPICERO/A'},{ value: '170', label: 'TAXISTA'},{ value: '171', label: 'TEC. EN ARQUITECTURA'},{ value: '172', label: 'TEC. EN COMPUTACION'},{ value: '173', label: 'TEC. EN ELECTRICIDAD'},{ value: '174', label: 'TEC. EN ELECTRONICA'},{ value: '175', label: 'TEC. EN MANTENIMIENTO'},{ value: '176', label: 'TEC. EN SISTEMAS'},{ value: '177', label: 'TEC. INDUSTRIAL'},{ value: '178', label: 'TEC. ING. CIVIL'},{ value: '179', label: 'TEC. REFRIGERACION'},{ value: '180', label: 'TEC. TELEFONIA'},{ value: '200', label: 'Tecnico en sistemas'},{ value: '201', label: 'TECNICO EN SISTEMAS INFORMATICOS'},{ value: '181', label: 'TECNICO TELECOMU'},{ value: '182', label: 'TELEGRAFISTA'},{ value: '183', label: 'TENEDOR DE LIBROS'},{ value: '184', label: 'TEOLOGO/A'},{ value: '185', label: 'TERAPEUTA'},{ value: '186', label: 'TIPOGRAFO/A'},{ value: '187', label: 'TOPOGRAFO/A'},{ value: '188', label: 'TRABAJOR/A SOCIAL'},{ value: '189', label: 'TRANSPORTISTA'},{ value: '190', label: 'VENTAS'},{ value: '191', label: 'VICERRECTOR FINANCIERO'},{ value: '192', label: 'VIGILANTE'},{ value: '193', label: 'VISITADOR MÉDICO'},{ value: '194', label: 'ZAPATERO'},
                ]
            } 
        },
        medicamentio_que_utiliza:{template:Inout, config:{ placeholder:"Ingrese medicamento que utiliza",label:"Medicamentos que utiliza:", secureTextEntry:false, password:false} },
        alergias:{template:Inout, config:{ placeholder:"Ingrese sus alergias",label:"Alergias:", secureTextEntry:false, password:false} },
        enfermedades_actuales:{template:Inout, config:{ placeholder:"Ingrese enfermedades actuales",label:"Medicamentos que Enfermedades Actuales:", secureTextEntry:false, password:false} },
        nombre_padre:{template:Inout, config:{ placeholder:"Ingrese el nombre de su padre",label:"Padre:", secureTextEntry:false, password:false} },
        telefono_padre:{template:Inout, config:{ placeholder:"Ingrese el telefono de su padre",label:"Teléfono del padre:", secureTextEntry:false, password:false} },
        ocupacion_padre:{template:Inout, config:{ placeholder:"Ingrese la ocupaciones de su padre",label:"Ocupacion del Padre:", secureTextEntry:false, password:false} },
        nombre_madre:{template:Inout, config:{ placeholder:"Ingrese el nombre de su madre",label:"Madre:", secureTextEntry:false, password:false} },
        telefono_madre:{template:Inout, config:{ placeholder:"Ingrese el telefono de su madre", label:"Teléfono de la madre:",secureTextEntry:false, password:false} },
        ocupacion_madre:{template:Inout, config:{ placeholder:"Ingrese la ocupacion de su madre",label:"Ocupacion de la madre:", secureTextEntry:false, password:false} },
        dui_padre_o_madre:{template:Inout, config:{ placeholder:"Ingrese # de su padre o madre",label:"Número de DUI de padre o  madre:", secureTextEntry:false, password:false} },
        emergencia_llamar_a:{template:Inout, config:{ placeholder:"Ingrese a quien llamar en caso de emergencia llamar ",label:"En caso de emergencia llamar a:", secureTextEntry:false, password:false} },
        emergencia_telefono:{template:Inout, config:{ placeholder:"Ingrese el telefono de emergencia ",label:"Teléfono de emergencia:", secureTextEntry:false, password:false} },
        referido_por:{template:Inout, config:{ placeholder:"Ingrese de quien viene referido", label:"Referido por:",secureTextEntry:false, password:false} },
        medico_cabecera:{template:Inout, config:{ placeholder:"Ingrese su medico de cabecera", label:"Médico de Cabecera:",secureTextEntry:false, password:false} },
        reg_iva:{template:Inout, config:{ placeholder:"Ingrese registro de IVA", label:"Registro de IVA:",secureTextEntry:false, password:false} },
        seguro_medico:{template:Selects, 
            config:{
                label:"Tiene seguro medico:",
                itemss:[
                    { label: 'SI', value: '1' },
                    { label: 'NO', value: '2' },
                ]
            } 
        },
        aseguradora:{template:Inout, config:{ placeholder:"Ingrese la aseguradora",label:"Aseguradora:", secureTextEntry:false, password:false} },
        nu_polisa:{template:Inout, config:{ placeholder:"Ingrese numero de polisa", label:"Número de póliza:",secureTextEntry:false, password:false} },
        nu_certificado:{template:Inout, config:{ placeholder:"Ingrese numero certificado",label:"Número de certificado:", secureTextEntry:false, password:false} },
        titular_seguro:{template:Inout, config:{ placeholder:"Ingrese titular del seguro",label:"Titular del seguro:", secureTextEntry:false, password:false} }
    }
};
