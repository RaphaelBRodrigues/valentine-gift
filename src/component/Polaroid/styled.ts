import styled from "styled-components";

export const PolaroidWrapper = styled.div`
  background-color: white;
  width: 90%;
  margin: 0 auto;
  height: 52vh;
  
  @media (min-width: 500px){
    width: 40rem;
    height: 45rem;
  }

  padding: 20px 0 25px 0 ;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(11,11,11);
`;

export const PolaroidImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 15px;
  height: 85%;
  width: 85%;
`;

export const PolaroidImage = styled.img` 
   width: 100%; 
  height: 100%; 
  border-radius: 2px;
  position: absolute;
  object-fit: cover;
  display: block;
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
  width: 80%;
  margin: 0 auto;
  font-size: 15px;
`;