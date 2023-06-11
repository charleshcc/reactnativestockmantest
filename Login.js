import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { List } from '@ant-design/react-native';
import { useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import axios from 'axios';
import RNFS from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';

const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
};
const saveLoginRecord = async (username, password) => {
  const fileName = 'loginRecord.json';
  const loginRecordPath = `${RNFS.DownloadDirectoryPath}/${fileName}`;

  try {
    // Check if the login record file exists
    const fileExists = await RNFS.exists(loginRecordPath);
    
    let loginRecords = [];
    
    if (fileExists) {
      // Read the existing login record data
      const existingData = await RNFS.readFile(loginRecordPath, 'utf8');
      loginRecords = JSON.parse(existingData);
      
      // Check if the username already exists in the login records
      const existingLogin = loginRecords.find((record) => record.username === username);
      
      if (existingLogin) {
        // Update the existing login record with the new password
        existingLogin.password = password;
      } else {
        // Add a new login record to the array
        loginRecords.push({ username, password });
      }
    } else {
      // Add a new login record to the array
      loginRecords.push({ username, password });
    }
    
    // Convert the updated login records array to JSON string
    const updatedData = JSON.stringify(loginRecords, null, 2);
    
    // Write the updated login record data back to the file
    await RNFS.writeFile(loginRecordPath, updatedData, 'utf8');
    
    console.log('Login record saved successfully!');
  } catch (error) {
    console.error('Error saving login record:', error);
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
  middleware: [thunk],
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    /*
    axios.post('https://example.com/login', { username, password })
      .then(response => {
        dispatch(authSlice.actions.setIsLoggedIn(true));
        const data = JSON.stringify({ username, password });
        const fileName = 'loginRecord.json';
        const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`;
        RNFS.writeFile(filePath, data, 'utf8')
          .then(() => console.log('Login record saved successfully'))
          .catch(error => console.log(error));
        navigation.navigate('UserList');
      })
      .catch(error => console.log(error));*/
      dispatch(authSlice.actions.setIsLoggedIn(true));
      await saveLoginRecord(username, password);
      /*
      const array = [{ username, password }];
        const data = JSON.stringify(array);
        const fileName = 'loginRecord.json';
        const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`;
        RNFS.writeFile(filePath, data, 'utf8')
          .then(() => console.log('Login record saved successfully'))
          .catch(error => console.log(error));*/
        navigation.navigate('HomeScreen');
  };

  return (
    <View>
      <List>
        <TextInput style={styles.input}
        placeholder="Username"
        placeholderTextColor="#A0A0A0" onChangeText={text => setUsername(text)} />
        <TextInput style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A0A0A0"
        secureTextEntry onChangeText={text => setPassword(text)} />
      </List>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#bcbbb9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
export default Login;