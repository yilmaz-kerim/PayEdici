import React from 'react'
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

function addperson() {
    const onSubmit = () => {
        alert("Eklendi");
      };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Person</Text>
      <TextInput
            style={styles.input}
            placeholder="Email"
            // Add other TextInput props as needed
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            // Add other TextInput props as needed
          />
      <Button title="Ekle" onPress={()=>{onSubmit()}} style={styles.buttons}/>
    </View>
  )
}

export default addperson;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      width: '70%',
    },
    buttons:{
        borderWidth: 1,
    }
  });
