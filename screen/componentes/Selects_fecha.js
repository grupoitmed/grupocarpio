import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Text } from 'react-native-elements';

export default (inputTemplates=local=>{
          
    return (
        <View style={local.config.view}>
            <Text h4 h4Style={styles.text}>{ local.config.label }</Text>
            <RNPickerSelect
                onValueChange = {v => local.onChange(v)}
                items={ state }
                style={ styles.input }
                placeholder={{
                    label: 'Por favor seleccione...',
                    value: 0,
                    color: 'gray',
                  }}
            />
        </View>
    )
});

const styles = StyleSheet.create({
    View:{
        marginBottom:40,
    },
    text:{
        color:"#000"
    },
    input:{
        color: '#000',
        textDecorationColor: '#000',
    }
});