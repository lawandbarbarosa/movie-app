import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export default function Login({ navigation }) {
  const [SignUp, setSignUp] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleChange = (text) => {
    setPassword(text);
  };

  const auth = getAuth();

  
  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('home');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.logo}>
        <Text style={styles.barbarosa}>Barbarosa</Text>
        <Text style={styles.db}>.DB</Text>
      </View>
      <View style={styles.login}>
        <Text style={{ marginTop: 55, fontSize: 25, fontWeight: 700, color: '#121212', alignSelf: 'center' }}>
          SignUp
        </Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder='username'
            placeholderTextColor='gray'
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder='email Address'
            placeholderTextColor='gray'
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={handleChange}
            placeholder='password'
            placeholderTextColor='gray'
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={handleChange}
            placeholder='confirm password'
            placeholderTextColor='gray'
          />
        </View>
        <TouchableOpacity style={styles.buttons}>
      <Button
      title='sign In'
      color='white'
      onPress={signIn}
      />
     </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  barbarosa: {
    fontSize: 40,
    fontWeight: 800,
    color: '#121212',
  },
  db: {
    fontSize: 40,
    fontWeight: 800,
    color: '#F8BD00',
  },
  inputs: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 17,
  },
  buttons: {
    backgroundColor: '#F05454',
    padding: 12,
    width: 300,
    alignSelf: 'center',
    borderRadius: 23,
  },
  input: {
    borderWidth: 1,
    borderColor: '#121212',
    padding: 12,
    marginVertical: 12,
    width: 300,
    borderRadius: 12,
    fontSize: 25,
  },
});
