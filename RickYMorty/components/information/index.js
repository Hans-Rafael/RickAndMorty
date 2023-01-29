import React from "react"
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./informationStyle"


export default function Information({ name, description,gender,type,origin,location,estado }) {
    return (
      <View style={styles.container}>
       {/*  <Image 
          style={styles.image}
          source={{uri: image}}
        /> */}
        <Text style={styles.description}>name: {name}</Text>
        <Text style={styles.title}>species:{description}</Text>
        <Text style={styles.title}>gender: {gender}</Text>
        <Text style={styles.title}>type: {type?type: "---"}</Text>
        <Text style={styles.title}>origin: {origin}</Text>
        <Text style={styles.title}>location: {location}</Text>
        <Text style={styles.title}>status: {estado}</Text>
      </View>
    )}