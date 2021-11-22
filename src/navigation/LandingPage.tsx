import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const LandingPage = ({navigation}: any)=>{
    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style = {styles.topBox}>
                <Image 
                source = {{
                    width: 200,
                    height: 200,  
                    uri: 'https://d117h1jjiq768j.cloudfront.net/images/default-source/blogs/2019/2019-10/the-react-native-sdk-for-kinvey-is-now-available_870_450.png'
                }}/>
                <Text>Welcome To Daksh's Demo App</Text>
            </View>
            <View style = {styles.bottomBox}>
                <View style = {styles.navButtonsWrapper}>
                    <TouchableOpacity style = {styles.buttonStyle}
                        onPress={() => {
                            navigation.push('SignUp')
                    }}>
                        <Text style={styles.buttonFont}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonStyle}
                    onPress={() => {
                        navigation.push('Login')
                    }}>
                        <Text style={styles.buttonFont}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1, 
        paddingTop: 40
    },
    topBox:{
        flex: 1.5,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    bottomBox:{
        flex: 2,
        justifyContent: "flex-end",
        padding: 30
    },
    navButtonsWrapper:{
        height: 100,
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

export default LandingPage;