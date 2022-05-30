import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ itemData, deleteGoalHandler, id }) => {
  const deleteHandler = () => {
    deleteGoalHandler(id);
  };

  return (
    <View>
      <Pressable
        onPress={deleteHandler}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 12,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
