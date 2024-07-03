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
import TodayInfo from "../components/TodayInfo";

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    ArialRoundedMTBold: require("../../assets/fonts/arialroundedmtbold.ttf"),
  });

  const getWeather = async (time) => {
    setIsLoading(true);
    try {
      const weatherData = await fetchWeather("Kemerovo", 6);
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
      <Header currentCity={data?.current?.location?.name || "Unknown"} />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => getWeather(time)}
            colors={["#fff"]}
            tintColor="#fff"
          />
        }
        data={[data]}
        renderItem={({ item }) => (
          <View>
            <MainWeather
              temperature={item.current?.current?.temp_c || "N/A"}
              conditions={item.current?.current?.condition?.text || "N/A"}
            />
            <WeatherInfo
              precipitation={item.current?.current?.cloud || "N/A"}
              humidity={item.current?.current?.humidity || "N/A"}
              windSpeed={item.current?.current?.wind_kph || "N/A"}
            />
            <TodayInfo
              currentData={
                item.forecast?.forecast?.forecastday[0]?.date || "N/A"
              }
              weatherInSixAm={
                item?.forecast?.forecast?.forecastday[0]?.hour[0]?.temp_c
              }
            />
          </View>
        )}
        keyExtractor={(item) => item.current?.location?.name}
      />
    </View>
  );
};

export default HomeScreen;
