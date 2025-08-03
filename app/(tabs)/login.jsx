import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { auth } from '../../components/firebase';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true); // 👈 new state

  const handleLogin = async () => {
    console.log('Test: Button was tapped');
    if (!email || !password) {
      Alert.alert('Missing info', 'Please enter both email and password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Login success:', user);
      Alert.alert('Success', 'Logged in successfully');
      router.replace('/(tabs)/home');
    } catch (error) {
      Alert.alert('Login failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}></View>
      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.logoImage}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          secureTextEntry={hidePassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Text style={styles.toggleText}>
            {hidePassword ? 'Show' : 'Hide'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: 'orange' }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/signup')}>
        <Text style={styles.signup}>Do not have an account?</Text>
        <Text style={styles.signup}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formcontainer: {
    width: '90%',
    maxWidth: 400,
    alignSelf: 'auto',
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    position: 'relative',
    left: 450,
    borderRadius: 8,
    marginBottom: 16,
    width: '40%',
    padding: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    left: 450,
    width: '40%',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  toggleText: {
    color: '#1e88e5',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#00aeefff',
    position: 'relative',
    left: 620,
    width: '20%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  signup: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    position: 'relative',
    left: 450,
    width: '40%',
  },
});

export default Login;