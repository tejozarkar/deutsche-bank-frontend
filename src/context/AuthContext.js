import React, { useContext, useEffect, useState } from "react";
import { getMyDetails } from "../services/AuthService";

const AuthContext = React.createContext();

export const useAuth = () => {
   return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState();
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      getMyDetails((user) => {
         setCurrentUser(user);
         setLoading(false);
      });
   }, []);

   const value = {
      currentUser,
   };

   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
