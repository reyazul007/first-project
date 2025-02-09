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

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here (e.g., authentication)
    alert("Login successful! Welcome back.");
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
          type="password"
          fullWidth
          id="password"
          name="password"
        />
        <Typography
          variant="body2"
          align="right"
          color="white"
          style={{ cursor: 'pointer' }}
          onClick={() => alert('Forgot Password functionality to be implemented!')}
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
    </Container>
  );
};

export default Login;
