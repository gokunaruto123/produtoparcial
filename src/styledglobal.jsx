import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   body{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
`


export const TelaInteira = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`
