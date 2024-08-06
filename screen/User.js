import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { fetchData } from "../util/http";

function User() {

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    async function getData() {

      const dataClient = await fetchData();
      setFetchedData(dataClient);
    }
    getData();
  }, []);
  console.log(fetchedData)
  return (

    <ImageBackground
      source={require('../assets/126353.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
    >
      <View style={styles.dataContainer} >
        {fetchedData.map((item) => (
          <View key={item.id}>

            <>
              <View style={styles.textdata}>
                <Text text style={styles.text}>Número de cuenta: {item.Cuenta}</Text>
              </View>

              <View style={styles.textdata}>
                <Text text style={styles.text}>Código de alta: {item.Alta}</Text>
              </View>

              <View style={styles.textdata}>
                <Text text style={styles.text}>Código de central: {item.Central}</Text>
              </View>
            </>

          </View>
        ))}
      </View>
    </ImageBackground>
  );
}

export default User;

const styles = StyleSheet.create({
  dataContainer: {
    padding: 20,
    marginTop: 50,
    alignItems: "center"
  },
  textdata: {
    marginTop: 3,
    marginBottom: 15,
    fontSize: 36,
  },
  text: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
  rootScreen: {
    flex: 1
  }
})
