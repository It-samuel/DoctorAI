import { StyleSheet, Text, View,Image, TouchableOpacity,Linking, Modal } from 'react-native'
import React, {useState} from 'react'
import { WebView } from 'react-native-webview';


const url = 'healthcare-bot-wssuuaxcz4ai4.azurewebsites.net/';
export default function Onboarding() {
// functions for rendering the doctors interaction screen

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  
  const MyWebComponent = () => {
    

    // Open the web link using the Linking module
    Linking.openURL(url).then
      .catch((err) => console.error('An error occurred', err));
  };

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
        alignItems:'center',justifyContent:'center', borderRadius:14,alignSelf:'center', marginTop:20}} onPress={openModal}>
            <Text style={{fontWeight:'bold', color:'white', fontSize:20}}> Start Chat</Text>
        </TouchableOpacity>
        <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        
        <TouchableOpacity onPress={closeModal}>
        <View style={{padding:10, flexDirection:'row'}}>
        <Image
          source={require('../Images/arrow.png')}
          style={{width:20, height:20, }}
          resizeMode='contain'
          />
          <Text style={{marginLeft:5}}>Back</Text>
        </View>
        </TouchableOpacity>

          {/* Content inside WebView */}
          <WebView source={{ uri: url}} />
        
      </Modal>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})