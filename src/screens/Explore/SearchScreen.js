import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const mockData = [
  { id: '1', title: 'History Item 1', category: 'History' },
  { id: '2', title: 'Art Item 1', category: 'Art' },
  { id: '3', title: 'Music Item 1', category: 'Music' },
  // Add more items here
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = mockData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
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
  input: {
    backgroundColor: '#333',
    color: '#FFD700',
    padding: 10,
    borderRadius: 5,
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
  category: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SearchScreen;

