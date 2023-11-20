import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface House extends HouseDto {
  width: number;
  height: number;
  length: number;
  volume: number;
  area: number;
}

interface HouseDto {
  width: number;
  height: number;
  length: number;
}
export default function TabTwoScreen() {
  const [data, setData] = useState<House[]>([]);
  useEffect(() => {
    axios
      .get<House[]>("http://localhost:5113/api/House")
      .then((response: AxiosResponse<House[]>) => {
        setData(response.data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, []);

  const handleButtonClick = () => {
    const house: HouseDto = {
      width: Math.floor(Math.random() * 10) + 1,
      height: Math.floor(Math.random() * 10) + 1,
      length: Math.floor(Math.random() * 10) + 1,
    };

    axios
      .post("http://localhost:5113/api/House/", { house })
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Houses</Text>
      {data.map((house, index) => (
        <Text
          key={index}
        >{`width: ${house.width} length:${house.length} height:${house.height}`}</Text>
      ))}
      <button onClick={handleButtonClick}>Generate Random Number</button>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
