import { AppBar, Toolbar, styled, Button } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const Container = styled(AppBar)`
  background: #060606;
  height: 8vh;
  @media (max-width: 768px) {
    height: 10vh;
  }
`;

const Logo = styled("img")`
  width: 40px;
  @media (max-width: 768px) {
    width: 30px;
  }
`;

const ButtonContainer = styled("div")`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const ResponsiveButton = styled(Button)`
  margin-right: 8px;
  min-height: 43px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
    min-height: 35px;
    font-size: 0.8rem;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Logo
            src="https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png"
            alt="logo"
          />
          <ButtonContainer>
            <ResponsiveButton variant="contained" color="primary">
              <CloudIcon style={{ marginRight: "4px" }} /> Save
            </ResponsiveButton>
            <ResponsiveButton variant="contained" color="primary">
              <SettingsIcon style={{ marginRight: "4px" }} /> Settings
            </ResponsiveButton>
            <ResponsiveButton variant="contained" color="success" onClick={() => navigate("/signup")}>
              Sign up
            </ResponsiveButton>
            <ResponsiveButton variant="contained" color="primary" onClick={() => navigate("/login")}>
              Log in
            </ResponsiveButton>
          </ButtonContainer>
        </Toolbar>
      </Container>
    </>
  );
};

export default Header;
