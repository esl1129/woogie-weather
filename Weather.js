import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "황사",
    subtitle: "외부 활동을 자제해 주세요",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#373B44", "#4286f4"],
    title: "천둥 번개",
    subtitle: "Watch Out!!",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#0082c8", "#667db6"],
    title: "이슬 비",
    subtitle: "외출 시 우산을 챙기세요",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#1e3c72", "#2a5298"],
    title: "비",
    subtitle: "빗물에 바지가 젖을지도...?",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "눈",
    subtitle: "You'll feel like you're in the frozen kingdom",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F37335", "#FDC830"],
    title: "맑음",
    subtitle: "하늘을 보세용용용요요요요요용요요요용",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "흐림",
    subtitle: "비가 올 것만 같아...",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfcontainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    fontWeight: "300",
    fontSize: 44,
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 24,
    color: "white",
  },
  textContainer: {
    alignItems: "flex-start",
  },
});
