import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input,Text } from 'react-native-elements';

export default (inputTemplates=local=>{
    return (
        <View style={styles.View}>
            <Text h4 h4Style={styles.text} >{ local.config.label }</Text>
            <Input
                keyboardType = {local.config.type_input} 
                ref={ local.ref }
                placeholder={local.config.placeholder} 
                password={local.config.password} 
                secureTextEntry={local.config.secureTextEntry}
                value={ local.value }
                onChangeText={v => local.onChange(v)}
                inputStyle={styles.input}
            />
        </View>
    )
});

const styles = StyleSheet.create({
    View:{
        marginBottom:40,
        width: '100%',
    },
    text:{
        color:"#000",
        width: '100%',
        textTransform: "uppercase" 
    },
    input:{
        color: '#000',
        width: '100%',
    }
});