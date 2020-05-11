import React from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from 'react-native-elements';

const DeleteAccountScreen = ({navigation}) => {
    return (
        <>
            <Text style={styles.textTitle}>Account Delete</Text>
            <Text style={styles.textName}>Jörn Donner</Text>
            <Button title={"Confirm delete"} onPress={() => navigation.navigate('SignIn')}/>
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

export default DeleteAccountScreen;
