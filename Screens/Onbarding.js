import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Onbarding() {
  return (
    <View style={styles.container}>
      <View>
      <View style={{flexDirection:'row', marginTop:70,alignContent:'center',justifyContent:'center'}}>
        <Text style={{color:'#3b82f6', fontSize:30,fontWeight:"bold"}}>Doctor </Text>
        <Text style={{ fontSize:30,fontWeight:"bold"}}>Ai</Text>
      </View>
      <Text style={{alignSelf:'center',fontSize:8,color:'#3b82f6',marginLeft:25}}>...getting the help you need</Text>
      </View>
      <View style={{alignSelf:'center', marginTop:35}}>
      <Image
      style={{
        width: 450,
        height: 100,
        resizeMode: 'contain',
        
      }}
      source={
        require('../Images/Title.png')}
    />
      </View>
      
      <View style={{alignSelf:'center', marginTop:35}}>
      <Image
      style={{
        width: 400,
        height: 300,
        resizeMode: 'contain',
        
      }}
      source={
        require('../Images/Doc.png')}
    />
      </View>
      <View>
        <TouchableOpacity style={{height:50, width:250, marginHorizontal:15,backgroundColor:'#3b82f6', 
        alignItems:'center',justifyContent:'center', borderRadius:14,alignSelf:'center', marginTop:20}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:20}}> Start Chat</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    continue:{
        flex:1,
        backgroundColor:'white'
    }
})