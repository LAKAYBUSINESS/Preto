import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      setNotifications([...notifications, remoteMessage.notification]);
    });

    return unsubscribe;
  }, [notifications]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  item: {
    backgroundColor: '#333',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  title: {
    color: '#FFD700',
    fontSize: 18,
  },
  body: {
    color: '#fff',
    fontSize: 14,
  },
});

export default NotificationsScreen;

