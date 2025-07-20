import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password123') {
      router.push('/home'); // ✅ Navigates only when login is correct
    } else {
      alert('Invalid email or password'); // ❌ Shows alert only when needed
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.logoImage}
      />
      <Text style={styles.buttonText}>OrphanConnect</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address" 
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.signup}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
formcontainer: {
    width: '90%',
    maxWidth:400,
    alignSelf:'auto'
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20, 
  },
  input: {
    backgroundColor: 'fff',
    borderRadius:8,
    marginBottom: 16,
    width:'100%',
    padding: 12,
  },
 loginButton: {
    backgroundColor: '#00aeefff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    fontWeight:'bold',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  signup: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center', // ✅ fixed typo
    marginTop: 15,
  },

});

export default LoginScreen;