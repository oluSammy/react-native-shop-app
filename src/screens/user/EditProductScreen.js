import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../../components/UI/HeaderButton";
import { useDispatch } from "react-redux";
import {
  updateProduct,
  createProduct,
} from "../../store/actions/products.actions";

const EditProductScreen = ({ route, navigation }) => {
  const isEditing = Boolean(route.params);
  const dispatch = useDispatch();

  const isAndroid = Platform.OS === "android";
  const [title, setTitle] = useState(
    isEditing ? route.params.product.title : ""
  );
  const [imageUrl, setImageUrl] = useState(
    isEditing ? route.params.product.imageUrl : ""
  );
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(
    isEditing ? route.params.product.description : ""
  );

  const submitHandler = () => {
    isEditing
      ? dispatch(
          updateProduct(route.params.product.id, title, description, imageUrl)
        )
      : dispatch(createProduct(title, description, imageUrl, +price));
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="Save"
            iconName={isAndroid ? "md-checkmark" : "ios-checkmark"}
            onPress={submitHandler}
          />
        </HeaderButtons>
      ),
      title: route.params ? "Edit Product" : "Add Product",
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => {
              setTitle(text);
            }}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Url</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => {
              setImageUrl(text);
            }}
          />
        </View>
        {!isEditing && (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => {
                setPrice(text);
              }}
            />
          </View>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => {
              setDescription(text);
            }}
          />
        </View>
      </View>
      <Button title="done" onPress={submitHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
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

export default EditProductScreen;
