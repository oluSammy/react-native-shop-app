import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import colors from "../../constants/colors";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: product.title,
    });
  }, []);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.action}>
        <Button
          color={colors.primary}
          style={styles.addBtn}
          title="Add to cart"
          onPress={() => {}}
        />
      </View>
      <Text style={styles.price}>{product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  addBtn: {},
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
  action: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default ProductDetailScreen;
