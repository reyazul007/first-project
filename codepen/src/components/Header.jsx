import { AppBar, Toolbar, styled, Button } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsIcon from '@mui/icons-material/Settings';

const Container = styled(AppBar)`
  background: #060606;
  height: 8vh;
`;
const Header = () => {
  const logo =
    "https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png";
  return (
    <Container position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <img src={logo} alt="logo" style={{ width: "40px" }} />
        <div>
          <Button variant="contained" color="primary" style={{  marginRight: "8px",background: "#616a6b", minHeight: "43px" }}>
            <CloudIcon style={{ marginRight: "4px" }} /> Save
          </Button>
          <Button variant="contained" color="primary" style={{ marginRight: "8px", background: "#616a6b", minHeight: "43px"}}>
            <SettingsIcon style={{ marginRight: "4px" }} /> Settings
          </Button>
          <Button variant="contained" color="success"style={{ marginRight: "8px", minHeight: "43px" }}>Sign up</Button>
          <Button variant="contained" color="primary"style={{ minHeight: "43px" }}>Log in</Button>
          
        </div>
      </Toolbar>
    </Container>
  );
};

export default Header;
