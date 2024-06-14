import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/icons/notifications.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons/messages.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons/settings.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#000',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFD700',
  },
});

export default TopBar;

