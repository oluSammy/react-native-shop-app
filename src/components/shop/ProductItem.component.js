import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import colors from "../../constants/colors";

const ProductItem = ({ image, title, price, onSelect, children }) => {
  const isAndroid = Platform.OS === "android" && Platform.Version >= 21;
  const TouchComponent = isAndroid ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchComponent onPress={onSelect} useForeGround>
          <View>
            <View style={styles.imgContainer}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>{price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              {children}
            </View>
          </View>
        </TouchComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "#000000",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    height: 300,
    margin: 20,
  },
  touchable: { overflow: "hidden", borderRadius: 10 },
  image: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  textBox: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
});

export default ProductItem;
