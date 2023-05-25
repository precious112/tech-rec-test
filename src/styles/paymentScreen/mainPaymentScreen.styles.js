import styled from "styled-components";



export const MainPaymentMainDiv=styled.div`
width:100%;
box-sizing:border-box;
`;

export const MainPaymentCardNumberDiv=styled.div`
width:100%;
`;

export const PaymentCardNumberLabel=styled.div`
width:100%;
margin-bottom:20px;
display:flex;
justify-content:space-between;
align-items:center;
`;

export const NumberLabelHeader=styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

export const NumberLabelText=styled.div`
font-size:0.938rem;
font-weight:bold;
color:#242e42;
margin-bottom:10px;
`;

export const NumberLabelSubText=styled.div`
font-size:13px;
color:#babdd1;
`;

export const NumberLabelEdit=styled.div`
font-size:14px;
font-weight:bold;
color:#2962FF;
display:flex;
`;

export const NumberLabelEditText=styled.div`
margin-left:5px;
`;


export const PaymentCardNumberForm=styled.div`
position:relative;
width:100%;
border-radius:7px;
border:1px solid #E0E0E0;
padding:20px 50px;
box-sizing:border-box;
color:#BDBDBD;
font-size:0.938rem;
font-weight:600;
background:#F5F5F5;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    font-size:0.80rem;
    
}

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    
}
`;

export const NumberFormMasterCardImg=styled.img`
position:absolute;
left:15px;
top:15px;
width:25px;
height:auto;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    width:22px;
    
}

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    
}
`;

export const NumberFormVerifiedImg=styled.img`
position:absolute;
right:15px;
top:15px;
width:26px;
height:26px;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    width:22px;
    height:22px;
    
}

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    
}
`;


export const MainPaymentCvvDiv=styled.div`
width:100%;
display:flex;
justify-content:space-between;
alin-items:center;
margin-top:30px;
`;

export const CvvDivLabelDiv=styled.div`
width:40%;
display:flex;
flex-direction:column;
justify-content:center;
`;

export const CvvDivLabelDivText=styled.div`
font-size:0.938rem;
font-weight:bold;
color:#242e42;
margin-bottom:10px;
`;

export const CvvDivLabelSubText=styled.div`
font-size:0.813rem;
color:#babdd1;
`;

export const CvvDivForm=styled.div`
width:50%;
border-radius:8px;
border:1px solid #E0E0E0;
padding:0px; 50px;
display:flex;
align-items:center;
flex-direction:row-reverse;
box-sizing:border-box;

:focus-within{
    border:2px solid #2962FF;
    background:#E3F2FD;
}
`;

export const CvvDivFormIcon=styled.div`
font-size:1.438rem;
color:#babdd1;
padding-top:5px;
margin-right:10px;
`;

export const CvvDivFormInput=styled.input`
width:80%;
color:#242e42;
font-size:0.938rem;
font-weight:600;
text-align:center;
border:none;
outliine:none;
padding:20px 0px;

:focus{
    border:none;
    outline:none;
    color:#2962FF;
    background:#E3F2FD;
}
`;

export const MainPaymentExpiryDiv=styled.div`
width:100%;
display:flex;
justify-content:space-between;
alin-items:center;
margin-top:30px;
`;

export const ExpiryDivLabelDiv=styled.div`
width:40%;
display:flex;
flex-direction:column;
justify-content:center;
`;

export const ExpiryDivLabelDivText=styled.div`
font-size:0.938rem;
font-weight:bold;
color:#242e42;
margin-bottom:10px;
`;

export const ExpiryDivLabelSubText=styled.div`
font-size:0.813rem;
color:#babdd1;
`;

export const ExpiryDivForms=styled.div`
width:50%;
display:flex;
justify-content:space-between;
align-items:center;
`;

export const DivFormsMonthAndYearForm=styled.input`
width:40%;
padding:20px;
color:#242e42;
box-sizing:border-box;
text-align:center;
border-radius:8px;
font-size:0.938rem;
font-weight:bold;
border:1px solid #E0E0E0;

:focus{
    
    background:#E3F2FD;
    outline:none;
    color:#2962FF;
    border:2px solid #2962FF;
}
`;

