import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem.component";

// image
// title
// price
// onViewDetail

const ProductOverviewScreen = ({ navigation, route }) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            navigation.navigate("ProductDetail", { product: itemData.item });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductOverviewScreen;
