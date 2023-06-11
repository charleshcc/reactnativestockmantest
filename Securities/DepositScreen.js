import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DepositScreen = () => {
    const navigation = useNavigation();
  
    // Define your JSON data here
    const depositData = [
      {
        "model": "Deposit.deposit",
        "pk": 21680262266,
        "fields": {
          "dp_scid": 1,
          "dp_seccomcode": "IACHK",
          "capital": 2420,
          "effectivedate": "2023-03-23",
          "statustype": "DIVIDEND",
          "source": "00002",
          "dp_udid": "Charles",
          "crdate": "2023-03-31T19:31:07",
          "crby": "Charles"
        }
      },
      {
        "model": "Deposit.deposit",
        "pk": 21679404899,
        "fields": {
          "dp_scid": 7,
          "dp_seccomcode": "IBUS",
          "capital": 112.5,
          "effectivedate": "2023-03-15",
          "statustype": "DIVIDEND",
          "source": "JSM",
          "dp_udid": "Charles",
          "crdate": "2023-03-21T21:21:40",
          "crby": "Charles"
        }
      }
    ];
  
    // Function to handle navigation to DepositEditScreen
    const navigateToEditScreen = (item) => {
      navigation.navigate('DepositEdit', { deposit: item });
    };
  
    // Render each deposit item
    const renderDepositItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigateToEditScreen(item)}>
        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>Deposit ID: {item.pk}</Text>
          <Text>Security Code: {item.fields.dp_seccomcode}</Text>
          <Text>Capital: {item.fields.capital}</Text>
        </View>
      </TouchableOpacity>
    );
  
    // Render the DepositScreen component
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Add Record"
          onPress={() => navigation.navigate('DepositEdit')}
        />
        <FlatList
          data={depositData}
          renderItem={renderDepositItem}
          keyExtractor={(item) => item.pk.toString()}
        />
      </View>
    );
  };
  
  export default DepositScreen;