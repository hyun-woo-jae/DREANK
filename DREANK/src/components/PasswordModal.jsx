import { useState } from "react";
import Modal from "react-modal";
import { TextField, Button, Box } from "@mui/material";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

const PasswordModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(password);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Password Required"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h2>Enter Password</h2>
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

PasswordModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PasswordModal;
