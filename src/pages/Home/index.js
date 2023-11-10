import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../componentes/Header'
import Balance from '../../componentes/Balance';
import Movements from '../../componentes/Movements';
import Actions from '../../componentes/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '265,90',
    date: '22/10/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Antônio',
    value: '350,00',
    date: '24/10/2023',
    type: 1
  },
  {
    id: 3,
    label: 'Pix Carla',
    value: '100,00',
    date: '27/10/2023',
    type: 1
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Geovana"/>
      <Balance saldo="4.548,90" gastos="-1.349,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList style={styles.list}
      data={list}
      keyExtractor={(item)=> String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Movements data={item}/> } />

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginLeft: 14,
    marginRight: 14,
  }
});
