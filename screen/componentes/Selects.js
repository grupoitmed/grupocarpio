import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Text } from 'react-native-elements';

export default (inputTemplates=local=>{
    return (
        
        <View style={styles.View}>
            <Text h4 h4Style={styles.text}>{ local.config.label }</Text>
            <RNPickerSelect
                onValueChange={v => local.onChange(v)}
                items={ local.config.itemss }
                value={ local.value }
                style={ styles.input }
                placeholder={{
                    label: 'Seleccione una opcion',
                    value: 0,
                    color: 'gray',
                  }}
            />
        </View>
    )
});

const styles = StyleSheet.create({
    View:{
        marginBottom:40
    },
    text:{
        color:"#FFF"
    },
    input:{
        color: '#FFF',
        textDecorationColor: '#FFF',
    }
});