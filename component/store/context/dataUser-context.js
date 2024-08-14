import React, { createContext, useState } from "react";

// Crear el contexto
export const DataUserContext = createContext();

// Crear el proveedor del contexto
export const DataUserProvider = ({ children }) => {
  const [userName, setUserName] = useState(""); 
  const [document, setDocument] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");

  const dataUser = {
    Usuario: userName,
    Documento: document ,
    Alta:registrationCode,
  };
  
  return (
    <DataUserContext.Provider
      value={{
        userName,
        setUserName,
        document,
        setDocument,
        registrationCode,
        setRegistrationCode,
        dataUser,
      }}
    >
      {children}
    </DataUserContext.Provider>
  );
};

export default DataUserProvider;