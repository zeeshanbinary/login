import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Home = () => {
  const route = useRoute();
  const {email, uid} = route.params;
  return (
    <View style={styles.container}>
      <Text>Email:{email}</Text>
      <Text>UID: {uid}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
