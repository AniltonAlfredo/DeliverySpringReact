
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Header';
import { Order } from '../type';

type Props = {
    route:{
      params:{
        order: Order;
      }
    }
  }

export default function OrderDetails({route}:Props) {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate("Orders");
    }


    return (
        <>
        <Header/>
            <View style={styles.container}>
                <Text style={styles.text}>Detalhes do pedido</Text>
            </View>
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