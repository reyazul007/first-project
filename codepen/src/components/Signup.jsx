import { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, InputAdornment, styled } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 400px; /* Adjusted to medium size */
  height: 550px; /* Increased height */
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledTypography = styled(Typography)`
  font-family: 'Roboto', times roman;
  font-weight: bold;
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: #ffeb3b;
    }
    &.Mui-focused fieldset {
      border-color: #ffeb3b;
    }
    & input {
      color: white;
      background: transparent !important;
    }
  }
  & .MuiInputLabel-root {
    color: white;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: white;
  }
`;

const StyledIconButton = styled(IconButton)`
  color: white;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all the required fields!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    toast.success("Sign-up successful! Welcome to Codepen Family.");
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Delay navigation by 2 seconds
  };

  return (
    <Container>
      <Form>
        <StyledTypography variant="h4" align="left">Sign Up</StyledTypography>
        <StyledTextField
          variant="outlined"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
        />
        <StyledTextField
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <StyledTextField
          variant="outlined"
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <StyledIconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </StyledIconButton>
              </InputAdornment>
            ),
          }}
        />
        <StyledTextField
          variant="outlined"
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <StyledIconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </StyledIconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Sign Up
        </Button>
        <Button variant="body2" color="white" onClick={() => navigate("/login")}>
          Already have an account? Log In
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default SignUp;
