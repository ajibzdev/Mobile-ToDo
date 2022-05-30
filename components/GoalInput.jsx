import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import React from "react";

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  enteredGoalText,
  visible,
  onCancel,
}) => {
  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/img/goal.jpg")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Enter your goal"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandler}
              title="ADD GOAL"
              color={"#b180f0"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    marginBottom: 50,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },

  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },

  button: {
    width: 150,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 500,
  },
});
