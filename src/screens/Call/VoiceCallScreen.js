import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TwilioVoice } from 'twilio-client';

const VoiceCallScreen = () => {
  const [token, setToken] = useState(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/token')
      .then(response => response.json())
      .then(data => setToken(data.token));
  }, []);

  const connectToCall = () => {
    if (token) {
      const twilioClient = new TwilioVoice.Client(token);
      setClient(twilioClient);

      twilioClient.on('incoming', connection => {
        connection.accept();
      });

      twilioClient.on('connected', connection => {
        console.log('Connected to call');
      });

      twilioClient.on('disconnected', connection => {
        console.log('Disconnected from call');
      });

      twilioClient.connect({ params: { To: 'receiver-identity' } });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Voice Call Screen</Text>
      <Button title="Join Call" onPress={connectToCall} />
      {/* Add components to display call status */}
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

export default VoiceCallScreen;

