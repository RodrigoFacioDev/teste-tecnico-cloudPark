import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserConfig() {
  const handleLogout = () => {
    // TODO: implementar lógica de logout
    alert("Sair clicado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#e74c3c",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
