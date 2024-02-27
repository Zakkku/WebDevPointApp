//App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen'
import CodeScanner from './CodeScanner';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 10 }}> This is the login screen!</Text>
      {/* 
      React Native's Button component does not accept a style prop, and its 
      color prop is limited and appears differently across Android, iOS, and the web.
      With the Pressable component, we can create custom buttons that fit our app's design. 
      Those styles will also be the same across Android, iOS, and the web, which will give our
      app a consistent look on every platform.
      
      */}
      <Pressable
        onPress={() => navigation.navigate('HomeScreen')}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#ba80f2' : '#9134eb' },
        ]}
      >
        <Text style={styles.buttonText}>GO TO HOME SCREEN</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scanner" component={CodeScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
