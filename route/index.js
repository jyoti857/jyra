import React from 'react';
import {
    createSwitchNavigator, 
    createStackNavigator
} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from '../src/components/screens/splashscreen';
import LoginScreen from '../src/components/screens/loginScreen';

import {View, Text} from 'react-native';
import SignupScreen from '../src/components/screens/SignupScreen';
import ProfileScreen from '../src/components/screens/profileScreen';
import SignOut from '../src/components/screens/SignoutScreen';
import UserDetail from '../src/components/screens/usrerDetail';
import UserDetailForm from '../src/components/screens/usrerDetail/userDetailForm';

// custom function to access navigation functionaities outside the navigation 
import { setNavigator} from '../src/navigationRef';
import userList from '../src/components/screens/usrerDetail/userList';
import EditUser from '../src/components/screens/usrerDetail/EditUser';

const appNavigator  = createStackNavigator({
    Splash: {screen: SplashScreen,
        navigationOptions: ({ navigation }) => ({
            title: '',
            headerShown: false
          })
    },
    Login : {screen: LoginScreen},
    SignUp: {screen: SignupScreen},
    Profile: {screen: ProfileScreen},
    SignOut: {screen: SignOut},
    UserDetail: {screen: UserDetail},
    UserDetailForm: {
        screen: UserDetailForm
    },
    UserList: {screen: userList},
    EditUser : {screen : EditUser},
},
// {
//     headerMode: "none",
//     navigationOptions:{
//         headerVisible: false,
//     },
// }
);


const App = createAppContainer(appNavigator);
export default () => (
    <View style={{ flex: 1 }}>
      < App ref = {navigator => setNavigator(navigator)}/>
    </View>
  );
// export default app;