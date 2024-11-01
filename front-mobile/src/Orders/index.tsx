import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';
import OrderCard from '../OrderCard';
import { useEffect, useState } from 'react';
import { fetchOrders } from '../api';
import { Order } from '../type';
import Header from '../Header';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert("Houve um problema ao buscar os pedidos!"))
      .finally(() => setIsLoading(false));
  }, [])

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>

        {isLoading ? (
          <Text>Buscando pedidos ...</Text>
        ) : (
          orders.map(order => (
            <TouchableWithoutFeedback
              key={order.id}
              onPress={() => handleOnPress(order)}>
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          )
          )
        )

        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: '5%',
    paddingLeft: '5%'
  },
});
