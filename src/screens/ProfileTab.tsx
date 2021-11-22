import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ProfileTab = ({navigation}: any) => {
    return(
        <View style={styles.topBox}>
            <Text>
                An Profile Tab
            </Text>            
            <TouchableOpacity style = {styles.buttonStyle}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Landing'}]
                        })                        
                    }}>
                        <Text style={styles.buttonFont}>Reset Navigation Stack</Text>
                    </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({    
    topBox:{
        flex: 1.5,
        justifyContent: "space-evenly",
        alignItems: "center"
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

export default ProfileTab;