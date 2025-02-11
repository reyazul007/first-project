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
  height:500px; /* Increased height */
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
    color:white;
  }
`;

const StyledButton = styled(Button)`
  &.MuiButton-containedPrimary {
    background-color: #ffeb3b;
    color: black;
    &:hover {
      background-color: #fdd835;
    }
  }
  &.MuiButton-textSecondary {
    color: #ffeb3b;
    &:hover {
      background-color: rgba(255, 235, 59, 0.1);
    }
  }
`;

const StyledTypography = styled(Typography)`
  font-family: 'Roboto', times roman ;
  font-weight: bold;
  font-size: 2rem;
  color:white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledIconButton = styled(IconButton)`
  color: white;
`;

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email || !password) {
      alert("Please fill all the required fields!");
      return;
    }
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      toast.success(`Login successful! Welcome ${storedUser.username}.`);
      setTimeout(() => {
        navigate("/");
      }, 2000); // Delay navigation by 2 seconds
    } else {
      alert("Wrong email or password!");
    }
  };

  return (
    <Container>
      <Form>
        <StyledTypography variant="h4" align="left">Log In</StyledTypography>
        <StyledTextField
          variant="outlined"
          label="Email"
          type="email"
          fullWidth
          id="email"
          name="email"
        />
        <StyledTextField
          variant="outlined"
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          id="password"
          name="password"
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
        <Typography
          variant="body2"
          align="right"
          color="white"
          style={{ cursor: 'pointer' }}
          onClick={() => alert('Forgot Password functionality is Working!')}
        >
          Forgot Password?
        </Typography>
        <StyledButton variant="contained" color="success" onClick={handleLogin}>
          Log In
        </StyledButton>
        <Button
          variant="body2"
          align="left"
          color="white"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign up
        </Button>
        <StyledButton variant="text" color="secondary" onClick={() => navigate("/")}>
          Back to Home
        </StyledButton>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Login;
