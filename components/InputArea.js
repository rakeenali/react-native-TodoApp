import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 10,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 5
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 30,
    paddingLeft: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto"
  },
  error: {
    backgroundColor: "rgba(255, 0, 0, 0.534)"
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.8)",
    height: 50,
    width: 50,
    position: "absolute",
    top: 8,
    right: 31,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  buttonError: {
    backgroundColor: "rgb(255, 0, 0)"
  }
});

export default ({ createTodo }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const submitTodo = () => {
    if (text.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setText("");
    createTodo(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={`${error ? "Provide a valid todo" : "Your todo"}`}
        style={[styles.input, error && styles.error]}
        value={text}
        onChangeText={n => setText(n)}
      />
      <TouchableHighlight
        style={[styles.button, error && styles.buttonError]}
        underlayColor="rgba(0,0,0,0.7)"
        onPress={submitTodo}
      >
        <Text style={{ color: "#fff" }}>&rarr;</Text>
      </TouchableHighlight>
    </View>
  );
};
