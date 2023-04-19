import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function App() {
  const handleButton1 = () => {
    console.log('Botão 1 pressionado');
  };

  const handleButton2 = () => {
    console.log('Botão 2 pressionado');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Learn a language for free.{'\n'}Forever.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButton1}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDiferenciado}>
      <Text style={styles.buttonText1}>I ALREADY HAVE AN ACCOUNT</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 300,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    minWidth: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text:{
    fontFamily: 'arial',
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonDiferenciado: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText1: {
    color: '#30ee30',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

