import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export const ProductCard = ({ data }) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth / 2 - 20;

  const handleClick = () => {
    navigation.navigate("ProductScreen", { id: data?._id });
  };
  return (
    <TouchableOpacity
      onPress={handleClick}
      className="p-4 rounded-xl bg-white flex items-center justify-center m-1"
      style={{ width: cardWidth }}
    >
      <Image
        source={{ uri: data?.mainImage?.asset?.url }}
        resizeMode="contain"
        className="h-32 w-52"
      />
      <View className="flex items-start justify-start space-y-1 w-full mt-2">
        <Text className="text-[#555] text-base font-semibold">
          {data?.productTitle}
        </Text>
        <Text className="text-[#777] text-base font-semibold">
          {data?.description}
        </Text>
        <View className="flex justify-between items-center flex-row w-full space-y-1">
          <Text className="text-[#000] text-base font-extrabold">
            {data?.price.toLocaleString()} Tsh
          </Text>
          <TouchableOpacity className="bg-black p-1.5 rounded-full flex items-center justify-center">
            <AntDesign name="heart" size={20} color="#fbfbfb" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
