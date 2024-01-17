import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";

const ProductScreen = ({
  route: {
    params: { id },
  },
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const products = useSelector((state) => state?.feeds?.feeds);

  const screenHeight = Math.round(Dimensions.get("window").height);

  useEffect(() => {
    if (products) {
      setData(products?.filter((product) => product._id === id)[0]);
    }
    setIsLoading(false);
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "position" : "height"}
      className="flex-1 items-start justify-start bg-[#EBEAEF] space-y-4"
    >
      {isLoading ? (
        <>
          <View className="flex-1 h-80 items-center justify-center">
            <ActivityIndicator size="large" color="teal" />
          </View>
        </>
      ) : (
        <>
          <SafeAreaView className="w-full h-full">
            <View className="flex flex-row items-center justify-between px-4 py-2">
              <TouchableOpacity>
                <Entypo name="chevron-left" size={32} color="#555" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="shopping-cart" size={32} color={"#555"} />
              </TouchableOpacity>
            </View>
            <View
              className="w-full flex items-center justify-center relative bg-gray-300"
              style={{ height: screenHeight / 1.8 }}
            >
              <Image
                source={{ uri: data?.bgImage?.asset?.url }}
                className="w-full h-full opacity-30"
                resizeMode="cover"
              />
              <View
                className=" w-full h-full absolute top-0 left-0 flex items-center justify-center"
                style={{ height: screenHeight / 2.2 }}
              >
                <Image
                  source={{ uri: data?.mainImage?.asset?.url }}
                  className="w-80 h-80"
                  resizeMode="contain"
                />
              </View>
              <View className="w-full flex-row flex items-center justify-evenly absolute bottom-8">
                {data?.categories && data?.categories?.length > 0 ? (
                  data?.categories?.map((category) => (
                    <View
                      key={category?._id}
                      className="p-2 w-24 rounded-xl bg-white flex items-center justify-center space-y-2"
                    >
                      <Image
                        resizeMode="contain"
                        className="w-10 h-10 opacity-70"
                        source={{ uri: category?.mainImage?.asset?.url }}
                      />
                      <Text className="font-semibold text-[#555]">
                        {category.title}
                      </Text>
                    </View>
                  ))
                ) : (
                  <View>
                    <Text>No Available Categories</Text>
                  </View>
                )}
              </View>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              className="w-full flex-1 h-full bg-white rounded-t-[40] py-6 px-8 space-y-4 -mt-6"
            >
              <View className="flex items-center flex-row  w-full mt-2">
                <View className="flex-1 line-clamp-1">
                  <Text className="text-[#555] text-base font-semibold">
                    {data?.productTitle}
                  </Text>
                  <Text className="text-[#777] text-base font-semibold">
                    {data?.description}
                  </Text>
                </View>
                <TouchableOpacity className="bg-black p-1.5 rounded-full flex items-center justify-center">
                  <AntDesign name="heart" size={20} color="#fbfbfb" />
                </TouchableOpacity>
              </View>
              <View className="flex-row w-full items-center justify-between">
                <Text className="text-[#000] text-base font-extrabold">
                  {data?.price.toLocaleString()} Tsh
                </Text>
                <View className=" flex-row items-center justify-center space-x-8 rounded-xl border border-gray-200 px-4 py-1">
                  <TouchableOpacity>
                    <Text className="text-xl font-bold text-black">-</Text>
                  </TouchableOpacity>
                  <TextInput value="1" />
                  <TouchableOpacity>
                    <Text className="text-xl font-bold text-black">+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default ProductScreen;
