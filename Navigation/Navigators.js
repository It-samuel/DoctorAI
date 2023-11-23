import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import Onboarding from '../Screens/Onboarding';



const Stack = createNativeStackNavigator();

export default function Navigators() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />

<Stack.Screen 
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        headerShown: false
                    }}
                />
    </Stack.Navigator>

   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})