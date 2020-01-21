import React, {useEffect, useState} from 'react';
import {splashLogo} from './splash3.jpg';
import {Image, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import firebase from 'firebase';

const SplashScreen = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // componenteWillUnmount
    // useEffect(()=>{
        //     // setTimeout(()=>{}, 2000);
        //     return(()=>{console.log("clean up the SplashScreen")})
        // },[]);
        
        // component Did mount
        useEffect(() => {
            
            console.log("from SplashScreen ----->", isLoggedIn);
            // setTimeout(()=>{

            //     props.navigation.navigate('Login')
            // },1000);
            firebase.auth().onAuthStateChanged(user =>{
                if(user){
                    setIsLoggedIn(true);
                }else{
                    setIsLoggedIn(false);
                }
            });
    // });
    // const renderContent = () =>{
        switch(isLoggedIn){
            case true:{
                // setTimeout(() =>{
                //     return <View>
                //         <Button onPress = {() => firebase.auth().signOut()}>Logout</Button>
                //     </View>
                // }, 2000);

                // navigate ('SignOut)
                setTimeout(() => props.navigation.navigate('UserDetailForm'), 3000);
                // return () => props.navigation.navigate('UserDetailForm')
            }
               
            case false: {
                setTimeout(() => props.navigation.navigate('UserDetailForm'), 3000);
                // return () =>props.navigation.navigate('Login')
            }
            default: {
                 <View><Text>Spinner</Text></View>
            }
                    
        }
    }
        );

    return(
        <View>
            <Image source = {require('./splash3.jpg')} 
                    style = {{height: 800, width: 500 }}/>
            <Text style = {{marginLeft: 180, color: 'black', 
                    marginTop: 20}}>@jyoti.inc</Text>
        </View>
    )
} 



export default SplashScreen;