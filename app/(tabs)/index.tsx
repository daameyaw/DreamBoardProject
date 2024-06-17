import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Pin from "@/components/Pin";
import MasonryList from "@/components/MasonryList";
import { useEffect, useState } from "react";
import pins from "@/assets/data/pins";

export default function TabOneScreen() {
  const [pins, setPins] = useState([]);

  return <MasonryList pins={pins} />;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
