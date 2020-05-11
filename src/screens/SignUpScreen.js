import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Input, Button } from "react-native-elements";


const SignUpScreen = ({navigation}) => {
    return <View>
        <Image source={require('../../assets/Kymppikarhu_vari.png')} style={styles.image}/>
        <Input label={"Enter your Email"} />
        <Input label={"Enter a Password"} />
        <Button
            style={{ margin: 10 }}
            title="Register account"
            onPress={() => navigation.navigate('SignIn')} />
            <Button
                style={{ margin: 10 }}
                title="Login to an Account"
                onPress={() => navigation.navigate('SignIn')} />
    </View>
};

SignUpScreen.navigationOptions = () => {
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

export default SignUpScreen;
