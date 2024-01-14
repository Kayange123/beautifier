import { View, Text, Image } from "react-native";
import React from "react";
import { brand, screeOneImage } from "../../assets";

export default () => {
  return (
    <View className="flex-1 relative items-center justify-center">
      <Image
        source={screeOneImage}
        resizeMode="cover"
        className="h-full w-full"
      />
      <View className="w-52 h-auto flex p-2 items-center justify-center absolute left-4 top-36 ">
        <Image source={brand} resizeMode="contain" className="h-32 w-32" />
        <Text className="text-xl font-semibold text-[#555]">
          Get Beautified Now
        </Text>
      </View>
    </View>
  );
};
