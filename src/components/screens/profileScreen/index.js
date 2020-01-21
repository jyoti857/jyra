import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';


const ProfileScreen = props => {
    const [user, setUser] = useState('');
    
    useEffect(() => {
        const user = firebase.auth();
        const data = firebase.database().ref('users');
        // data.push({
        //     name: 'jyoti'
        // })
        console.log('from profile -->', user);
        setUser(user.currentUser);
    }, [])

    return(
        <View>
            <Text style = {{margin: 140}}>
                {user.currentUser ? user.currentUser : "Tresspassing"}
            </Text>
        </View>
    )
}

export default ProfileScreen;