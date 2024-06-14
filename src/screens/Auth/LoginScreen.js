import React from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

const LoginScreen = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      // Handle the token and authenticate the user
    }
  }, [response]);

  return (
    <Button
      title="Login with Google"
      disabled={!request}
      onPress={() => promptAsync()}
    />
  );
};

export default LoginScreen;

