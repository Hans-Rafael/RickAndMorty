import React from "react"
import { Text, View, Image } from "react-native";
import styles from "./comicStyle.js"


export default function Comics({ image, name }) {
    return (
      <View style={styles.container}>
        
        <Text style={styles.title} >{name}</Text>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        
      </View>
    )}