 import { View, Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react-native';
 
 const LoginScreen= () => {
   return (
     <View style={styles.container}>
       <Text style={styles.logo}>OrphanConnect</Text>

       <TextInput style={styles.input}>placeholder="Email" keyboradType="email-address"</TextInput>
      <TextInput style={styles.input}>placeholder="Password" secureTextEntry</TextInput>

        <TouchableOpacity style={styles.button}>
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
  logo:{
    fontSize: 30,
    fontWeight:'bold',
    marginBottom: 25,
    textAlign:'centre',
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
    textAlign:'centre',
    marginTop:15,
  },

  },
);
 
 export default LoginScreen;