import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Input, Button } from "react-native-elements";

const SignInScreen = ({navigation}) => {
    return <View>
        <Image source={require('../../assets/Kymppikarhu_vari.png')} style={styles.image}/>
        <Input label={"Email"} />
        <Input label={"Password"} />
        <Button
            style={{ margin: 10 }}
            title="Login"
            onPress={() => navigation.navigate('Activities')} />
            <Button
                style={{ margin: 10 }}
                title="Register for an Account"
                onPress={() => navigation.navigate('SignUp')} />
    </View>
};

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;
