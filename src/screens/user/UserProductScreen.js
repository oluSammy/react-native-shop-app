import React from "react";
import { Button, StyleSheet, FlatList, Platform } from "react-native";
import ProductItem from "../../components/shop/ProductItem.component";
import { useSelector } from "react-redux";
import CustomHeaderBtn from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import colors from "../../constants/colors";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions/products.actions";

const UserProductScreen = ({ navigation }) => {
  const userProduct = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
  const isAndroid = Platform.OS === "android";

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="menu"
            iconName="ios-menu-outline"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
          <Item
            title="Add"
            iconName={isAndroid ? "md-create" : "ios-create"}
            onPress={() => navigation.navigate("EditProduct")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      data={userProduct}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            navigation.navigate("EditProduct", { product: itemData.item });
          }}
        >
          <Button
            color={colors.primary}
            title="Edit"
            onPress={() => {
              navigation.navigate("EditProduct", { product: itemData.item });
            }}
          />
          <Button
            color={colors.primary}
            title="Delete"
            onPress={() => {
              dispatch(deleteProduct(itemData.item.id));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default UserProductScreen;
