import React from "react";
import { FlatList, Text, View } from "react-native";
import { ProductCard } from "./ProductCard";

export const Feeds = ({ products }) => {
  return (
    <View className="flex-row flex-wrap items-center justify-center">
      {products?.length > 0 ? (
        products?.map((product) => (
          <ProductCard data={product} key={product._id} />
        ))
      ) : (
        <View className="w-full h-64 flex items-center justify-center">
          <Text>No Available products</Text>
        </View>
      )}
    </View>
  );
};
