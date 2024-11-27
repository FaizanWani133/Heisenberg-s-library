import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useAuth } from "../provider/AuthContext";

type TabValue = "login" | "forgotPassword";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabValue>("login");

  const handleTabChange = (event: React.SyntheticEvent, newValue: TabValue) => {
    setActiveTab(newValue);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Authentication</DialogTitle>
      <DialogContent>
        {/* Tabs for switching between Login and Forgot Password */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          aria-label="auth tabs"
        >
          <Tab label="Login" value="login" />
          <Tab label="Forgot Password" value="forgotPassword" />
        </Tabs>

        {/* Conditional Content */}
        <Box mt={2}>
          {activeTab === "login" && <LoginContent />}
          {activeTab === "forgotPassword" && <ForgotPasswordContent />}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const LoginContent: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if(email && password){
        login(email, password);
    }
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        disabled={!email || !password}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

const ForgotPasswordContent: React.FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        required
      />
      <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
        Reset Password
      </Button>
    </Box>
  );
};

export default AuthModal;
