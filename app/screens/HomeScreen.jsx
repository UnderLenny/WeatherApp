import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import MainWeather from "../components/MainWeather";
import { fetchWeather } from "../services/api";
import Header from "../components/Header";
import WeatherInfo from "../components/WeatherInfo";

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    ArialRoundedMTBold: require("../../assets/fonts/arialroundedmtbold.ttf"),
  });

  const getWeather = async () => {
    setIsLoading(true);
    try {
      const weatherData = await fetchWeather("Kemerovo");
      setData(weatherData);
    } catch (err) {
      console.error(err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (!fontsLoaded || isLoading || !data) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={"#fff"} />
        <Text
          style={{
            marginTop: 20,
            color: "#fff",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          Загрузка...
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header currentCity={data?.location?.name} />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getWeather}
            colors={["#fff"]}
            tintColor="#fff"
          />
        }
        data={[data]}
        renderItem={({ item }) => (
          <View>
            <MainWeather
              temperature={item.current.temp_c}
              conditions={item.current.condition.text}
            />
            <WeatherInfo
              precipitation={item.current.precip_in}
              humidity={item.current.humidity}
              windSpeed={item.current.wind_kph}
            />
          </View>
        )}
        keyExtractor={(item) => item.location.name}
      />
    </View>
  );
};

export default HomeScreen;
