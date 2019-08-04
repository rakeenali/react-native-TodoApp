import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 10,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 3
  },
  textItem: {
    fontSize: 20,
    fontWeight: "300"
  }
});

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>Todo Application</Text>
    </View>
  );
};
