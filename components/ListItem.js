import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  Dimensions
} from "react-native";

const { width: deviceWidth } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 80
  },
  listItem: {
    minHeight: 30,
    width: deviceWidth,
    backgroundColor: "#ccc",
    marginBottom: 10
  },
  item: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 2,
    paddingBottom: 2
  },
  completed: {
    color: "rgba(255,0,0,0.7)",
    textDecorationLine: "line-through"
  }
});

export default props => {
  const setCompleted = todo => {
    props.todoCompleted(todo.id);
  };

  const renderList = data => {
    const { item: todo } = data;

    return (
      <TouchableHighlight
        style={styles.listItem}
        underlayColor="#eee"
        onPress={() => setCompleted(todo)}
      >
        <Text style={[styles.item, todo.completed && styles.completed]}>
          {todo.name}
        </Text>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.todos}
        renderItem={renderList}
        keyExtractor={item => item.id}
        extraData={props.todo}
      />
    </View>
  );
};
