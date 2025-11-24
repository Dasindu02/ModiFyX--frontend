// import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

// interface AuthContextType {
//   isLoggedIn: boolean;
//   login: (token?: string) => void;
//   logout: () => void;
//   token: string | null;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// const TOKEN_KEY = "token";

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(() => {
//     // read once on initialization
//     return localStorage.getItem(TOKEN_KEY);
//   });

//   const isLoggedIn = !!token;

//   useEffect(() => {
//     // keep localStorage and state in sync for multi-tab scenarios
//     const onStorage = (e: StorageEvent) => {
//       if (e.key === TOKEN_KEY) {
//         setToken(e.newValue);
//       }
//     };
//     window.addEventListener("storage", onStorage);
//     return () => window.removeEventListener("storage", onStorage);
//   }, []);

//   const login = (newToken = "demo-token") => {
//     // In real app, only set token after server response
//     localStorage.setItem(TOKEN_KEY, newToken);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem(TOKEN_KEY);
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout, token }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };
