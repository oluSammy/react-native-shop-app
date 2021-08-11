import React from "react";
import { Button, StyleSheet, FlatList } from "react-native";
import ProductItem from "../../components/shop/ProductItem.component";
import { useSelector } from "react-redux";
import CustomHeaderBtn from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import colors from "../../constants/colors";

const UserProductScreen = ({ navigation }) => {
  const userProduct = useSelector((state) => state.products.userProducts);

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
          onSelect={() => {}}
        >
          <Button color={colors.primary} title="Edit" onPress={() => {}} />
          <Button color={colors.primary} title="Delete" onPress={() => {}} />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default UserProductScreen;
