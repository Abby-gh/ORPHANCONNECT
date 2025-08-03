import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { auth, db } from '../components/firebase';

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [hidePassword, setHidePassword] = useState(true); 

  const handleSignUp = async () => {
    if (!email || !password || !fullName || !age) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        fullName,
        age,
        email,
        uid: user.uid,
        createdAt: new Date(),
      });

      Alert.alert('Success', 'Account created successfully');
      router.replace('/login');
    } catch (error) {
      Alert.alert('Sign up failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Image
        source={require('../assets/logoA.jpeg')}
        style={styles.logoImage}
      />

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
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
          <Text style={styles.toggleText}>{hidePassword ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: 'green' }]}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.signup}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
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
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    position: 'relative',
    left: 450,
    borderRadius: 8,
    marginBottom: 16,
    width: '40%',
    padding: 10,
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
    paddingHorizontal: 10,
  },
  loginButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '20%',
    position: 'relative',
    left: 550,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signup: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    width: '90%',
  },
  signupButton: {
    backgroundColor: '#00aeefff',
    position: 'relative',
    left: 650,
    width: '20%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;