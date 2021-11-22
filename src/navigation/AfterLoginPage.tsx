import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeTab from '../screens/HomeTab';
import ProfileTab from '../screens/ProfileTab';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const AfterLoginPage = ({navigation}: any) =>{
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="route-main" component={HomeTab} 
            options={{ 
                title: 'Home' ,
                tabBarIcon: ({color}) => (<AntDesign name="home" size={24} color={color}></AntDesign>)                
                }}></Tabs.Screen>
            <Tabs.Screen name="route-profile" component={ProfileTab}
            options={{ 
                title: 'Profile',
                tabBarIcon: ({color}) => (<MaterialCommunityIcons name="face-profile" size={24} color={color}></MaterialCommunityIcons>)                
                }}></Tabs.Screen>
        </Tabs.Navigator>
    )
}

export default AfterLoginPage;