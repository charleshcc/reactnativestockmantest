import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const StockScreen = ({ navigation }) => {
  const stockData = [
    {
      "model": "UserStocks.userstocks",
      "pk": 21653510765,
      "fields": {
        "us_effdate": "2022-05-06",
        "us_expdate": null,
        "us_stockno": "04252",
        "us_statustype": "HKBOND",
        "us_bprice": 100,
        "us_bqty": 500,
        "us_bfee": 0,
        "us_bamount": 50000,
        "us_sprice": 0,
        "us_sqty": 0,
        "us_sfee": 0,
        "us_samount": 0,
        "us_userid": "Charles",
        "us_scid": 2,
        "us_sccode": "FUTU",
        "us_remark": "",
        "us_crdate": "2022-05-26T04:32:45",
        "us_crby": "Charles",
        "us_revdate": "2022-05-26T04:32:45",
        "us_revby": "Charles"
      }
    },
    // ...remaining stock items
  ];

  const renderStockItem = ({ item }) => (
    <View style={styles.stockItem}>
      <Text style={styles.stockInfo}>Stock No: {item.fields.us_stockno}</Text>
      <Text style={styles.stockInfo}>Price: {item.fields.us_bprice}</Text>
      <Text style={styles.stockInfo}>Quantity: {item.fields.us_bqty}</Text>
      <Text style={styles.stockInfo}>Amount: {item.fields.us_bamount}</Text>
    </View>
  );

  const navigateToChartScreen = () => {
    navigation.navigate('StockAssetsChart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock Screen</Text>
      <FlatList
        data={stockData}
        renderItem={renderStockItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={navigateToChartScreen}>
        <Text style={styles.buttonText}>Chart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  stockItem: {
    marginBottom: 10,
  },
  stockInfo: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1B263B',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StockScreen;