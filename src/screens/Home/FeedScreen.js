import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FeedItem from '../../components/FeedItem';

const posts = [
  { id: '1', title: 'Post 1', description: 'Description 1', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Post 2', description: 'Description 2', image: 'https://via.placeholder.com/150' },
  // Add more posts here
];

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedItem post={item} />}
        keyExtractor={(item) => item.id}
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
});

export default FeedScreen;

