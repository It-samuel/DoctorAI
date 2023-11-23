import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
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
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})