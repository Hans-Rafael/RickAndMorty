import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderColor: "#F3D403", //yellow
    borderWidth: 5,
    
    objectFit: 'cover',
    objectPosition:' bottom',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"black"
  },
  title: {
    color: "#850707", //color rojo
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "normal",
    backgroundColor: "orange",
    textAlign: "center",
    marginBottom: 25,
  },
});
