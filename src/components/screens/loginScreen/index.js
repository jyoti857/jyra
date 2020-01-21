import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import firebase from 'firebase';



class LoginScreen extends React.Component{
    state  = {
        username: '',
        password: ''
    }
    handleLogin = () =>{
        const {username, password} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(username, password)
            .then(() => this.props.navigation.navigate('Profile'))
            .catch(err => console.log('from login --> ', err));
    }
    render(){
        const {username, password} = this.state;
        const {navigation} = this.props;
        return(
            <View 
            // style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            style = {{backgroundColor: 'transparent', flex: 1}}
            >
            <View style = {{
                    width: 800, justifyContent: "space-between", marginTop: 200, width: 400,
                    padding: 30, flexDirection: 'column', 
                }}>
            <TextInput 
                label = "Username"
                value = {username}
                mode = 'outlined'
                onChangeText = {text => this.setState({username: text})}
            />
            <TextInput 
                label = "Password"
                value = {password}
                mode='outlined'
                onChangeText = {text => this.setState({password: text})}
            />
            </View>
            <Button mode='contained'
                onPress = {this.handleLogin}
            style = {{width: 100, alignSelf: 'center'}}>Login</Button>
            <TouchableOpacity 
                onPress = {() => navigation.navigate('SignUp')}
                style = {{alignSelf: 'center', marginTop: 30}}>
                <Text>if not signed up please click here</Text>
            </TouchableOpacity>
         </View> 
        )
    }
}

export default LoginScreen;