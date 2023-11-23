import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function SplashScreen({navigation}) {
    setTimeout(() =>{
        navigation.navigate('Onboarding')
    }, 4000)
      return (
        <View style={styles.container}>
          <Image
      style={{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flex:1
      }}
      source={
        require('../Images/logo.png')}
    />
    <View style={{position:'absolute',alignSelf:'center',justifyContent:'center', marginTop:330}}>
        <Text style={{alignSelf:'center', color:'white', fontSize:30,fontWeight:'bold'}}>Doctor AI</Text>
        <Text style={{alignSelf:'center',color:'white', fontSize:8,alignSelf:'flex-end'}}>...getting the help you need </Text>
    </View>
    
        </View>
        
        // include at least width and height
      )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height:'100%',
        width:'100%'
    }
})