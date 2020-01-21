import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import firebase from 'firebase';

const SignupScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(username, password)
            .then(() => navigation.navigate('Profile'))
            .catch(err => console.log('From SignUp --->',err));
    }
    
    return (
        <View>
            <View style = {{
                    width: 800, justifyContent: "space-between", marginTop: 200, width: 400,
                    padding: 30, flexDirection: 'column', 
                }}>
            <TextInput 
                label = "Username"
                value = {username}
                mode = 'outlined'
                onChangeText = {username => setUsername(username)}
            />
            <TextInput 
                label = "Password"
                value = {password}
                mode='outlined'
                onChangeText = {password => setPassword(password)}
            />
            </View>
            <Button mode='contained'
                style = {{width: 100, alignSelf: 'center'}}
                onPress = {handleSignUp}
                >Signup</Button>
            <TouchableOpacity 
                style = {{alignSelf: 'center', marginTop: 30}}
                onPress = {() => navigation.navigate('Login')}>
                <Text>click here to Login</Text>
            </TouchableOpacity>
        </View>
    )
}


export default SignupScreen;