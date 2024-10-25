import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import Home from './src/Home';
// import { useFonts, OpenSans_400Regular,OpenSans_700Regular } from '@expo-google-fonts/open-sans';


export default function App() {
  // let[fontsLoaded] = useFonts({
  //   OpenSans_400Regular,
  //   OpenSans_700Regular
  // });
  // if(!fontsLoaded){
  //   // return <AppLoading/>
  // }

  return (
    <View style={styles.container}>
      <Header/>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
