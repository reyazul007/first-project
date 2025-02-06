import { Container, TextField, Button, Link, Typography } from '@mui/material';

const Login = ({ isOpen, onClose }) => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      {isOpen && (
        <form noValidate autoComplete="off">
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Login
          </Button>
          <Link href="#" variant="body2" style={{ display: 'block', marginTop: '10px' }}>
            Forgot Password?
          </Link>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            style={{ marginTop: '10px' }}
            onClick={onClose}
          >
            Close
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Login;