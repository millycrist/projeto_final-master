import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function PixArea() {
  const [email, setEmail] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const handleTransaction = () => {
    if (email && transactionAmount) {
      // Lógica para realizar a transação
      console.log(`Transação realizada: ${transactionAmount} para ${email}`);
      // Limpar os campos após a transação
      setEmail("");
      setTransactionAmount("");
      // Ativar o estado de sucesso para exibir a mensagem
      setTransactionSuccess(true);
      // Resetar o estado de sucesso após alguns segundos
      setTimeout(() => {
        setTransactionSuccess(false);
      }, 3000); // Tempo em milissegundos para manter a mensagem de sucesso visível
    } else {
      console.warn("Por favor, preencha todos os campos corretamente.");
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleAmountChange = (text) => {
    setTransactionAmount(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pix Nubank</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a chave-pix"
        value={email}
        onChangeText={handleEmailChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={transactionAmount}
        onChangeText={handleAmountChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleTransaction}>
        <Text style={styles.buttonText}>Realizar Transação</Text>
      </TouchableOpacity>

      {transactionSuccess && (
        <Text style={styles.successMessage}>Transação realizada com sucesso!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A05BE",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: "white",
    width: "80%",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
    marginTop: 10,
  },
  buttonText: {
    color: "#8A05BE",
    fontSize: 16,
  },
  successMessage: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
});