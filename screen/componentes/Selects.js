import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default (inputTemplates=local=>{
    defaults =()=>{
        return fetch('https://medicpro.cloud/grupocarpio/API/show_datos/')
        //.then((response) => response.json())
        .then((responseJson) => {
        return responseJson;
        })
        .catch((error) => {
        console.error(error);
        });
    }
    const data = defaults();
    console.log(data);
    return (
        
        <View style={styles.View}>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={  
                    [
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ] 
                }
            />
        </View>
    )
});

const styles = StyleSheet.create({
    View:{
        marginBottom:40
    }
});