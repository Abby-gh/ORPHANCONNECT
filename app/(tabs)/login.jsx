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
  

  const handleLogin = async () => {
    console.log('Test: Button was tapped');
    if (!email || ! password) {
      Alert.alert('Missing info', 'Please enter both email and password.');
      return;
      
    };
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // user sign in
      const user = userCredential.user;
      console.log('Login success:', user)
      Alert.alert('Success', 'Logged in successfully');
      router.replace('/(tabs)/home'); // this takes to the home screen
    }
catch (error) {
  Alert.alert('Login failed', error.message);
  return;
}
  };



  return (
    <View style={styles.container}>
      <Text style ={styles.title}>OrphanConnect login</Text>
      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.logoImage}
      />
      <Text style={styles.buttonText}>OrphanConnect</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address" 
        onChangeText={setEmail}
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={[styles.loginButton,{backgroundColor:'orange'}] }
        onPress={handleLogin}
        >
        <Text style={styles.buttonText}>Log in</Text>
    
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => router.push('/signup')}>
        <Text style={styles.signup}>Do not an account already</Text>
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
    backgroundColor: '#fff',
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

export default Login;