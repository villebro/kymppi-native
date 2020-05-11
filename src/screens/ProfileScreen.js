import React from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from 'react-native-elements';

const ProfileScreen = ({navigation}) => {
    return (
        <>
            <Text style={styles.textTitle}>Profile Screen</Text>
            <Text style={styles.textName}>Jörn Donner</Text>
            <Button style={{ margin: 10 }} title={"Log out"} onPress={() => navigation.navigate('SignIn')}/>
            <Button style={{ margin: 10 }} title={"Delete Account"} onPress={() => navigation.navigate('Delete')}/>
        </>
    );
};

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 48,
        margin: 15
    },
    textName: {
        fontSize: 30,
        margin: 15
    }
});

export default ProfileScreen;
