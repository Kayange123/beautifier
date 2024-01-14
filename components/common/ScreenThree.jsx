import { View, Text, Image } from "react-native";
import React from "react";
import { screenThreeImage } from "../../assets";

export default () => {
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={screenThreeImage}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
};
