/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @mahendra Sharma
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  const [field, setField] = useState({
    name:"",
    email: ""
  });

  function handleNameChange(v, k) {
    setField({
      ...field, ///not want intialize new Object So clone last object 
      [k]: v
    });
  }

  useEffect(() => {
    console.log("changed value", field);
   });

   useEffect(() => {
    console.log('will called once when app load ');
   }, []);


   useEffect(() => {
     () => {
      console.log('will called when you leave the component');
     }
   });

  return (
    <View style={styles.container}>
    <Text>Name: {field["name"]}</Text>
    <Text>Email: {field["email"]}</Text>
      <TextInput
        value={field["name"]}
        onChangeText={(value) => handleNameChange(value, "name")}
        style={styles.input}
      />
        <TextInput
        value={field["email"]}
        onChangeText={(value) => handleNameChange(value, "email")}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    width: 220,
    textAlign: 'center',
    borderRadius: 7,
    borderColor: '#005068'
  }
});

export default App;
