import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  z-index: 99;

  
  justify-content: center;
  a{
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
}

a span{
  position: relative;
  z-index: 2;
}

a:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #2398E7;
  transition: all 1s;
}

a:hover, a:active{
  color: #fff;
}

a:hover:after, a:active:after{
  width: 100%;
}
`
