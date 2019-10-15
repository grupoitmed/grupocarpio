import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default (inputTemplates=local=>{
    return (
        
        <View style={styles.View}>
            <Text>{ local.config.label }</Text>
            <RNPickerSelect
                onValueChange={v => local.onChange(v)}
                items={  local.config.itemss  }
                value={ local.value }
            />
        </View>
    )
});

const styles = StyleSheet.create({
    View:{
        marginBottom:40
    }
});