 import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
 // importing react all the neceesary components from react-native
 import { useRouter } from 'expo-router';
//importing useRouter from expo-router to navigate between screens
;
// importing the image from the assets folder
 
 const LoginScreen= () => {
  const router= useRouter();
  // using useRouter to navigate between screens
  const[email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  // using useState to manage the state of email and password

  const handleLogin =( )=> {
    // Function to handle login logic
    if (email=== 'user@example.com' && password==='password123'){
      // if the email and password match the hardcoded values navigate to the  home screen
      router.push('/home');
    } else{
      // if the email and password do not match show an alert
      alert('Invalid email or password');
      // alert is used to show a message to the user
    }
  };
   return (
     <View style={styles.container}>
      <Image
      source={require('../../assets/logo.jpg')}
      style={styles.logoImage}/>
       <Text style={styles.buttonText}>OrphanConnect</Text>
/
       <TextInput
        style={styles.input}
        placeholder="Email"
         keyboradType="email-address"
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
          {/* onPress is used to call the handleLogin function when the  button is pressed} */}
          {/* TouchaleOpacity is used to make the button clickable */}

          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>
        </View>
        
   );
 };

 const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'centre',
    padding: 20,
    backgroundColor:'#fff',
  },
  logoImage:{
    width:150,
    height:150,
    resizeMode:'contain',
    alignSelf:'center',
    marginButton: 20,
    
  },
  input:{
    borderWidth:1,
    borderColor:'#ccc',
    marginBottom: 10,
    borderRadius:5,
    padding:10,
  },
  button:{
    backgroundColor:'#000',
    padding: 10,
    borderRadius: 10,
    marginBottom:15,
  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
  },
  signup:{
    color:'#000',
    fontWeight: 'bold',
    textAlign:'centre',
    marginTop:15,
  },

  },
);
 
 export default LoginScreen;