import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image,Button,Text } from 'react-native-elements';
import Formulario from "./screen/Formulario";

export default class App extends React.Component {
    constructor(){
      super()

      this.state = {
        login:true
      };
    }
    mostrar_vista(){
      this.setState({
        login:true
      });
    }
  render(){
    if(this.state.login){
      return (
        <View style={styles.container}>
            <Formulario />
        </View>
      );
    }else{
      const logo = require('./assets/logo.png');
      return (
        <View style={styles.container}>
          <Image
            source={logo}
            style={styles.logo}
          />
          <Button
            title="Registrarse"
            buttonStyle={styles.button}
            onPress={this.mostrar_vista.bind(this)}
            titleStyle={styles.title_button}
          />
          <Text h4 h4Style={styles.h4}>La información que ingrese en esta aplicación, es para uso exclusivo de GRUPO CARPIO, la cual no será usada para ningún otro objetivo mas que su expediente clínico</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
      width: 500,
      height: 350
  },
  button:{
    justifyContent: 'center',
    width:400,
    height:200,
    borderRadius:20
  },
  title_button:{
    fontSize:35
  },
  h4:{
    width:700,
    top:500,
    justifyContent: 'center',
  }
});
