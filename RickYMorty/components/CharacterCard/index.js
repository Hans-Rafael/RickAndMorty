import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./CharacterStyle";
import { useNavigation } from "@react-navigation/native";

export default function CharacterCard({ image, name,id }) {

  const navigation = useNavigation();
  return (
    <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('Detail',{id:id})}>
      <Image style={styles.image} source={image} />
      <Text style={styles.font}> {name} </Text>
      
    </TouchableOpacity>
  );
}
