import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { categories } from '../../Data/categories'; // Note the capital 'D' in 'Data'

const CategoryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CategoryDetail', { category: item })}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
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
});

export default CategoryScreen;

