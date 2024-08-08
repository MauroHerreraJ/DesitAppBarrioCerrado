import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
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
    <>
      <View style={styles.dataContainer} >
        {fetchedData.map((item) => (
          <View key={item.id}>
            <>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Número de cuenta: </Text>
                <Text style={styles.textData}>{item.Cuenta}</Text>
                <View style={styles.underline}></View>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Código de alta: </Text>
                <Text style={styles.textData}>{item.Alta}</Text>
                <View style={styles.underline}></View>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Código de central: </Text>
                <Text style={styles.textData}>{item.Central}</Text>
                <View style={styles.underline}></View>
              </View>
            </>
          </View>
        ))}
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logodesit.png")}
          style={{ width: 55, height: 55 }} />
      </View>
      <View>
        <Text style={styles.textImage}>Producto desarrollado por Desit SA</Text>
      </View>
    </>

  );
}

export default User;

const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  textContainer: {
    marginTop: 3,
    marginBottom: 15,
    fontSize: 36,
  },
  text: {
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
  rootScreen: {
    flex: 1
  },
  textData: {
    fontSize: 18,
    fontFamily: "open-sans",
  },
  underline: {
    height: 1,
    backgroundColor: 'grey',
    width: '100%',
    marginTop: 1,
    opacity: 0.55
  },
  textImage: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 15
  }, imageContainer:{
    alignItems:"center",
    marginBottom:20
   }
})
