import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Text } from 'react-native-elements';

export default (inputTemplates=local=>{
    array ={dia:"",mes:"",year:""}
    onChanges = (value) =>{ 
        this.array["dia"]=value;
        //local.onChange(value,"fecha_nacimiento_mes");
        console.log(this.array);
    }
    onChanges_m = (value) =>{ 
        this.array["mes"]=value; 
        //local.onChange(this.array); 
    }
    onChanges_y = (value) =>{
        this.array["year"]=value; 
        //local.onChange(this.array); 
    } 
    var year = new Date().getFullYear();
    anios = []; 
    for (let i = year; i >= 1900; i--) 
    { 
        anios.push({ color: 'black', label: ""+i+"", value: i });
    }
    return (
        
        <View style={styles.View}>
                
          <View style={styles.button}>
            <Text h4 h4Style={styles.text}>Fecha de nacimiento</Text>
                <RNPickerSelect
                    onValueChange = {v => this.onChanges(v)}
                    items={ local.config.itemss }
                    style={ styles.input }
                    placeholder={{
                        label: 'Dia...',
                        value: 0,
                        color: 'red',
                    }}
                />
            </View>
            
          <View style={styles.button}> 
            <Text h4 h4Style={styles.text}> </Text>
                <RNPickerSelect
                    onValueChange = {v => this.onChanges_m(v)}
                    items={ [{ color: 'black', label: 'Enero',value: "01" },{ color: 'black', label: 'Febrero',value: "02" },{ color: 'black', label: 'Marzo',value: "03" },{ color: 'black', label: 'Abril',value: "04" },{ color: 'black', label: 'Mayo',value: "05" },{ color: 'black', label: 'Junio',value: "06" },{ color: 'black', label: 'Julio',value: "07" },{ color: 'black', label: 'Agosto',value: "08" },{ color: 'black', label: 'Septiembre',value: "09" },{ color: 'black', label: 'Octubre',value: 10 },{ color: 'black', label: 'Noviembre',value: 11 },{ color: 'black', label: 'Diciembre',value: 12 }] }
                    style={ styles.input }
                    placeholder={{
                        label: 'Mes...',
                        value: 0,
                        color: 'red',
                    }}
                />
            </View>
            
          <View style={styles.button}> 
            <Text h4 h4Style={styles.text}> </Text>
                <RNPickerSelect
                    onValueChange = {v =>this.onChanges_y(v)}
                    items={ anios }
                    style={ styles.input }
                    placeholder={{
                        label: 'Año...',
                        value: 0,
                        color: 'red',
                    }}
                />
            </View>
        </View>
    )
});

const styles = StyleSheet.create({
    View:{
        flexDirection: "row",
    },
    button: { 
        width: '33%', 
        marginLeft: 5,
    },
    text:{
        color:"#000"
    },
    input:{
        color: '#000',
        textDecorationColor: '#000',
    }
});