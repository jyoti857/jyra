import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import { editUserAction } from '../../../../actions/editUser';


const EditUser = props => {
    const user = props.navigation.getParam('user');
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    // try to pass the id
    const [id, setId] = useState(user.id);
    console.log("from edit user  ---> ", id)
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
                onPress = {() => props.editUserAction(id, name, phone)}>Edit user </Button>
        </View>
    )   
}
// const mapStateToProps = state =>{
//     // const user = state.createUserReducer.users.map(user => user.phone === )
//     return{
//         name: state.createUserReducer.name,
//         phone: state.createUserReducer.phone        
//     }
// }

const mapDispatchToProps = dispatch =>{
    return{
        editUserAction : (id, name, phone) => dispatch(editUserAction({id, name, phone})) 
    }
} 
export default connect(null, mapDispatchToProps)(EditUser);