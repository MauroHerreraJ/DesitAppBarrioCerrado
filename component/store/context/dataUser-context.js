import React, { createContext, useState } from "react";

// Crear el contexto
export const DataUserContext = createContext();

// Crear el proveedor del contexto
export const DataUserProvider = ({ children }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");
  const [centralCode, setCentralCode] = useState("");

  const dataUser = {
    Cuenta: accountNumber,
    Alta: registrationCode,
    Central: centralCode,
  };




  return (
    <DataUserContext.Provider
      value={{
        accountNumber,
        setAccountNumber,
        registrationCode,
        setRegistrationCode,
        centralCode,
        setCentralCode,
        dataUser,
      }}
    >
      {children}
    </DataUserContext.Provider>
  );
};

export default DataUserProvider;