/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import firebase from 'firebase/app';
// import SplashScreen from './src/components/screens/splashscreen';
// import LoginScreen from './src/components/screens/loginScreen';
import AppRoute from './route';
import {Provider} from 'react-redux';
import store from './src/store';

class App extends React.Component {
  state  = {
    isLoggedIn: null,
  }
 
 UNSAFE_componentWillMount(){
  // firebase.initializeApp( {
    const appConfig = {
    apiKey: "AIzaSyDXUkl453-0nUzGxUiCNDIukH-UCnfItBQ",
    authDomain: "jyra-f03be.firebaseapp.com",
    databaseURL: "https://jyra-f03be.firebaseio.com",
    projectId: "jyra-f03be",
    storageBucket: "jyra-f03be.appspot.com",
    messagingSenderId: "996771183465",
    appId: "1:996771183465:web:a1f641b9237fd177521bf8",
    measurementId: "G-XY2T35KQ57"
  // });
    };

  // firebase.initializeApp(appConfig);
  // firebase.auth().onAuthStateChanged(user => {
  //   console.log("from app --->", user);
  //   if(user){
  //     this.setState({isLoggedIn: true});
  //   }else{
  //     this.setState({isLoggedIn: false});
  //   }
  // });

//   if (!firebase.apps.length) {
//     firebase.initializeApp(appConfig);
//  }
firebase.initializeApp(appConfig)
 
 }
 renderLogin = () =>{

 }
  render(){
    return (
      <Provider store = {store}>
        <View style ={{flex:1}}>
          {/* <SplashScreen />
          <LoginScreen /> */}
          <AppRoute />
        </View>
      </Provider>
    )
  }
}
export default App;
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });


