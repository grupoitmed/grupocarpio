import React from 'react';
import { View, StyleSheet,ScrollView,Alert } from 'react-native';
import { Button } from 'react-native-elements';
import t from "tcomb-form-native";
import { Text } from 'react-native-elements';
import { LoginStruct,LoginOptions,MedicStruct,MedicOptions,NinoStruct,NinoOptions } from "./componentes/Form";
const Form = t.form.Form;

export default class Formulario extends React.Component  {
  constructor(){
    super();
    this.state = {
      value:{
        nombre: "",
        apellido: "",
        conocido: "",
        nacionalidad: "",
        fecha_nacimiento_dia: "",
        fecha_nacimiento_mes: "",
        fecha_nacimiento_anio: "",
        sexo: "", //select
        estado_civil: "", //select
        tipo_documento: "", //select
        num_documento: "",
        direccion_domicilio: "",
        telfono_celular: "",
        correo_electronico: "",
        telefono_domiciliar: "",
        telefono_trabajo: "",
        lugar_trabajo: "",
        conyugue: "",
        telefono_conyugue: "",
        profecion: "", //select
        medicamentio_que_utiliza: "", 
        alergias: "", 
        enfermedades_actuales: "", 
        nombre_padre: "", 
        telefono_padre: "", 
        ocupacion_padre: "", 
        nombre_madre: "", 
        telefono_madre: "", 
        ocupacion_madre: "",
        dui_padre_o_madre: "", 
        emergencia_llamar_a: "", 
        emergencia_telefono: "", 
        referido_por: "", 
        medico_cabecera: "", 
        reg_iva: "", 
        seguro_medico: "", // select si || no 
        aseguradora: "",
        nu_polisa: "",
        nu_carnet: "",
        nu_certificado: "",
        titular_seguro: ""
      }
    };
  }
  limpiar = () =>{
    this.setState({value:{
      nombre: "",
      apellido: "",
      conocido: "",
      nacionalidad: "",
      fecha_nacimiento_dia: "",
      fecha_nacimiento_mes: "",
      fecha_nacimiento_anio: "",
      sexo: "", //select
      estado_civil: "", //select
      tipo_documento: "", //select
      num_documento: "",
      direccion_domicilio: "",
      telfono_celular: "",
      correo_electronico: "",
      telefono_domiciliar: "",
      telefono_trabajo: "",
      lugar_trabajo: "",
      conyugue: "",
      telefono_conyugue: "",
      profecion: "", //select
      medicamentio_que_utiliza: "", 
      alergias: "", 
      enfermedades_actuales: "", 
      nombre_padre: "", 
      telefono_padre: "", 
      ocupacion_padre: "", 
      nombre_madre: "", 
      telefono_madre: "", 
      ocupacion_madre: "",
      dui_padre_o_madre: "", 
      emergencia_llamar_a: "", 
      emergencia_telefono: "", 
      referido_por: "", 
      medico_cabecera: "", 
      reg_iva: "", 
      seguro_medico: "", // select si || no 
      aseguradora: "",
      nu_polisa: "",
      nu_carnet: "",
      nu_certificado: "",
      titular_seguro: ""
    }});
  }

