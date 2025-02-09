import { useState } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  font-family: 'Roboto', times roman ;
  font-weight: bold;
  font-size: 2rem;
  color:white;
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
    }
  }
  & .MuiInputLabel-root {
    color: white;
  }
  & .MuiInputLabel-root.Mui-focused {
    color:white;
  }
`;


const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Sign-up successful! Welcome to Codepen Family.");
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
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />
        <StyledTextField
          variant="outlined"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Sign Up
        </Button>
        <Button variant="body2" color="white" onClick={() => navigate("/login")}>
          Already have an account? Log In
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
