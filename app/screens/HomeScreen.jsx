import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import MainWeather from "../components/MainWeather";
import { fetchWeather } from "../services/api";

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [fontsLoaded] = useFonts({
    ArialRoundedMTBold: require("../../assets/fonts/arialroundedmtbold.ttf"),
  });

  useEffect(() => {
    const getWeather = async () => {
      try {
        const weatherData = await fetchWeather("Moscow");
        setData(weatherData);
      } catch (err) {
        console.error(err);
      }
    };

    getWeather();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <MainWeather temperature={data?.current?.temp_c} />
    </View>
  );
};

export default HomeScreen;
