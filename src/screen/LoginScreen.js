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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const clearText = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        let responseLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        setMessage('');
        clearText();
        navigation.navigate('Home', {
          screen: 'Dashboard',
          params: {
            email: responseLogin?.user?.email,
            uid: responseLogin?.user?.uid,
          },
        });
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
      <Text style={styles.text}> Login Page </Text>
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
      <TouchableOpacity
        style={styles.forget}
        onPress={() => navigation.navigate('Password')}>
        <Text style={{fontWeight: '600'}}> Forget your password? </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.text_button}> Login </Text>
      </TouchableOpacity>
      <Text>{message}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.text1}>
          Don't have an account?<Text style={styles.text2}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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
  forget: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
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
