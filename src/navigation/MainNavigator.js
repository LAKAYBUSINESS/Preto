import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import VideoCallScreen from '../screens/Call/VideoCallScreen';
import VoiceCallScreen from '../screens/Call/VoiceCallScreen';
import CategoryScreen from '../screens/Explore/CategoryScreen';
import CategoryDetailScreen from '../screens/Explore/CategoryDetailScreen';
import SearchScreen from '../screens/Explore/SearchScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import FriendsScreen from '../screens/Friends/FriendsScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VideoCall" component={VideoCallScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VoiceCall" component={VoiceCallScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={CategoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

