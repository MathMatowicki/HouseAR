import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

export default function TabOneScreen() {
  const [data, setData] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    axios
      .get<WeatherForecast[]>("http://localhost:5113/WeatherForecast")
      .then((response: AxiosResponse<WeatherForecast[]>) => {
        setData(response.data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Forecast:</Text>
      {data.map((forecast, index) => (
        <Text key={index}>{`${forecast.date}: ${forecast.summary}`}</Text>
      ))}
      <Text>{data.every((d) => d.date)}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
