import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtn from "../../components/UI/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";

const OrderScreen = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.orders);

  console.log(orders);

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
    <>
      <FlatList
        data={orders}
        renderItem={(itemData) => (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
          />
        )}
      />
      {/* <Text>Hello world</Text> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default OrderScreen;
