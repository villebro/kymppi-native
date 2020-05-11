import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Input, Button, Text } from "react-native-elements";

const AboutScreen = ({}) => {
    return <View>
        <Image source={require('../../assets/Kymppikarhu_vari.png')} style={styles.image}/>
        <Text>Kymppi training tracker</Text>
        <Text>Version 0.1 (react-native)</Text>
        <Text>Developed by RESUL</Text>
    </View>
};

AboutScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 250,
        alignSelf: 'center',
        resizeMode: 'contain',
    }
});

export default AboutScreen;