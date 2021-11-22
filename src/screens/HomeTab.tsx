import React from 'react';
import { StyleSheet, Text, View } from "react-native"

const HomeTab = () => {
    return(
        <View style={styles.topBox}>
            <Text>
                An Home Tab
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({    
    topBox:{
        flex: 1.5,
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})

export default HomeTab;