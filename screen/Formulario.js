import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import t from "tcomb-form-native";
import { LoginStruct,LoginOptions } from "./screen/Form";
const Form = t.form.Form;

export default class Formulario extends React.Component  {
    render (){
        return (
            <View style={styles.container}>
                <Text>Formulario</Text>
                <Form 
                    ref="formValue"
                    type={LoginStruct}
                    options={LoginOptions}
              />
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: '#fff',
    top:50
  },
});
