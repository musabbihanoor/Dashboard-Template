// SnackbarComponent.js
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackbarComponent = ({ id, message, severity, onClose }) => {
  return (
    <Snackbar open={true} autoHideDuration={6000} onClose={() => onClose(id)}>
      <Alert
        onClose={() => onClose(id)}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
