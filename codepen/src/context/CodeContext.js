import { createContext, useState } from 'react';

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <CodeContext.Provider value={{ html, setHtml, css, setCss, js, setJs }}>
      {children}
    </CodeContext.Provider>
  );
};
