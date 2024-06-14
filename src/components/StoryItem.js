import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostItem = ({ user, content }) => (
  <View style={styles.postItem}>
    <Text style={styles.user}>{user}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  postItem: {
    padding: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  user: {
    color: '#FFD700',
    fontSize: 18,
  },
  content: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PostItem;

