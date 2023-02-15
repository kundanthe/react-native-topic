
import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [result, setResult] = useState('sdfdffsfs');

    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');


    const _validateForm = () => {

        if (firstName == '') {
            Alert.alert('Please enter your name.')
        } else if (lastName == '') {
            Alert.alert('Please enter last name.')
        } else if (email == '') {
            Alert.alert('Please enter email.')
        } else if (address == '') {
            Alert.alert('Please enter address.')

        } else if (password == '') {
            Alert.alert('Please enter password.')

        } else if (confirmpassword == '') {
            Alert.alert('Please enter confirmpassword.')

        } else {
            setResult('Name :- ' + firstName + " " + lastName + '\n' + '')
        }

    }




    return <ScrollView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Register Account !!</Text>
            <View style={styles.subContainer}>
                <TextInput onChangeText={text => setFirstName(text)} placeholder='First Name'
                    style={styles.inputStyle}></TextInput>
                <TextInput onChangeText={text => setLastName(text)} placeholder='Last Name'
                    style={styles.inputStyle}></TextInput>
                <TextInput onChangeText={text => setEmail(text)} placeholder='Email'
                    style={styles.inputStyle}></TextInput>
                <TextInput onChangeText={text => setAddress(text)} placeholder='Address'
                    style={styles.inputStyle}></TextInput>
                <TextInput onChangeText={text => setPassword(text)} secureTextEntry={true} placeholder='Password'

                    style={styles.inputStyle}></TextInput>
                <TextInput onChangeText={text => setConfirmPassword(text)} secureTextEntry={true} placeholder='Confirm Password'
                    style={styles.inputStyle}></TextInput>

                <TouchableOpacity onPress={view => _validateForm()}
                    style={styles.buttonStyle}>
                    <Text style={styles.btnSubmit}>Submit</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{backgroundColor:'#000000',flex:1,height:100,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.txtResult}>{result}</Text>

                </View>
        </View>
    </ScrollView>

}
export default Registration

const styles = StyleSheet.create({
    container: {
    },
    txtResult: {
        fontSize: 15, color: '#fff'
    },
    btnSubmit: {
        fontSize: 20, color: '#fff'
    },
    subContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center', marginTop: 40,flex:1/2,
    },
    inputStyle: {
        borderColor: '#000', paddingLeft: 10, marginTop: 20, borderWidth: 2, borderRadius: 5, width: '85%', fontSize: 20
    },
    buttonStyle: {
        borderRadius: 5, backgroundColor: '#386150', width: '85%', marginTop: 50, alignItems: 'center', paddingTop: 10, paddingBottom: 10
    },
    headerStyle: {
        fontSize: 30, marginLeft: 35, color: '#386150', fontWeight: 'bold', marginTop: 50
    }
})