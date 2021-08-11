import React from "react";
import { FlatList, Platform, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem.component";
import { addToCart } from "../../store/actions/cart.actions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../../components/UI/HeaderButton";
import colors from "../../constants/colors";

const ProductOverviewScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.availableProducts);
  const isAndroid = Platform.OS === "android";

  const selectItemHandler = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  React.useLayoutEffect(() => {
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

export default ProductOverviewScreen;
