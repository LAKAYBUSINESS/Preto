import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TwilioVideo } from 'twilio-video';

const VideoCallScreen = () => {
  const [token, setToken] = useState(null);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/token')
      .then(response => response.json())
      .then(data => setToken(data.token));
  }, []);

  const connectToRoom = () => {
    if (token) {
      TwilioVideo.connect(token, { name: 'test-room' }).then(room => {
        setRoom(room);
        room.on('participantConnected', participant => {
          console.log(`Participant "${participant.identity}" connected`);
        });
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Video Call Screen</Text>
      <Button title="Join Call" onPress={connectToRoom} />
      {/* Add Twilio Video components to display video */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#FFD700',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default VideoCallScreen;

