import { Box, styled } from "@mui/material";
import Editor from "./Editor";

const Container = styled(Box)`
       display: flex;
`

const Code = () => {
  return (
    <Container>
      <Editor 
      heading="HTML" 
      icon="/" 
      color="#FF3C41"

      />

      <Editor 
      heading="CSS" 
      icon="*" 
      color="#0EBEFF"
      />
      <Editor 
      heading="JavaScript" 
      icon="()" 
      color="#FCD000"
      />
    </Container>
  );
};

export default Code;
