import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import StoryItem from './StoryItem';

const stories = [
  { id: '1', user: 'User 1', image: 'https://via.placeholder.com/150' },
  { id: '2', user: 'User 2', image: 'https://via.placeholder.com/150' },
  // Add more stories here
];

const Stories = () => {
  return (
    <FlatList
      horizontal
      data={stories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <StoryItem user={item.user} image={item.image} />}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default Stories;

