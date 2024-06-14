import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Mock data for demonstration, replace with actual data fetching logic
const mockFriends = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

const FriendsScreen = () => {
  const [friends, setFriends] = useState(mockFriends);
  const [newFriendName, setNewFriendName] = useState('');

  const addFriend = () => {
    if (newFriendName.trim()) {
      setFriends([...friends, { id: Date.now().toString(), name: newFriendName }]);
      setNewFriendName('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.friendItem}>
      <Text style={styles.friendName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        style={styles.input}
        value={newFriendName}
        onChangeText={setNewFriendName}
        placeholder="Enter friend's name"
      />
      <Button title="Add Friend" onPress={addFriend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  friendItem: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  friendName: {
    color: '#FFD700',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFD700',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default FriendsScreen;

