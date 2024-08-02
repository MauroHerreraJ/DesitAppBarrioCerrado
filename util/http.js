import axios from "axios";
import { StyleSheet } from "react-native";

const BACKEND_URL = "https://desitdb-7c39e-default-rtdb.firebaseio.com/";

export function storeData(data){
    axios.post(BACKEND_URL + '/data.json',data);
}

export async function fetchData(){
   const response = await axios.get(BACKEND_URL + '/data.json')

   const dataClient = [];
   for(const key in response.data){
    const dataObj = {
        id:key,
        Alta: response.data[key].Alta,
        Central: response.data[key].Central,
        Cuenta: response.data[key].Cuenta,
    };
    dataClient.push(dataObj);
   }
   return dataClient;
}

