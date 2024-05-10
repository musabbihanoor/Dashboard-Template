// AlertService.js
import React, { createContext, useContext, useState } from "react";
import SnackbarComponent from "../components/layout/Snackbar";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertQueue, setAlertQueue] = useState([]);

  const showAlert = (message, severity = "success") => {
    setAlertQueue((prevQueue) => [
      ...prevQueue,
      { id: Date.now(), message, severity },
    ]);
  };

  const hideAlert = (id) => {
    setAlertQueue((prevQueue) => prevQueue.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alertQueue.map((alert) => (
        <SnackbarComponent
          key={alert.id}
          id={alert.id}
          message={alert.message}
          severity={alert.severity}
          onClose={() => hideAlert(alert.id)}
        />
      ))}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
