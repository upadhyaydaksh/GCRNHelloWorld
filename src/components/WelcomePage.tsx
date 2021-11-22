import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Alert, Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FlexBoxTry from "./FlexBoxTry";

const Stack = createNativeStackNavigator();


const WelcomePageMain = ()=>{
    const {wrapper, textStyle, clickMeStyle, iconStyle} = styles 
    return(
        <View style={wrapper}>
            <Text style={textStyle}>Welcome to my application</Text>
            <Image 
            source = {{
                width: 300,
                height: 300,  
                uri: 'https://d117h1jjiq768j.cloudfront.net/images/default-source/blogs/2019/2019-10/the-react-native-sdk-for-kinvey-is-now-available_870_450.png'
            }}
            ></Image>
            <Text 
            style={clickMeStyle} 
            onPress={()=>{ 
                alert('get Resolution')
                const res = Dimensions.get('window');
                console.log(res)
            }}>Text Button</Text>
            <Button title='Simple Button'
            onPress={()=>{
                console.log('Simple Button')
                Alert.alert('Attention!', 'Operation Success' )
            }}/>
            <TouchableOpacity onPress = {() => {
                console.log('Complex Button')
                Alert.alert('Attention!', 'Sign Out?',[
                    { text: 'Yes', onPress: () => { console.log(' Do Logout')}},
                    { text: 'No', onPress: () => { console.log(' Do Nothing')}}
                ])
            }}>
                <Text>Complex Button</Text>
                <Image style = {iconStyle} source = {require('./../../assets/icon.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

const WelcomePage = () => {
    return(
        <Stack.Navigator
            initialRouteName="WelcomePageMain"
        >
            <Stack.Screen name="Landing" component={WelcomePageMain} />            
            <Stack.Screen name="FlexBoxTry" component={FlexBoxTry} />
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        backgroundColor: "#f1f1f1",
        padding: 10,
        alignItems: 'center'
    },
    textStyle: {        
        textAlign: "center"
    },
    clickMeStyle:{
        margin: 10,
        padding: 10,
        backgroundColor: 'black',
        color: 'white'
    },
    iconStyle:{
        width: 50,
        height: 50
    }
})

export default WelcomePage;