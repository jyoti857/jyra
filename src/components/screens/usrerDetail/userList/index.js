import React, {useState, useEffect} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import { fetchUserAction } from '../../../../actions/FetchUser';


const UserList = props => {return(<></>)}
// const UserList = props =>{
//     const {name, phone, users} = props.user;
//     const {fetchUser} = props;
//     console.log("from user list -->", users, name, phone)
//     useEffect(() => {
//         // fetchUser();

//         setTimeout(() =>{

//             fetchUser();
//         }, 0)

//         console.log('from user detail useEffect -----> users', users)
//     },[users]);
//     const onUserTapped = phone =>{
//         const user = users.find(user => phone === user.phone);
//         console.log("user detail user over navigation ", user)
//         props.navigation.navigate('UserDetail', {user})
//     }
//     let count= 0;
//     return(
//         <View style = {[{alignItems: 'center'}, styles.container]}>
//             {/* {users.map(({name, phone}) => {
//                 // console.log("frim ")
//                 return (<TouchableOpacity 
//             onPress = {() => onUserTapped(phone)}
//             style = {{margin: 10}}>
//                 <Text style={styles.user}>Name {name}</Text>
//                 <Text style = {styles.user}>Phone {phone}</Text>
//             </TouchableOpacity>)})} */}
//             {users.map((user, index) =>{
//                 return(<TouchableOpacity 
//                     onPress = {() => onUserTapped(phone)}
//                     style = {{margin: 10}}>
//                         <Text style={styles.user}>Name {user[index].name}</Text>
//                         <Text style = {styles.user}>Phone {user[index].phone}</Text>
//                     </TouchableOpacity>)
//             })}
//             {/* <FlatList 
//                 data = {users}
//                 renderItem = {({item}) => (<TouchableOpacity 
//                     onPress = {() => onUserTapped(phone)}
//                     style = {{margin: 10}}>
//                         <Text style={styles.user}>Name {item[count++].name|| 'jyoti'}</Text>
//                         <Text style = {styles.user}>Phone {item[count++].phone|| 'phone'}</Text>
//                     </TouchableOpacity>)}
//             /> */}
//         </View>
//     )
// }

// UserList.navigationOptions = ({navigation:{navigate}}) =>{
//     return{
//         headerRight: <TouchableOpacity onPress = {() => navigate('UserDetailForm')}>
//                 <Text style = {{color: 'blue', marginRight: 8, fontSize: 20}}>Create user</Text>
//                 </TouchableOpacity>,
//         headerLeft: null
//     }
// }

// const mapStateToProps = state => {
//     return{
//         user: state.createUserReducer
//     }
// }
// const mapDispatchToProps = dispatch =>{
//     return{
//         fetchUser : () => dispatch(fetchUserAction())
//     }
// }

// const styles = StyleSheet.create({
//     container :{
//         padding: 20,
//         justifyContent: 'flex-start',
//         flex: 1,
//         margin: 10
//     },
//     user:{  
//         fontSize: 20,
//         color: 'blue',
        
//     }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(UserList);