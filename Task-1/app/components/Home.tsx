import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password.');
      return;
    }

    // Dummy login action
    Alert.alert('Login Success', `Email: ${email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[
            styles.input,
            isFocusedEmail && styles.inputFocused,
          ]}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[
            styles.input,
            isFocusedPassword && styles.inputFocused,
          ]}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'blue',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#444',
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#007AFF',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
