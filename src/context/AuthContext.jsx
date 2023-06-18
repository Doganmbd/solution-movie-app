//! Authentication bilgilerini localde değil globalde kullanmam gerekir . çünkü navbar, register, main ,login yani heryerde kullanacam .

import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;