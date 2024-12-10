import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% {
    border-right: 1.5px solid transparent;

  }
  100% {
    border-right: 1.5px solid transparent;
  }
`

export const CounterWrapper = styled.div`
  color: white;
  position: relative;
  z-index: 4;
  font-family: Typewriter;
  
  span {
    border-right: 1.5px solid white;
    padding-left: 2px;
    animation: ${blink} 1s infinite;
  }
`;