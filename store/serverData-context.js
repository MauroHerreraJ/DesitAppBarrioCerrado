// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { fetchData } from '../util/http';

// // Crear un contexto
// const DataContext = createContext();

// // Proveedor de contexto
// // export function DataProvider({ children }) {
// //   const [fetchedData, setFetchedData] = useState([]);

// //   useEffect(() => {
// //     async function getData() {
// //       const dataClient = await fetchData();
// //       setFetchedData(dataClient);
// //     }
// //     getData();
// //   } );

// //   return (
// //     <DataContext.Provider value={{ fetchedData, setFetchedData }}>
// //       {children}
// //     </DataContext.Provider>
// //   );
// // }

// // Custom hook para usar el contexto
// export function useData() {
//     return useContext(DataContext);
//   }