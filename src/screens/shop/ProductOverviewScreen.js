import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  FlatList,
  Platform,
  Button,
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem.component";
import { addToCart } from "../../store/actions/cart.actions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../../components/UI/HeaderButton";
import colors from "../../constants/colors";
import { fetchProducts } from "../../store/actions/products.actions";

const ProductOverviewScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.availableProducts);
  const isAndroid = Platform.OS === "android";
  const [isLoading, setIsLoading] = useState(false);

  const selectItemHandler = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  const loadProducts = useCallback(() => {
    setIsLoading(true);
    dispatch(fetchProducts());
    setIsLoading(false);
  }, [dispatch, setIsLoading]);

  useEffect(() => {
    loadProducts();
  }, [dispatch]);

  useEffect(() => {
    const willFocus = navigation.addListener("willFocus", loadProducts);

    return () => {
      willFocus.remove();
    };
  }, [loadProducts, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="save"
            iconName={isAndroid ? "md-cart" : "ios-cart"}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="menu"
            iconName="ios-menu-outline"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.loader}>
        <Text>Products unavailable at the moment</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => selectItemHandler(itemData.item)}
        >
          <Button
            color={colors.primary}
            title="View Details"
            onPress={() => selectItemHandler(itemData.item)}
          />
          <Button
            color={colors.primary}
            title="To Cart"
            onPress={() => {
              dispatch(addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductOverviewScreen;
