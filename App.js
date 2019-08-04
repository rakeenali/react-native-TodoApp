import React from "react";
import { StyleSheet, View } from "react-native";

import InputArea from "./components/InputArea";
import ListItem from "./components/ListItem";
import Header from "./components/Header";

import CreateTodo from "./CreateTodo";

export default function App() {
  const [todos, setTodos] = React.useState([]);

  const createTodo = newTodo => {
    const todo = new CreateTodo(newTodo);
    setTodos(n => [todo.getTodo, ...n]);
  };

  const todoCompleted = (todoId = "") => {
    if (todoId.trim() !== "") {
      const newTodos = todos.map(todo => {
        if (todo.id.trim() === todoId.trim()) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return { ...todo };
      });
      setTodos(newTodos);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <InputArea createTodo={createTodo} />
      <ListItem todos={todos} todoCompleted={todoCompleted} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
