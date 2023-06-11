import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { List, Radio } from '@ant-design/react-native';
import RNFS from 'react-native-fs';

const UserList = () => {
  const [loginRecords, setLoginRecords] = useState([]);
  const [selectedLoginRecord, setSelectedLoginRecord] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fileName = 'loginRecord.json';
    const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`;
    RNFS.exists(filePath)
      .then(exists => {
        if (exists) {
          RNFS.readFile(filePath, 'utf8')
            .then(data => {
              console.log('Read Login record data: '+data);
              const loginRecordsJSON = JSON.parse(data);
              console.log(loginRecordsJSON);
              setLoginRecords(loginRecordsJSON);
              console.log(loginRecords);
              if (loginRecords.length > 0) {
                setSelectedLoginRecord(loginRecords[0]);
                setUsername(loginRecords[0].username);
                setPassword(loginRecords[0].password);
                console.log('username: '+username);
              }
            })
            .catch(error => console.log(error));
        }
      })
      .catch(error => console.log(error));
  }, []);

  const handleLoginRecordChange = (value) => {
    const loginRecord = loginRecords.find(record => record.username === value);
    setSelectedLoginRecord(loginRecord);
    setUsername(loginRecord.username);
    setPassword(loginRecord.password);
  };

  const handleSave = () => {
    const updatedLoginRecords = loginRecords.map(record => {
      if (record.username === selectedLoginRecord.username) {
        return {
          ...record,
          password
        };
      }
      return record;
    });

    const fileName = 'loginRecord.json';
    const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`;
    RNFS.writeFile(filePath, JSON.stringify(updatedLoginRecords), 'utf8')
      .then(() => {
        setLoginRecords(updatedLoginRecords);
        alert('Login record updated successfully');
      })
      .catch(error => console.log(error));
  };

  return (
    <View>
      {loginRecords.length > 0 ? (
        <View>
          <List>
            {loginRecords.map(record => (
              <Radio key={record.username} checked={selectedLoginRecord && selectedLoginRecord.username === record.username} onChange={() => handleLoginRecordChange(record.username)}>
                <Text>{record.username}</Text>
              </Radio>
            ))}
          </List>
          <List>
            <TextInput value={username} onChangeText={text => setUsername(text)} />
            <TextInput value={password} onChangeText={text => setPassword(text)} />
            <TouchableOpacity onPress={handleSave}>
              <Text>Save</Text>
            </TouchableOpacity>
          </List>
        </View>
      ) : (
        <Text>No login records!</Text>
      )}
    </View>
  );
};

export default UserList;
