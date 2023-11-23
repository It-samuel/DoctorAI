import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import Onbarding from './Screens/Onboarding';
import Navigators from './Navigation/Navigators';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigators/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
