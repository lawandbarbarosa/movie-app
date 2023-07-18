import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const auth = getAuth();

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('home');
    } catch (err) {
      console.error(err.message);
      alert('Incorrect email or password');
    }
  };

  const handleChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.logo}>
        <Text style={styles.barbarosa}>Barbarosa</Text>
        <Text style={styles.db}>.DB</Text>
      </View>
      <View style={styles.login}>
        <Text style={{ marginTop: 100, fontSize: 25, fontWeight: '700', color: '#121212', alignSelf: 'center' }}>
          Login
        </Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder='Email Address'
            placeholderTextColor='gray'
          />
          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={handleChange}
            placeholder='Password'
            placeholderTextColor='gray'
          />
        </View>
        <TouchableOpacity style={styles.buttons} onPress={signIn}>
          <Button title='Sign In' color='white' />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('signUp')}>
          <Text style={{ fontSize: 20, marginTop: 20, alignSelf: 'center', justifyContent: 'center' }}>
            Sign Up?
          </Text>
        </TouchableWithoutFeedback>
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
    fontWeight: '800',
    color: '#121212',
  },
  db: {
    fontSize: 40,
    fontWeight: '800',
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
