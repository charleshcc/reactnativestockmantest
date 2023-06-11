import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SecuritiesScreen = () => {
  const data = {
    status: 200,
    data: [
        {
            "SCID": 1,
            "Capital": 515000,
            "Dividend": 30103.81,
            "OptionIncome": 56194.159999999996,
            "Withdrawal": 226.94,
            "OnHoldCost": 343508.26,
            "TradeProfit": -77971.27
        },
        {
            "SCID": 2,
            "Capital": 95098,
            "Dividend": 1246.82,
            "OptionIncome": -302,
            "Withdrawal": 4033,
            "OnHoldCost": 73480.31,
            "TradeProfit": -15268.78
        }
    ],
  };
  const secdata = {
    status: 200,
    data: [
        {
            "model": "SecuritiesCom.securitiescom",
            "pk": 1,
            "fields": {
                "sc_code": "IACHK",
                "sc_name": "I-Access",
                "sc_type": "Stock",
                "commission": 0,
                "mincomm": 0,
                "exchangelevy": 0.00005,
                "sfclevy": 0.000027,
                "stampduty": 0.001,
                "settlefee": 0.00002,
                "clearingfee": 0,
                "storagefee": 0,
                "miscfees": 1,
                "crby": "Admin",
                "crdate": "2019-06-10T00:00:00",
                "revby": "Admin",
                "revdate": "2019-10-25T14:59:58"
            }
        },
        {
            "model": "SecuritiesCom.securitiescom",
            "pk": 2,
            "fields": {
                "sc_code": "FUTU",
                "sc_name": "Futu",
                "sc_type": "Stock",
                "commission": 0,
                "mincomm": 0,
                "exchangelevy": 0.00005,
                "sfclevy": 0.000027,
                "stampduty": 0.001,
                "settlefee": 0,
                "clearingfee": 0.00005,
                "storagefee": 0,
                "miscfees": 15.5,
                "crby": "Admin",
                "crdate": "2019-10-18T16:40:08",
                "revby": "Admin",
                "revdate": "2019-10-25T15:00:08"
            }
        }
    ],
  };

  const searchSecurities = (scid) => {
    const security = secdata.data.find((item) => item.pk === scid);
    return security ? security.fields : null;
  };

  const renderItem = ({ item }) => {
    const tradeProfitColor = item.Dividend + item.OptionIncome + item.TradeProfit < 0 ? 'red' : 'black';
    const securities = searchSecurities(item.SCID);
  
    const navigateToSecurityManage = () => {
      navigation.navigate('SecurityManage', { scCode: securities ? securities.sc_code : '' });
    };
  
    return (
      <TouchableOpacity onPress={navigateToSecurityManage}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>SCID: {item.SCID}</Text>
          {securities && (
            <View>
              <Text style={styles.itemSubtitle}>Code: {securities.sc_code}</Text>
              <Text style={styles.itemSubtitle}>Name: {securities.sc_name}</Text>
            </View>
          )}
          <Text style={styles.itemSubtitle}>Capital: {item.Capital}</Text>
          <Text style={[styles.itemSubtitle, { color: tradeProfitColor }]}>
            Total Value/Profit: {item.Capital.toString()} + ({(item.Dividend + item.OptionIncome + item.TradeProfit).toString()}) = {(item.Dividend + item.OptionIncome + item.TradeProfit).toString()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const navigation = useNavigation();

  const navigateToAddSecurity = () => {
    navigation.navigate('AddSecurity');
  };
  return (
    <View style={styles.container}>
      <Button title="New" onPress={navigateToAddSecurity} />
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.SCID.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 10,
  },
  listContent: {
    padding: 10,
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#808080',
  },
});

export default SecuritiesScreen;