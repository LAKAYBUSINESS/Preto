import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../../components/Header';
import TopBar from '../../components/TopBar';
import Stories from '../../components/Stories';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar />
      <Stories />
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
      <Button title="Start Video Call" onPress={() => navigation.navigate('VideoCall')} />
      <Button title="Start Voice Call" onPress={() => navigation.navigate('VoiceCall')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    color: '#FFD700',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;

