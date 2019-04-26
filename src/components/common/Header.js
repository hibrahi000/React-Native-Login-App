//Import libraries for making a component 
import React from 'react';
import { Text, View } from 'react-native';

//make the component
const Header = (props) => {
    const { textStyle, veiwStyle } = styles;

    return (
    <View style={veiwStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    veiwStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 45,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elecation: 2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 20
    }
    
};


//make the component availble to other parts of the app
export { Header };
