import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
// import styled from "styled-components";

import Rota from "./comp/Rota/Rota"


function App() {
  return (
    <ChakraProvider>
      {/* <TelaInteira> */}
      <Rota />
      {/* </TelaInteira> */}
    </ChakraProvider>
  );
}

export default App;
