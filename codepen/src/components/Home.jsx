//components
import Header from './Header';
import Code from './Code';
import Result from './Result';
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full screen height */
  overflow: hidden; /* No scrollbars */
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Code />
      <Result />
    </Container>
  );
};

export default Home;