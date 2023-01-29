import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Information from "../information/index";
import Comics from "../Comics/index";
import axios from "axios";
import { ApiAllCharacters } from "@env";

const Tab = createBottomTabNavigator();

export default function Detail({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios //
      .get(`${ApiAllCharacters}/${route.params.id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Information"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Information
              //image={data?.image}
              name={data.name}
              description={data.species}
              gender={data.gender}
              type={data.type}
              origin={data.origin.name}
              location={data.location.name}
              estado={data.status}
            />
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name="Comics"
        options={{
          tabBarIcon: ({ color, size }) => ( 
            <Ionicons
              name={"image"}
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Comics
              image={data?.image}
              name={data.name}
            />
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}
