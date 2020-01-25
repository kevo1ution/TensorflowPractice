import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js to start with ");
  const [pickedItem, setPickedItem] = useState("item1");

  return (
    <View style={styles.container}>
      <Text>{outputText} helelele</Text>
      <Button
        title="Change Text"
        onPress={() => setOutputText("ehllelelelelelelele text!")}
      />
      <Picker
        style={{ height: 50, width: 100 }}
        selectedValue={pickedItem}
        onValueChange={(itemValue, itemIndex) => {
          setPickedItem(itemValue);
        }}
        mode="dropdown"
      >
        <Picker.Item label="1" value="item1">test</Picker.Item>
        <Picker.Item label="2" value="item2" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
