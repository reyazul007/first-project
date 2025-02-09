import { useContext, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  height: 42vh;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Result = () => {
  const [src, setSrc] = useState('');
  const { html, css, js } = useContext(DataContext);

  useEffect(() => {
    const srcCode = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `;

    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container style={html || css || js ? null : { display: 'none' }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
