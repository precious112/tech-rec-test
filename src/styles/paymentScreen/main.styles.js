import styled from "styled-components";


export const PaymentScreenMainDiv=styled.div`
width:100vw;
height:100vh;
margin:0;
display:flex;
justify-content:center;
align-items:center;
box-sizing: border-box;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    height:auto;
  }
`;


export const PaymentScreenInnerDiv=styled.div`
width:90%;
height:auto;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:stretch;
`;

export const PaymentScreenMainSection=styled.div`
display:block;
width:55%;
margin-right:10%;
box-sizing: border-box;

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    width:50%;
    margin-right:5%;
  }

  @media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    width:100%;
    margin-right:0;
  }

`;

export const PaymentScreenSideBar=styled.div`
display:block;
width:35%;
box-sizing: border-box;

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    width:45%;
  }

  @media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    display:none;
  }
`;