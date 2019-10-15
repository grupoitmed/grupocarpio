import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default (inputTemplates=local=>{
    return (
        <View style={styles.View}>
            <Text>{ local.config.label }</Text>
            <Input 
                ref={ local.ref }
                placeholder={local.config.placeholder} 
                password={local.config.password} 
                secureTextEntry={local.config.secureTextEntry}
                value={ local.value }
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