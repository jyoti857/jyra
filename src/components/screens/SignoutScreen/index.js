import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import firebase from 'firebase';


const SignOut = () => {
    return(
        <View style = {{marginTop: 400, alignItems: 'center'}}>
            <Button 
                mode='contained'
                onPress = {() => firebase.auth().signOut()} >SignOut</Button>
        </View>

    )
}

export default SignOut;