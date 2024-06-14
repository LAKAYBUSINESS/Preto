import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('A short bio about myself.');
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [status, setStatus] = useState('Online');
  const [following, setFollowing] = useState(false);

  const handleSave = () => {
    // Save the updated profile information
  };

  const handleFollow = () => {
    setFollowing(!following);
    // Update follow status in the backend
  };

  const handleSelectImage = (setImage) => {
    launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSelectImage(setCoverPhoto)}>
        {coverPhoto ? (
          <Image source={{ uri: coverPhoto }} style={styles.coverPhoto} />
        ) : (
          <View style={styles.coverPlaceholder}>
            <Text style={styles.placeholderText}>Select Cover Photo</Text>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectImage(setProfilePicture)}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Select Profile Picture</Text>
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Bio:</Text>
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setBio}
        multiline
      />
      <Text style={styles.label}>Status:</Text>
      <TextInput style={styles.input} value={status} onChangeText={setStatus} />
      <Button title="Save" onPress={handleSave} />
      <Button
        title={following ? 'Unfollow' : 'Follow'}
        onPress={handleFollow}
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
  coverPhoto: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  coverPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: {
    color: '#FFD700',
  },
  label: {
    color: '#FFD700',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFD700',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ProfileScreen;

