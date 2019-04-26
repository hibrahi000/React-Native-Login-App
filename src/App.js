import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD0i-DU8oWNuPQnQsYSeoGS914QZoKz5HI",
            authDomain: "authentication-4af72.firebaseapp.com",
            databaseURL: "https://authentication-4af72.firebaseio.com",
            projectId: "authentication-4af72",
            storageBucket: "authentication-4af72.appspot.com",
            messagingSenderId: "559213635884"
        });
    }
    

    render() {
        return(
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }

    
}

export default App;