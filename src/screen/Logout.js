import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
    const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      const logout = await auth().signOut();
      console.log(logout);
      navigation.navigate('Login')
    } catch (error) {
      console.log(error, 'Please logout');
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '30%',
    height: 50,
    backgroundColor: '#5352ed',
    paddingTop: 12,
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
