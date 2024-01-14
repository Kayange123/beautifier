import { View, Text, Image } from "react-native";
import React from "react";
import { screenTwoImage } from "../../assets";

export default () => {
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={screenTwoImage}
        className="w-full h-[65%]"
        resizeMode="cover"
      />
      <View className="flex items-center justify-center px-6 space-y-4 bg-white -mt-10 w-full rounded-t-3xl pt-4">
        <Text className="text-xl tracking-wider text-[#555]">
          Find your beauty products
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Beauty begins inside you, The moment you decide to be the real you!
        </Text>
      </View>
    </View>
  );
};
