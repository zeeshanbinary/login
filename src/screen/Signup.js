import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        let responseSign = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log(responseSign);
        navigation.navigate('Login');
      } else {
        Alert.alert('Please enter valid data');
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up Page</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.text_button}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text1}>
          Already have an account? <Text style={styles.text2}>Login</Text>
        </Text>
      </TouchableOpacity>
      <Text>{message}</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#5f27cd',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
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
    borderRadius: 10,
    justifyContent: 'center',
  },
  text_button: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  text1: {
    fontSize: 15,
    fontWeight: '600',
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#341f97',
  },
});
