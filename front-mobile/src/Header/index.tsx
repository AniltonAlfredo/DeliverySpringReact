
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default function Header() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  }

  return (
    <>
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.text}>ATMA DELIVERY</Text>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    color: '#FFF',
    marginLeft: 15
  },
});