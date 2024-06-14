import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CategoryDetailScreen = ({ route }) => {
  const { category } = route.params;
  const content = [
    // Mock data for demonstration, replace with actual data fetching logic
    { id: '1', title: `${category.name} Item 1`, description: 'Description of item 1' },
    { id: '2', title: `${category.name} Item 2`, description: 'Description of item 2' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category.name}</Text>
      <FlatList
        data={content}
        renderItem={renderItem}
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
  header: {
    color: '#FFD700',
    fontSize: 24,
    marginBottom: 10,
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
  description: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CategoryDetailScreen;

