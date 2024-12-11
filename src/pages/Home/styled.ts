import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: 100%;
  background-image: url("https://raw.githubusercontent.com/RaphaelBRodrigues/valentine-gift/refs/heads/master/src/assets/background.gif"); 
  background-size: 500%;
  background-position: 0;
  background-position-x: 50%;
  position: fixed;

  .upper {
    z-index: 999;
  }
`;

export const Background = styled.div`
    background-color: black;
    opacity: 0.7;
    z-index: 1;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
    overflow: hidden;
    height: 100vh;
    background-repeat: repeat;
`;