import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: 100%;
  background-image: url("https://ipfs.pixura.io/ipfs/QmU8aG1zKKF2pHGT1d4ptJX98VLcJt9Wpv5kBmDf8EZe3e/EndlessSummer_GenuineHumanArt.gif"); 
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