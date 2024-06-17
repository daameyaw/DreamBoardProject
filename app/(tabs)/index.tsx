import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Pin from "@/components/Pin";
import MasonryList from "@/components/MasonryList";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [pins, setPins] = useState([]);
  async function fetchData() {
    const { data, error } = await supabase.from("pins").select("*");
    if (error) {
      console.log(error);
    } else {
      console.log(
        // data.map((pin) => ({
        //   id: pin.id,
        //   title: pin.title,
        //   image: pin.image,
        // }))
        setPins(data)
      );
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
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
