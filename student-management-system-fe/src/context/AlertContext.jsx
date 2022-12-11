import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ message: "", status: "" });
    const sendAlert = (message, status="info") => {
        setAlert({ message, status });
    };
    return (
        <AlertContext.Provider value={{ alert, sendAlert }}>
            {children}
        </AlertContext.Provider>
    );
};
