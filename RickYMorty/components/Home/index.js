import React, { useState, useEffect } from "react";
import { ActivityIndicator, RefreshControl, SafeAreaView } from "react-native";
import { Text, View, FlatList } from "react-native";
import CharacterCard from "../CharacterCard/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Searchbar } from "react-native-paper";
//import apiParams from '../config.js';
//https://newsapi.org/v2/top-headlines?country=us&apiKey=5741fc7259f347b58b4300c47466eacb
import axios from "axios";
import { ApiAllCharacters, API } from "@env";

const Tab = createBottomTabNavigator();

export default function Home() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page,setPage] = useState(2)

  useEffect(() => {
    axios
      .get(`${ApiAllCharacters}`)
      .then((response) => setData(response.data.results))
      .then((res) => {
        setRefreshing(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function allCharacters() {
    axios
      .get(`${ApiAllCharacters}`)
      .then((response) => setData(response.data.results))
      .then((res) => {
        setRefreshing(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function NextCharacters(){
    axios
      .get(`${ApiAllCharacters}?page=${page}`)
      .then((response) => setData([...data,...response.data.results]))
      .then((res) => {
        setRefreshing(false);
      })
      .then(setPage(page+1))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)); 
  }

  function searchCharacter() {
    if (search) {
      setLoading(true);
      axios
        .get(`${ApiAllCharacters}?name=${search}`)
        .then((response) => setData(response.data.results))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }  
  }

  data.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/*  <CharacterCard image={require("../../assets/Groot.png")} name="Groot" />
        <CharacterCard image={require("../../assets/Thor.png")} name="Thor" />
       */}
      <Searchbar
        placeholder="Search character name..."
        onChangeText={(value) => setSearch(value)}
        value={search}
        onIconPress={searchCharacter}
        onSubmitEditing={searchCharacter}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={allCharacters} />
          }
          data={data}
          keyExtractor={({ id }) => id.toString()} //.toString()
          renderItem={({ item }) => (
            <CharacterCard
              id={item.id}
              image={{ uri: item?.image }}
              name={item.name}
            />
          )}
          onEndReachedThreshold={0.2}
          onEndReached={NextCharacters}
        />
      )}
    </View>
  );
}
