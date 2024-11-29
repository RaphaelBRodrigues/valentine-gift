import styled from "styled-components";

export const PolaroidWrapper = styled.div`
  background-color: white;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0 25px 0 ;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(11,11,11);
`;

export const PolaroidImage = styled.img`
  width: 85%;
  padding-bottom: 10px;
`;

export const PolaroidDate = styled.p`
  font-style: italic;
  margin: 5px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
`;

export const PolaroidDescription = styled.p`
  margin: 0;
  height: auto;
  font-style: oblique;
  font-size: 15px;
`;