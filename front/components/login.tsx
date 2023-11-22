import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace this with your actual login logic
    if (username && password) {
      console.log('Logging in with:', username);
      // Perform authentication logic, e.g., call an authentication API
      // If authentication is successful, navigate to the next screen
    } else {
      console.log('Please enter both username and password.');
    }
  };

  const handleGoogleLogin = () => {
    // Replace this with your actual Google login logic
    console.log('Logging in with Google');
    // Perform Google authentication logic
    // If authentication is successful, navigate to the next screen
  };

  const handleMicrosoftLogin = () => {
    // Replace this with your actual Microsoft login logic
    console.log('Logging in with Microsoft');
    // Perform Microsoft authentication logic
    // If authentication is successful, navigate to the next screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} />

      <Button title="Login with Google" onPress={handleGoogleLogin} />

      <Button title="Login with Microsoft" onPress={handleMicrosoftLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
  },
});

export default Login;
