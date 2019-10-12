import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default (inputTemplates=local=>{
    return (
        <View style={styles.View}>
            <Input 
                placeholder={local.config.placeholder} 
                password={local.config.password} 
                secureTextEntry={local.config.secureTextEntry}
                
                onChangeText={v => local.onChange(v)}
            />
        </View>
    )
});

const styles = StyleSheet.create({
    View:{
        marginBottom:40
    }
});