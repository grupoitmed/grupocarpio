import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Image,Button,Text } from 'react-native-elements';
import Formulario from "./screen/Formulario";

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
        submitting:true
      });
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
              this.setState({
                login:false,
                submitting:false
              });
            }
          },
        ],
        {cancelable: false},
      );
    }
  render(){
    if(this.state.login){
      return (
        <View style={styles.container}>
          
            <Formulario />
            <Button title="Cancelar" buttonStyle={styles.btn_cancelar} onPress={ this.toass_cancel.bind(this) } />
        </View>
      );
    }else{
      const logo = require('./assets/icon.png');
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
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  containerImage:{
    alignItems: 'center'
  },
  btn_cancelar:{
    backgroundColor:'red',
  },
  logo: {
    width: 250,
    height: 250
  },
  button:{
    margin:20,
    borderRadius:20
  },
  title_button:{
    fontSize:35,
    alignItems: 'center',
    
  },
  h5S:{
    width:'90%',
    color:"#FFF",
    marginLeft:'5%',
    alignItems: 'center',
    textAlign:'center',
  }
});
