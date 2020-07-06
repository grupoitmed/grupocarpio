import React from 'react';
import { View, StyleSheet,ScrollView,Alert } from 'react-native';
import { Button } from 'react-native-elements';
import t from "tcomb-form-native";
import { Text } from 'react-native-elements';
import { LoginStruct,LoginOptions,MedicStruct,MedicOptions,NinoStruct,NinoOptions } from "./componentes/Form";
const Form = t.form.Form;
import moment from "moment";
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Formulario extends React.Component  {
  constructor(){
    super();
    this.state = {
      showAlert: false,
      showAlert_envio: false,
      title_alert_error: "",
      color_btn_alert_error: "",
      msj_alert_error: "",
      edad:"",
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
  showAlert_envio = () => {
    this.setState({
      showAlert_envio: true
    });
  };
  hideAlert_envio = () => {
    this.setState({
      showAlert_envio: false
    });
  };
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  /*
  retrieveData = async () => {
    try {
        return value = await fetch("https://medicpro.cloud/grupocarpio/API/show_datos_profesiones", {
            method: 'GET', 
        })
        .then((response) => response.json())
        .then((resp) => { 
            this.setState({profecion:{
              profecion: resp.datos
            }}); 
        }).catch((error) => {
            console.error(error);
        }); 
    } catch (error) {
        console.log(error);
    } 
  };
  
  componentDidMount(){
    this.retrieveData();
  };*/
  limpiar = () =>{
    this.setState({
      edad:"",
      value:{
      nombre: "", 
      apellido: "",
      conocido: "",
      nacionalidad: "",
      fecha_nacimiento_dia: 0,
      fecha_nacimiento_mes: 0,
      fecha_nacimiento_anio: 0,
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
    this.calculaEdad();
  }
  calculaEdad = () => {
    
    var arrays=this.state.value; 
    var fecha_nac = arrays.fecha_nacimiento_anio+"-"+arrays.fecha_nacimiento_mes+"-"+arrays.fecha_nacimiento_dia;
    //console.log(fecha_nac); 
    var fecha = moment();
    var a = moment(fecha);
    var b = moment(fecha_nac);
  
    // Sacar años de diferencia
    var years = a.diff(b, 'year');
    b.add(years, 'years');
    // Sacar mese de diferencia
    var months = a.diff(b, 'months');
    b.add(months, 'months');
    // Sacar sias de diferencia
    var days = a.diff(b, 'days');
    
    this.setState({edad:years});
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
            //console.log('No cancelado')
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
    var edad=this.state.edad; 
    
    this.setState({
      title_alert_error: "Ooops.",
      color_btn_alert_error: "#DD6B55"
    });
    if(arrays.nombre==''){
      this.setState({
        msj_alert_error: "El nombre es requerido."
      });
    this.showAlert();
      
      return false;
    }else if(arrays.apellido==''){
      
      this.setState({
        msj_alert_error: "El apellido es requerido."
      });
      this.showAlert();
     
      return false;
    }else if(arrays.fecha_nacimiento_dia=='' | arrays.fecha_nacimiento_mes=='' | arrays.fecha_nacimiento_anio==''){
      this.setState({
        msj_alert_error: "La fecha de nacimiento es requerida."
      });
      this.showAlert(); 
      return false;
    }else if(arrays.telfono_celular=='' & edad>17){
      this.setState({
        msj_alert_error: "El teléfono celular es requerido."
      });
      this.showAlert(); 
      return false;
    }else if(arrays.correo_electronico=='' & edad>17){
      this.setState({
        msj_alert_error: "El correo electronico es requerido."
      });
      this.showAlert(); 
      return false;
    }else if(arrays.nacionalidad==''){
      this.setState({
        msj_alert_error: "La nacionalidad es requerida."
      });
      this.showAlert();  
      return false;
    }else if(arrays.direccion_domicilio==''){ 
      this.setState({
        msj_alert_error: "La dirección es requerida."
      });
      this.showAlert();  
      return false;
    }else if(arrays.estado_civil=='' & edad>17){
      this.setState({
        msj_alert_error: "El estado civil es requerido."
      });
      this.showAlert();
      return false;
    }else if(arrays.referido_por==''){
      this.setState({
        msj_alert_error: "Referido por es requerido."
      });
      this.showAlert();
      return false;
    }else if(arrays.profecion=='' & edad>17){
      this.setState({
        msj_alert_error: "La profesión por es requerida."
      });
      this.showAlert(); 
      return false;
    }else if(arrays.lugar_trabajo=='' & edad>17){
      this.setState({
        msj_alert_error: "El lugar de trabajo es requerido."
      });
      this.showAlert();
      return false;
    }else if(arrays.telefono_trabajo=='' & edad>17){
      this.setState({
        msj_alert_error: "El teléfono de la oficina es requerido."
      });
      this.showAlert(); 
      return false;
    }else if(arrays.nombre_padre=='' & edad<18){ 
      this.setState({
        msj_alert_error: "El nombre del padre es requerido."
      });
      this.showAlert(); 
      return false;
    }else if(arrays.telefono_padre=='' & edad<18){
      this.setState({
        msj_alert_error: "El telefono del padre es requerido."
      });
      this.showAlert();  
      return false;
    }else if(arrays.ocupacion_padre=='' & edad<18){
      this.setState({
        msj_alert_error: "La ocupacion del padre es requerido."
      });
      this.showAlert();  
      return false;
    }else if(arrays.nombre_madre=='' & edad<18){
      this.setState({
        msj_alert_error: "El nombre del madre es requerido."
      });
      this.showAlert();
      return false;
    }else if(arrays.telefono_madre=='' & edad<18){
      this.setState({
        msj_alert_error: "El telefono de la madre es requerido."
      });
      this.showAlert(); 
      return false;
    }else if(arrays.ocupacion_madre=='' & edad<18){
      this.setState({
        msj_alert_error: "La ocupacion de la madre es requerido."
      });
      this.showAlert();  
      return false;
    }else if(arrays.sexo==''){
      this.setState({
        msj_alert_error: "El genero es requerido."
      });
      this.showAlert();
      return false;
    }else{
      this.showAlert_envio(); 
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
    dataSend.append('referido_por', arrays.referido_por); //select
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
    fetch('https://medicpro.cloud/grupocarpio/API/show_datos', {
    method: 'POST',
    body: dataSend,
  })
      //.then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.status){ 
          this.setState({
            title_alert_error: "Excelente.",
            msj_alert_error: "Datos almacenados correctamente.",
            color_btn_alert_error: "#0027FF"
          });
          this.showAlert(); 
        }else{
          this.setState({
            title_alert_error: "Ooops.",
            msj_alert_error: responseJson.response,
            color_btn_alert_error: "#DD6B55"
          });
          this.showAlert();
        }
      }).catch((error) => {
        console.error(error);
      });
     
    }
    render (){
        const { value } = this.state;
        const { showAlert } = this.state;
        const { msj_alert_error } = this.state;
        const { showAlert_envio } = this.state;
        const { title_alert_error } = this.state;
        const { color_btn_alert_error } = this.state; 
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
 
                  <AwesomeAlert
                      show={showAlert_envio}
                      showProgress={false}
                      title="Guardar Datos"
                      titleStyle={styles.container_alert}
                      messageStyle={styles.msj_alert}
                      cancelButtonTextStyle={styles.btn_cancel_alert}
                      confirmButtonTextStyle={styles.btn_cancel_alert}
                      message="¿Esta seguro?"
                      closeOnTouchOutside={true}
                      closeOnHardwareBackPress={false}
                      showCancelButton={true}
                      showConfirmButton={true}
                      cancelText="No, Cancelar"
                      confirmText="Si, Guardar"
                      cancelButtonColor="#DD6B55"
                      confirmButtonColor="#0027FF"
                      onCancelPressed={() => {
                        this.hideAlert_envio();
                      }}
                      onConfirmPressed={() => {
                        this.hideAlert_envio();
                        this.sendDatas();
                      }}
                  />
                  <AwesomeAlert
                      show={showAlert}
                      showProgress={false}
                      title={title_alert_error}
                      titleStyle={styles.container_alert}
                      messageStyle={styles.msj_alert}
                      confirmButtonTextStyle={styles.btn_cancel_alert}
                      message={msj_alert_error}
                      closeOnTouchOutside={true}
                      closeOnHardwareBackPress={false}
                      showCancelButton={false}
                      showConfirmButton={true}
                      cancelText="No, cancel"
                      confirmText="Ok."
                      confirmButtonColor={color_btn_alert_error}
                      onCancelPressed={() => {
                        this.hideAlert();
                      }}
                      onConfirmPressed={() => {
                        this.hideAlert();
                      }}
                  />
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
  container_alert:{
    fontSize:40
  },
  btn_cancel_alert:{
    fontSize:30
  },
  msj_alert:{
    fontSize:30
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
