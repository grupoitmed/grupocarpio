import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default (inputTemplates=local=>{
    return (
        
        <View style={styles.View}>
            <RNPickerSelect
                onValueChange={v => local.onChange(v)}
                items={  local.config.itemss  }
            />
        </View>
    )
});

const styles = StyleSheet.create({
    View:{
        marginBottom:40
    }
});