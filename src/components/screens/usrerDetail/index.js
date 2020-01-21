import React, {useState, useEffect} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const UserDetail = props =>{
   console.log("from user detail navigation getParam ---> ", props.navigation.getParam('user'));
   const user = props.navigation.getParam('user');
    return(
        <View style = {[{alignItems: 'center'}, styles.container]}>
            <Text style={styles.user}>Name : {user.name}</Text>
            <Text style = {styles.user}>Phone : {user.phone}</Text>
        </View>
    )
}

UserDetail.navigationOptions = ({navigation:{navigate, getParam}}) =>{
    const user = getParam('user');
    return{
        headerRight: <TouchableOpacity onPress = {() => navigate('EditUser', {user})}>
                <Text style = {{color: 'blue', marginRight: 8, fontSize: 20}}>Edit user</Text>
                </TouchableOpacity>
    }
}

const mapStateToProps = state => {
    return{
        user: state.createUserReducer
    }
}

const styles = StyleSheet.create({
    container :{
        padding: 20,
        justifyContent: 'flex-start',
        flex: 1,
        margin: 10
    },
    user:{  
        fontSize: 20,
        color: 'blue',
        
    }
})
export default connect(mapStateToProps, null)(UserDetail);