export const DivFormsSlash=styled.div`
font-size:0.938rem;
font-weight:bold;
color:#242e42;
`;

export const MainPaymentPasswordDiv=styled.div`
width:100%;
display:flex;
justify-content:space-between;
alin-items:center;
margin-top:30px;
`;

export const PasswordDivLabelDiv=styled.div`
width:40%;
display:flex;
flex-direction:column;
justify-content:center;
`;

export const PasswordDivLabelDivText=styled.div`
font-size:15px;
font-weight:bold;
color:#242e42;
margin-bottom:10px;
`;

export const PasswordDivLabelSubText=styled.div`
font-size:13px;
color:#babdd1;
`;

export const PasswordDivForm=styled.div`
width:50%;
border-radius:8px;
border:1px solid #E0E0E0;
padding:0px; 50px;
display:flex;
align-items:center;
flex-direction:row-reverse;
box-sizing:border-box;

:focus-within{
    border:2px solid #2962FF;
    background:#E3F2FD;
}
`;

export const PasswordDivFormIcon=styled.div`
font-size:23px;
color:#babdd1;
padding-top:5px;
margin-right:10px;
`;

export const PasswordDivFormInput=styled.input`
width:80%;
color:#242e42;
font-size:0.938rem;
font-weight:600;
text-align:center;
border:none;
outliine:none;
padding:20px 0px;

:focus{
    border:none;
    outline:none;
    color:#2962FF;
    background:#E3F2FD;
}
`;

export const MainPaymentPayBtn=styled.button`
width:100%;
padding:25px 0px;
text-align:center;
background:#2962FF;
color:white;
border:none;
border-radius:8px;
margin-top:30px;
font-weight:bold;
`;



export const MobileCreditCardViewParentDiv=styled.div`
display:none;

@media (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    display:block;
    width:90%;
    height:35vh;
    border-radius:18px;
    background:transparent;
    perspective: 1000px;
    box-sizing:border-box;
    box-shadow: -1px 2px 9px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 2px 9px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 2px 9px -1px rgba(0,0,0,0.75);
    margin-bottom:20px;
    margin-left:5%;
}
`;


export const MobileCreditCardViewFlippableDiv=styled.div`
height: 100%;
width: 100%;
background:transparent;

transform-style:preserve-3d;

/* Content Alignment */
position: relative;
box-sizing:border-box;

transform: rotateY(${(props)=>props.rotate?"180deg":"0deg"});

transition:transform 0.5s ease;
`;

export const MobileCreditCardViewFrontDiv=styled.div`
position:absolute;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
border-radius:18px!important;
box-sizing:border-box;
background-color: rgba(255, 255, 255, 0.9);
opacity: 0.99;
backdrop-filter: blur(1px);
backface-visibility:hidden;
`;

export const FrontDivChipDiv=styled.div`
width:100%;
padding:0px 10%;
display:flex;
justify-content:space-between;
align-items:center;
box-sizing:border-box;
`;

export const ChipDivChipImgTwo=styled.img`
width:17%;
`;

export const ChipDivWifiIconTwo=styled.div`
font-size:1.5rem;
`;

export const FrontDivUserInfo=styled.div`
width:100%;
padding:0px 10%;
display:flex;
flex-direction:column;
justify-content:space-between;
box-sizing:border-box;
`;

export const UserInfoUserName=styled.div`
font-size:1rem;
font-weight:500;
`;

export const MobileCreditCardViewBackDiv=styled.div`
position:absolute;
width:100%;
height:100%;
border-radius:18px;
box-sizing:border-box;
background-color: rgba(255, 255, 255, 0.9);
opacity: 0.99;
backdrop-filter: blur(1px);
backface-visibility:hidden;
transform: rotateY(180deg);
`;

export const BackDivBlankStrip=styled.div`
margin-top:10%;
width:100%;
height:35px;
background:black;
`;

export const BackDivCvvStrip=styled.div`
margin-top:10%;
width:100%;
display:flex;
flex-direction:row-reverse;
padding:6px 0px;
background:#E0E0E0;
`;

export const CvvStripBox=styled.div`
margin-right:10px;
padding:10px 10px;
text-align:center;
font-size:0.90rem;
color:black;
background:#9E9E9E;
`;