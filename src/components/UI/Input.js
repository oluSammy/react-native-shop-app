import React,  from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  const { label, errorText } = props;

  const textChangeHandler = text => {

  }

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={formState.inputValues.title}
        onChangeText={textChangeHandler}
        // autoCapitalize="sentences"
        // autoCorrect={false}
        // returnKeyType="next"
      />
      {!formState.inputValidities.title && (
        <Text>{errorText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default Input;
