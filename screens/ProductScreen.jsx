import { View, Text } from "react-native";
import React from "react";

const ProductScreen = ({
  route: {
    params: { id },
  },
}) => {
  console.log(id);
  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;
