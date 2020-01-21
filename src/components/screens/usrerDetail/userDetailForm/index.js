import React, {useState, useEffect} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import { createUserAction } from '../../../../actions/createUser';



const UserDetailForm = props =>{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [day, setDay] = useState('');
    useEffect(() =>{

        console.log("from user detail form -->", props.name, '%***%', props.phone);
    })
    return(
        <View style = {{ 
            marginTop: 300,
            marginHorizontal: 50}}>
                <View>
            <Text>Name</Text>
            <TextInput 
                value = {name}
                mode= 'outlined'
                onChangeText = {name => setName(name)}
            />
            </View>
            <View>
                <Text>Phone</Text>
                <TextInput 
                    label = 'phone'
                    value = {phone}
                    mode='outlined'
                    onChangeText = {phone => setPhone(phone)}
                />
            </View>
            <Button mode='contained' 
                style = {{marginTop: 20, width: 140, 
                alignSelf: "center"}}
                onPress = {() => props.createUserAction(name, phone)}>Create user </Button>
        </View>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        createUserAction : (name, phone) => dispatch(createUserAction({name, phone}))
    }
}
const mapStateToProps = state => {
    return{
        name: state.createUserReducer.name,
        phone: state.createUserReducer.phone
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetailForm);