import { Text, View, StyleSheet, Image } from "react-native";
import { useData } from "../store/serverData-context";


function User() {

  const { fetchedData } = useData();

  return (
    <>
      <View style={styles.dataContainer} >
        {fetchedData.map((item) => (
          <View key={item.id}>
            <>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Usuario: </Text>
                <Text style={styles.textData}>{item.nombre}</Text>
                <View style={styles.underline}></View> 
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Documento: </Text>
                <Text style={styles.textData}>{item.documento}</Text>
                <View style={styles.underline}></View>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Código de Alta: </Text>
                <Text style={styles.textData}>{item.codlicencia}</Text>
                <View style={styles.underline}></View>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Licencia: </Text>
                <Text style={styles.textData}>{item.Licencia}</Text>
                <View style={styles.underline}></View>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Central: </Text>
                <Text style={styles.textData}>{item.Central}</Text>
                <View style={styles.underline}></View>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Cuenta: </Text>
                <Text style={styles.textData}>{item.Cuenta}</Text>
                <View style={styles.underline}></View>
              </View>
            </>
          </View>
        ))}
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logonuevo.png")}
          style={{ width: 59, height: 59 }} />
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
    marginTop: 30,
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
  }, imageContainer: {
    alignItems: "center",
    marginBottom: 20
  }
})
