import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, Image } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import DummyApi from "../../services/DummyApi";

const productsData = [
  { id: "1", name: "Produto 1", price: 19.99 },
  { id: "2", name: "Produto 2", price: 29.99 },
  { id: "3", name: "Produto 3", price: 39.99 },
  { id: "4", name: "Produto 4", price: 49.99 },
  { id: "4", name: "Produto 4", price: 49.99 },
  { id: "4", name: "Produto 4", price: 49.99 },
  { id: "4", name: "Produto 4", price: 49.99 },
  { id: "4", name: "Produto 4", price: 49.99 },
  { id: "4", name: "Produto 4", price: 49.99 },
  { id: "4", name: "Produto 4", price: 49.99 },
  { id: "4", name: "Produto 4", price: 49.99 },
  { id: "4", name: "Produto 4", price: 49.99 },

  // Adicione mais produtos conforme necessário
];

export default function Store() {
  const [api, setApi] = useState([])

  useEffect(() => {
    DummyApi.get('/products').then(response => {
      setApi(response.data.products)
    })
  }, [])

  console.log(api)

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Card contentStyle={{width: 170}}>
        <Card.Cover resizeMode="contain" source={{ uri: item.thumbnail }} />
      </Card>
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>R${item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(item.id)}
      >
        <Text style={styles.addToCartButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* StatusBar para ajustar a barra de status */}
      <StatusBar backgroundColor="#8A05BE" barStyle="light-content" />

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Nubank Store</Text>

        {/* Carrinho no lado direito abaixo do título */}
        <View style={styles.cartContainer}>
          <Icon name="shopping-cart" size={24} color="white" style={styles.cartIcon} />
          <Text style={styles.cartSummary}>
            Carrinho: {cart.length}
          </Text>
        </View>
      </View>

      <FlatList
        data={api}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        contentContainerStyle={styles.productList}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A05BE",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    paddingBottom: 10,
    paddingTop: StatusBar.currentHeight + 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  productList: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  productItem: {
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "45%",
    margin: "2.5%",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#8A05BE",
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
    color: "#8A05BE",
  },
  addToCartButton: {
    backgroundColor: "#8A05BE",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 16,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  cartIcon: {
    marginRight: 10,
  },
  cartSummary: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});