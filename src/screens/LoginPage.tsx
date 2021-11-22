import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const LoginPage = ({navigation}: any)=>{
    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style={styles.topBox}>
                <Text>Sign In form input fields</Text>
            </View>
            <View style = {styles.bottomBox}>
                <TouchableOpacity style = {styles.buttonStyle}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'AfterLogin'}]
                        })                        
                    }}
                >
                <Text style = {styles.buttonFont}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    wrapper:{
        flex: 1
    },
    topBox:{
        flex: 3,
        justifyContent: "space-evenly",
        alignItems: "center",
        // backgroundColor: "red"
    },
    bottomBox:{
        flex: 2,
        padding: 10,
        // backgroundColor: "blue"
    },
    buttonStyle:{
        backgroundColor: "grey",
        padding: 10,
        alignItems: "center",
        marginBottom: 2
    },
    buttonFont:{
        color: "white"
    }
})

export default LoginPage;