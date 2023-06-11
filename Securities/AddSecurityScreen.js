import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const AddSecurityScreen = ({ navigation }) => {
    const [scCode, setScCode] = useState('');
    const [scName, setScName] = useState('');
    const [commission, setCommission] = useState('');
    const [minComm, setMinComm] = useState('');
    const [exchangeLevy, setExchangeLevy] = useState('');
    const [sfcLevy, setSfcLevy] = useState('');
    const [stampDuty, setStampDuty] = useState('');
    const [settleFee, setSettleFee] = useState('');
    const [clearingFee, setClearingFee] = useState('');
    const [storageFee, setStorageFee] = useState('');
    const [miscFees, setMiscFees] = useState('');
    const [scType, setScType] = useState('apple');

    const saveSecurity = () => {
        // Create a new security object with the collected data
        const newSecurity = {
            sc_code: scCode,
            sc_name: scName,
            commission: commission,
            mincomm: minComm,
            exchangelevy: exchangeLevy,
            sfclevy: sfcLevy,
            stampduty: stampDuty,
            settlefee: settleFee,
            clearingfee: clearingFee,
            storagefee: storageFee,
            miscfees: miscFees,
            sc_type: scType,
        };

        // Here, you can perform the necessary actions to save the new security data
        // For example, make an API request to store the data on the server

        // Navigate back to the previous screen
        navigation.goBack();
    };
    const [scTypeDropdownData, setScTypeDropdownData] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    return (
        <ScrollView  style={styles.container}>
            <Text style={styles.label}>SC Code:</Text>
            <TextInput style={styles.input} value={scCode} onChangeText={setScCode} />

            <Text style={styles.label}>SC Name:</Text>
            <TextInput style={styles.input} value={scName} onChangeText={setScName} />

            <Text style={styles.label}>Commission:</Text>
            <TextInput style={styles.input} value={commission} onChangeText={setCommission} keyboardType="numeric" />

            <Text style={styles.label}>Min Comm:</Text>
            <TextInput style={styles.input} value={minComm} onChangeText={setMinComm} keyboardType="numeric" />

            <Text style={styles.label}>Exchange Levy:</Text>
            <TextInput style={styles.input} value={exchangeLevy} onChangeText={setExchangeLevy} keyboardType="numeric" />

            <Text style={styles.label}>SFC Levy:</Text>
            <TextInput style={styles.input} value={sfcLevy} onChangeText={setSfcLevy} keyboardType="numeric" />

            <Text style={styles.label}>Stamp Duty:</Text>
            <TextInput style={styles.input} value={stampDuty} onChangeText={setStampDuty} keyboardType="numeric" />

            <Text style={styles.label}>Settle Fee:</Text>
            <TextInput style={styles.input} value={settleFee} onChangeText={setSettleFee} keyboardType="numeric" />

            <Text style={styles.label}>Clearing Fee:</Text>
            <TextInput style={styles.input} value={clearingFee} onChangeText={setClearingFee} keyboardType="numeric" />

            <Text style={styles.label}>Storage Fee:</Text>
            <TextInput style={styles.input} value={storageFee} onChangeText={setStorageFee} keyboardType="numeric" />

            <Text style={styles.label}>Misc Fees:</Text>
            <TextInput style={styles.input} value={miscFees} onChangeText={setMiscFees} keyboardType="numeric" />

            <Text style={styles.label}>Type:</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={scTypeDropdownData}
                setOpen={setOpen}
                setValue={setValue}
                defaultValue={scType} // Set default value
                placeholder="Select SC Type"
                onChangeItem={(item) => setScType(item.value)}
                setItems={setScTypeDropdownData}
            />

            <TouchableOpacity style={styles.button} onPress={saveSecurity}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AddSecurityScreen;