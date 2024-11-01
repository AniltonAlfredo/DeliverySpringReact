import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import OrderCard from '../OrderCard';


export default function Orders() {
  return (
    <ScrollView style={styles.container}>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
    </ScrollView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: '5%',
    paddingLeft: '5%'
  },
});
