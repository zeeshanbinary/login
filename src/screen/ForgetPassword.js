import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forget Password</Text>
      <View style={styles.input}>
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text_button}> Send Email </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '85%',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    padding: 20,
    height: 40,
  },
  button: {
    width: '90%',
    backgroundColor: '#341f97',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  text_button: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
