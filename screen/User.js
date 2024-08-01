import { useEffect, useState } from "react";
import { Text, View } from "react-native";
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
    return (<View>
        {fetchedData.map((item) => (
          <View key={item.id}>
            <Text>Alta: {item.Alta}</Text>
            <Text>Central: {item.Central}</Text>
            <Text>Cuenta: {item.Cuenta}</Text>
            <Text>id:{item.id}</Text>
          </View>
        ))}
      </View>
    );
}

export default User;  