  onChange = value=>{ 
    this.setState({value});
    //console.log(value);
    console.log(this.state);
  }  
  toass_cancel = ()=>{
    Alert.alert(
      'Cancelar',
      '¿Esta seguro?',
      [
        {
          text: 'No',
          style: 'cancel',
          onPress: () => {
            console.log('No cancelado')
          },
        },
        {text: 'Si', onPress: () =>{

          }
        },
      ],
      {cancelable: false},
    );
  }
  toass = ()=>{
    var arrays=this.state.value; 
    if(arrays.nombre==''){
      Alert.alert(
        'Ooops',
        'El nombre es requerido.!',
        [{text: 'Ok', onPress: () =>{ } },],
      );
      return false;
    }else if(arrays.apellido==''){
      Alert.alert(
        'Ooops',
        'El apellido es requerido.!',
        [{text: 'Ok', onPress: () =>{ } },],
      );
      return false;
    }else if(arrays.fecha_nacimiento==''){
      Alert.alert(
        'Ooops',
        'LA fecha de nacimiento es requerida.!',
        [{text: 'Ok', onPress: () =>{ } },],
      );
      return false;
    }else{
      Alert.alert(
        'Guardar Datos',
        '¿Esta seguro?',
        [
          {
            text: 'No',
            style: 'cancel',
            onPress: () => {
              console.log('No cancelado')
            },
          },
          {text: 'Si', onPress: () =>{
            this.sendDatas();
            }
          },
        ],
        {cancelable: false},
      );
    }
  }
  sendDatas =() =>{
    var arrays=this.state.value;
    var dataSend = new FormData();
    dataSend.append('nombre', arrays.nombre);
    dataSend.append('apellido', arrays.apellido);
    dataSend.append('conocido', arrays.conocido);
    dataSend.append('nacionalidad', arrays.nacionalidad);
    dataSend.append('fecha_nacimiento', arrays.fecha_nacimiento_anio+"-"+arrays.fecha_nacimiento_mes+"-"+arrays.fecha_nacimiento_dia);
    dataSend.append('estado_civil', arrays.estado_civil); //select 
    dataSend.append('sexo', arrays.sexo); //select
    dataSend.append('tipo_documento', arrays.tipo_documento); //select
    dataSend.append('num_documento', arrays.num_documento);
    dataSend.append('direccion_domicilio', arrays.direccion_domicilio);
    dataSend.append('telfono_celular', arrays.telfono_celular);
    dataSend.append('correo_electronico', arrays.correo_electronico);
    dataSend.append('telefono_domiciliar', arrays.telefono_domiciliar);
    dataSend.append('lugar_trabajo', arrays.lugar_trabajo);
    dataSend.append('conyugue', arrays.conyugue);
    dataSend.append('telefono_conyugue', arrays.telefono_conyugue);
    dataSend.append('telefono_trabajo', arrays.telefono_trabajo);
    dataSend.append('profecion', arrays.profecion); //select
    dataSend.append('medicamentio_que_utiliza', arrays.medicamentio_que_utiliza); 
    dataSend.append('alergias', arrays.alergias); 
    dataSend.append('enfermedades_actuales', arrays.enfermedades_actuales); 
    dataSend.append('nombre_padre', arrays.nombre_padre); 
    dataSend.append('telefono_padre', arrays.telefono_padre); 
    dataSend.append('ocupacion_padre', arrays.ocupacion_padre); 
    dataSend.append('nombre_madre', arrays.nombre_madre); 
    dataSend.append('telefono_madre', arrays.telefono_madre); 
    dataSend.append('ocupacion_madre', arrays.ocupacion_madre);
    dataSend.append('dui_padre_o_madre', arrays.dui_padre_o_madre); 
    dataSend.append('emergencia_llamar_a', arrays.emergencia_llamar_a); 
    dataSend.append('emergencia_telefono', arrays.emergencia_telefono); 
    dataSend.append('teferido_por', arrays.teferido_por); 
    dataSend.append('medico_cabecera', arrays.medico_cabecera); 
    dataSend.append('reg_iva', arrays.reg_iva); 
    dataSend.append('seguro_medico', arrays.seguro_medico); // select si || no 
    dataSend.append('aseguradora', arrays.aseguradora);
    dataSend.append('nu_polisa', arrays.nu_polisa);
    dataSend.append('nu_carnet', arrays.nu_carnet); 
    dataSend.append('nu_certificado', arrays.nu_certificado);
    dataSend.append('titular_seguro', arrays.titular_seguro); 
    fetch('http://medicpro.cloud/grupocarpio/API/show_datos', {
    method: 'POST',
    body: dataSend,
  })
      //.then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.status){
          Alert.alert(
            'Excelente',
            'Datos almacenados correctamente.!',
            [
              {text: 'Ok', onPress: () =>{ 
                  this.limpiar(); 
                }
              },
            ],
          );
        }else{
          Alert.alert(
            'Ooops',
            'Ha ocurrido un error, favor verificar los datos e intentarlo nuevamente.!',
            [
              {text: 'Ok', onPress: () =>{ 
                  this.limpiar(); 
                }
              },
            ],
          );
        }
      }).catch((error) => {
        console.error(error);
      });
     
    }
    render (){
        const { value } = this.state;
        return (
          <ScrollView style={styles.container}>    
            <View  style={styles.containerview}>
                  
                  <Form 
                    ref="inputs"
                    type={ LoginStruct }
                    options={ LoginOptions }
                    value={ value }
                    onChange={ v => this.onChange(v) }
                  />
                  <Text h3 h3Style={styles.h4s}>AREA MEDICA</Text>
                  <Form 
                    ref="inputs"
                    type={ MedicStruct }
                    options={ MedicOptions }
                    value={ value }
                    onChange={ v => this.onChange(v) }
                  />
                  <Text h3 h3Style={styles.h4s}>SI EL PACIENTE ES MENOR DE EDAD POR FAVOR COMPLETAR ESTA SECCION</Text>
                  <Form 
                    ref="inputs"
                    type={ NinoStruct }
                    options={NinoOptions }
                    value={ value }
                    onChange={ v => this.onChange(v) }
                  />
                  <Text h3 h3Style={styles.h4s}>TU INFORMACION ES VALIOSA Y CONFIDENCIAL</Text>
                  <Button title="Registrar" buttonStyle={styles.btn_save}  onPress={ this.toass.bind(this) }/>
                  <Text style={styles.text}>Desarrollado por GRUPO ITMED - www.grupoitmed.com</Text>
                  <Text style={styles.text2}>Powered by MEDICPRO ®</Text>
            </View>
          </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
  text:{
    color:"#FFF",
    textAlign: 'center',
    marginTop:50
  },
  text2:{
    color:"#FFF",
    textAlign: 'center',
    marginTop:5
  },
  container: {
    width:'90%',
    marginLeft:'5%',
    top:50,
  },
  btn_save:{
    backgroundColor:'#08BC8F',
  },
  containerview:{
    marginBottom:500,
  },
  h4s:{
    textAlign:'center',
    marginBottom:20,
    color:"#08BC8F",
    marginTop:50
  },
  h5S:{
    width:'90%',
    color:"#FFF",
    marginLeft:'5%',
    alignItems: 'center',
    textAlign:'center',
  }
});
