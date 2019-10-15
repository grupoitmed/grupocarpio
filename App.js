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
      const logo = require('./assets/logo.png');
      const { submitting }= this.state; 
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
            value={ submitting }
            buttonStyle={styles.button}
            onPress={this.mostrar_vista.bind(this)}
            titleStyle={styles.title_button}
          />
          <Text>{submitting ? 'Cargando.....' : ''}</Text>
          <Text h5 h5Style={styles.h4}>La información que ingrese en esta aplicación, es para uso exclusivo de GRUPO CARPIO, la cual no será usada para ningún otro objetivo mas que su expediente clínico</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({ //alignItems: 'center',
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  h5:{
    width:'90%',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  }
});
