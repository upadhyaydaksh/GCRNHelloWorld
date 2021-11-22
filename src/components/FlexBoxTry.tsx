import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native"

const FlexBoxTry = ()=>{
    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[styles.boxStyle, styles.box1]}>
                <View style = {styles.box1_1}>

                </View>
                <View style = {styles.box1_2}>
                    <Text style = {styles.textH1Style}>Welcome to My App</Text>
                </View>
            </View>
            <View style = {[styles.boxStyle, styles.box2]}>
                <View style = {styles.box2_1}>
                        
                    </View>
                    <View style = {styles.box2_2}>
                       
                    </View>
                </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column"
    },
    boxStyle:{
        padding: 10 // not working
    },
    box1: {        
        flex: 1,
        backgroundColor: "#2e83a7",
        justifyContent: "flex-end",
    },
    box1_1:{
        height: 80,
        width: 80, 
        marginTop: 5,
        backgroundColor: "purple",
        alignSelf: "center",
        position: "relative",
        bottom: 10
    },
    box1_2:{
        flex: 0.5,
        marginTop: 5,
        // backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center"
    },
    box2:{
        // backgroundColor: "green",
        flex: 2.5,
        justifyContent: "flex-end"
    },
    box2_1:{
        height: 80,
        marginTop: 5,
        backgroundColor: "purple"
    },
    box2_2:{
        height: 40,
        marginTop: 5,
        backgroundColor: "purple"
    },
    defaultContainer:{
        flex: 1,
        margin: 10,
        backgroundColor: "#ededed"
    },
    // Text Styles
    textH1Style:{
        ...Platform.select({
            ios:{
                fontSize: 20,
                fontWeight: "700",
            },
            android:{
                fontSize: 30,
                fontWeight: "bold",
            }
        }),
        color: "white"
    }
})

export default FlexBoxTry;