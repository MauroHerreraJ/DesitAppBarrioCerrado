import React, { createContext, useState } from "react";

// Crear el contexto
export const DataUserContext = createContext();

// Crear el proveedor del contexto
export const DataUserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [document, setDocument] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");

  const licencias = [
    { nombre: userName },
    { documento: document },
    { codlicencia: registrationCode },
    { asignada: "asignada" }
  ]



  return (
    <DataUserContext.Provider
      value={{
        userName,
        setUserName,
        document,
        setDocument,
        registrationCode,
        setRegistrationCode,
        licencias,
      }}
    >
      {children}
    </DataUserContext.Provider>
  );
};

export default DataUserProvider;