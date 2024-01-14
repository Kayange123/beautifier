import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { screenThreeImage } from "../assets";
import { getProducts } from "../util/database/query";
import { useDispatch, useSelector } from "react-redux";
import { Feeds } from "../components/shared/Feeds";

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filtered, setFiltered] = useState(null);
  const dispatch = useDispatch();

  const products = useSelector((state) => state?.feeds?.feeds);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const products = await getProducts();
        dispatch({ type: "SET_FEEDS", payload: products });
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (text) => {
    setSearchValue(text);
    const filtered = products?.filter((product) =>
      product?.productTitle?.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filtered);
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-[#EBEAEF] pt-5">
      <View className="w-full flex-row items-center justify-between px-4 py-2">
        <MaterialIcons name="chevron-left" size={32} color="#555" />
        <Image
          source={screenThreeImage}
          className="h-12 w-12 rounded-xl"
          resizeMode="cover"
        />
      </View>
      <View className="flex-row items-center justify-between px-4 py-2 w-full space-x-6">
        <View className="bg-white px-4 py-2 rounded-xl items-center justify-center flex-1 flex-row space-x-2">
          <MaterialIcons name="search" size={26} color="#7f7f7f" />
          <TextInput
            className="text-base font-semibold text-[#555] flex-1 py-1"
            placeholderTextColor="#555"
            placeholder="Search here..."
            value={searchValue}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
          <FontAwesome name="filter" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1 w-full h-full">
        {isLoading ? (
          <View className="flex-1 items-center justify-center h-80">
            <ActivityIndicator size="large" color="teal" />
          </View>
        ) : (
          <Feeds
            products={filtered || filtered?.length > 0 ? filtered : products}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
