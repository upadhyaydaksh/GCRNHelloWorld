import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

const PageHeader = ()=>{
    return(
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.textStyle}>Header Displayed Here</Text>
        </SafeAreaView>
    )
}

export default PageHeader;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#000",
        padding: 10,
        paddingTop: Platform.OS == 'android' ? 40 : 20
    },
    textStyle: {
        color: "#fff",
        textAlign: "center"
    }
})