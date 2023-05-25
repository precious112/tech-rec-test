import styled from "styled-components";


export const PaymentHeaderMainDiv=styled.div`
width:100%;
padding:10px 0px;
margin-bottom:35px;
display:flex;
justify-content:space-between;
align-items:center;
`;

export const PaymentHeaderLogoDiv=styled.div`
display:flex;
align-items:center;
`;

export const HeaderLogoDivLogo=styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background:#2962FF;
color:white;
font-size:1rem;
margin-right:12px;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    width:30px;
    height:30px;
    margin-right:7px;
    font-size:0.8rem;
    
}

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    
}
`;

export const HeaderLogoDivText=styled.div`
font-size:1.375rem;
font-weight:bold;
color:#242e42;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    font-size:0.99rem;
    
}

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    
}
`;

export const HeaderLogoDivSubText=styled.span`
font-size:1.375rem;
font-weight:normal;
color:#242e42;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    font-size:0.99rem;
    
}

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    
}
`;


export const HeaderTimeDiv=styled.div`
display:flex;
align-items:center;
`;

export const HeaderTimeItem=styled.div`
border-radius:6px;
padding:10px;
background:#242e42;
color:white;
margin:0px 2px;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    padding:7px;
    
}

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    
}
`;

export const HeaderTimeDot=styled.div`
font-size:1.125rem;
font-weight:600;
color:#242e42;
margin:0px 4px;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    
    
}

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    
}
`;