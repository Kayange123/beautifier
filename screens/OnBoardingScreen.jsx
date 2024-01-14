import { View } from "react-native";
import React, { useEffect } from "react";
import Swiper from "react-native-swiper";
import { ScreenOne, ScreenThree, ScreenTwo } from "../components/common";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoardingScreen = () => {
  useEffect(() => {
    const checkAsyncStorage = async () => {
      const value = await AsyncStorage.getItem("@boarding_complete");
      if (value !== null && value === "true") {
        navigation.replace("Home");
      }
    };
    checkAsyncStorage();
  }, []);
  const navigation = useNavigation();
  const handleOnBoardEnd = async (e) => {
    if (e == 2) {
      await AsyncStorage.setItem("@boarding_complete", "true");
    }
  };
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Swiper
        loop={false}
        activeDotStyle={{ width: 24 }}
        onIndexChanged={handleOnBoardEnd}
      >
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  );
};

export default OnBoardingScreen;
