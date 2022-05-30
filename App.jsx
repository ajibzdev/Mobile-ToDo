import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endGoalHandler = () => {
    setModalIsVisible(false);
  };

  const goalInputHandler = (enteredValue) => {
    setEnteredGoalText(enteredValue);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    endGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <StatusBar>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal!"
          // color={"#5e0acc"}
          color={"#fff"}
          onPress={startAddGoalHandler}
        />

        <GoalInput
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          enteredGoalText={enteredGoalText}
          visible={modalIsVisible}
          onCancel={endGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                id={itemData.item.id}
                deleteGoalHandler={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </StatusBar>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
