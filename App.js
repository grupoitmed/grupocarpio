import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Image,Button,Text } from 'react-native-elements';
import Formulario from "./screen/Formulario";
import AwesomeAlert from 'react-native-awesome-alerts';
export default class App extends React.Component {
    constructor(){
      super();
      this.state = {
        login:false,
        submitting:false
      };
    }
    mostrar_vista(){
      this.setState({
        login:true,
        showAlert_envio: false,
        submitting:true
      });
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
    toass_cancel = ()=>{
      this.showAlert_envio();
       
    }
  render(){ 
    const logo = require('./assets/logo_blanco.png');
    const { showAlert_envio } = this.state;
    if(this.state.login){
      return (
        <View style={styles.container}>
          <Text h3 h3Style={styles.h4s}>FORMULARIO DE REGISTRO</Text> 
            <View style={{alignItems: 'flex-end',marginTop:-60}}>
              <Image
                source={logo}
                style={styles.logo_2}
              />
            </View>
             <Formulario />
            <Button title="Cancelar"  titleStyle={styles.title_button} buttonStyle={styles.btn_cancelar} onPress={ this.toass_cancel.bind(this) } /> 
            <AwesomeAlert
              show={showAlert_envio}
              showProgress={false}
              title="Cancelar"
              titleStyle={styles.container_alert}
              messageStyle={styles.msj_alert}
              cancelButtonTextStyle={styles.btn_cancel_alert}
              confirmButtonTextStyle={styles.btn_cancel_alert}
              message="¿Esta seguro?"
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="No. No Cancelar"
              confirmText="Si. Cancelar"
              cancelButtonColor="#DD6B55"
              confirmButtonColor="#0027FF"
              onCancelPressed={() => {
                this.hideAlert_envio();
              }}
              onConfirmPressed={() => {
                this.setState({
                  login:false,
                  submitting:false
                });
                this.hideAlert_envio();
              }}
          />
        </View>
      );
    }else{
      
      return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                  source={logo}
                  style={styles.logo}
                />
            </View>
          <Button
            title="Registrarse"
            buttonStyle={styles.button}
            onPress={this.mostrar_vista.bind(this)}
            titleStyle={styles.title_button}
          />
          <Text h4 style={styles.h5S}>La información que ingrese en ésta aplicación es para uso exclusivo de GRUPO DERMATOLOGICO CARPIO, la cual no será usada para ningún otro objetivo más que su expediente clínico.</Text>
          <Text style={styles.text_footer}>Desarrollado por GRUPO ITMED - www.grupoitmed.com</Text>
          <Text style={styles.text_footer2}>Powered by MEDICPRO ®</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
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
  containerImage:{
    alignItems: 'center'
  },
  btn_cancelar:{
    backgroundColor:'#08BC8F',
  },
  text:{
      color:"red",
      textAlign: 'center',
  },
  text_footer2:{
    color:"#08BC8F",
    textAlign: 'center',
    marginTop:5
  },
  text_footer:{
    color:"#08BC8F",
    textAlign: 'center',
    marginTop:50,
    marginTop:600
  },
  h4s:{
    color:"#08BC8F",
    marginTop:50,
    textAlign: 'center',
  },
  logo: {
    width: 450,
    height: 325
  },
  logo_2:{
    width: 210,
    height: 150
  },
  button:{
    margin:20,
    borderRadius:20,
    backgroundColor:"#08BC8F"
  },
  title_button:{
    fontSize:35,
    alignItems: 'center', 
  },
  h5S:{
    width:'90%',
    color:"#08BC8F",
    marginLeft:'5%',
    alignItems: 'center',
    textAlign:'center',
  }
});
