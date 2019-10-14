import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { Text,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import t from "tcomb-form-native";
import { LoginStruct,LoginOptions } from "./componentes/Form";
const Form = t.form.Form;

export default class Formulario extends React.Component  {
  constructor(){
    super();

    this.state = {
      values:{
        nombre: "",
        apellido: "",
        conocido: "",
        nacionalidad: "",
        fecha_nacimiento: "",
        sexo: "", //select
        estado_civil: "", //select
        tipo_documento: "", //select
        num_documento: "",
        direccion_domicilio: "",
        telfono_celular: "",
        correo_electronico: "",
        telefono_domiciliar: "",
        telefono_trabajo: "",
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
        nu_certificado: "",
        titular_seguro: ""
      }
    };
  }

  onChange = values=>{
    this.setState({values});
  }
  sendDatas =() =>{
    var arrays=this.state.values;
    var dataSend = new FormData();
    dataSend.append('nombre', arrays.nombre);
    dataSend.append('apellido', arrays.apellido);
    dataSend.append('conocido', arrays.conocido);
    dataSend.append('nacionalidad', arrays.nacionalidad);
    dataSend.append('fecha_nacimiento', arrays.fecha_nacimiento);
    dataSend.append('estado_civil', arrays.estado_civil); //select 
    dataSend.append('sexo', arrays.sexo); //select
    dataSend.append('tipo_documento', arrays.tipo_documento); //select
    dataSend.append('num_documento', arrays.num_documento);
    dataSend.append('direccion_domicilio', arrays.direccion_domicilio);
    dataSend.append('telfono_celular', arrays.telfono_celular);
    dataSend.append('correo_electronico', arrays.correo_electronico);
    dataSend.append('telefono_domiciliar', arrays.telefono_domiciliar);
    dataSend.append('telefono_trabajo', arrays.telefono_trabajo);
    dataSend.append('profecion', arrays.profecion); //select
    dataSend.append('memedicamentio_que_utiliza', arrays.memedicamentio_que_utiliza); 
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
    dataSend.append('nu_certificado', arrays.nu_certificado);
    dataSend.append('titular_seguro', arrays.titular_seguro);
    fetch('http://medicpro.cloud/grupocarpio/API/show_datos', {
    method: 'POST',
    body: dataSend,
  })
      //.then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }
    render (){
        return (
          <ScrollView style={styles.container}>    
            <View  style={styles.containerview}>
                <Text>Formulario</Text>
                  <Form 
                    ref="values"
                    type={ LoginStruct }
                    options={ LoginOptions }
                    value={  this.state.values }
                    onChange={ v => this.onChange(v) }
                  />
                  <Button title="Registrar" onPress={ this.sendDatas.bind(this) }/>
            </View>
          </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    width:'90%',
    top:50
  },
  containerview:{
    marginBottom:50
  }
});
