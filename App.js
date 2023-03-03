import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function adicao(){

    const resultado = parseFloat(num1) + parseFloat(num2);
    alert('O resultado é ' + resultado);

  }

  function subtracao(){

    const resultado = parseFloat(num1) - parseFloat(num2);
    alert('O resultado é ' + resultado);

  }

  function multiplicacao(){

    const resultado = parseFloat(num1) * parseFloat(num2);
    alert('O resultado é ' + resultado);

  }

  function divisao(){

    const resultado = parseFloat(num1) / parseFloat(num2);
    alert('O resultado é ' + resultado);

  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Calculadora</Text>
      <TextInput style={styles.input} keyboardType='numeric' placeholder='Digite um número' onChangeText={(first)=>setNum1(first)}/>
      <TextInput style={styles.input1} keyboardType='numeric' placeholder='Digite outro número' onChangeText={(second)=>setNum2(second)}/>

      <View style={styles.operationsGrid}>

      <TouchableOpacity style={styles.calcBtn} onPress={adicao}>
      <Text style={styles.btnTitle}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.calcBtn} onPress={subtracao}>
      <Text style={styles.btnTitle}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.calcBtn} onPress={multiplicacao}>
      <Text style={styles.btnTitle}>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.calcBtn} onPress={divisao}>
      <Text style={styles.btnTitle}>/</Text>
      </TouchableOpacity>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 8,
    paddingTop: 30,
  },

  title: {
    color: '#ff6600',
    margin: 25,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    margin: 20,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  input1: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 10,
    borderRadius: 15,
    fontSize: 20,
    textAlign: 'center',
  },

  calcBtn: {
    alignItems: 'center',
    backgroundColor: '#333333',
    width: 50,
    height: 50,
    marginTop: 10,
    borderRadius: 25,
    padding: 5,
  },

  btnTitle: {
    color: '#ff6600',
    fontSize: 25,
  },

  operationsGrid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },


});
