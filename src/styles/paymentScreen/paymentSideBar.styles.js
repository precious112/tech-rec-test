import styled from "styled-components";


export const PaymentSideBarMainDiv=styled.div`
position:relative;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
box-sizing:border-box;
`;

export const SideBarBlueTopDiv=styled.div`
height:40px;
width:60px;
border-radius:7px;
background:#2962FF;
z-index:-1;
`;

export const SideBarBottomDiv=styled.div`
width:100%;
height:80%;
`;

export const BottomDivFirst=styled.div`
position:relative;
width:100%;
height:80%;
border-radius:18px 18px 0px 0px;
background-image: linear-gradient(to top, #e9f1f5 10%, #f0f2f4 50%, #d9d9d9 90%);
`;

export const BottomDivFirstItemDiv=styled.div`
position:absolute;
bottom:5px;
left:0;
width:100%;
box-sizing:border-box;
color:#242e42;
`;

export const FirstItemDivFieldItem=styled.div`
width:100%;
padding:4px 5%;
box-sizing:border-box;
display:flex;
justify-content:space-between;
align-items:center;
`;

export const FieldItemName=styled.div`
font-size:0.938rem;
font-weight:500;
color:#bdbfc9;
`;

export const FieldItemValue=styled.div`
display:flex;
font-size:0.938rem;
font-weight:600;
`;

export const FieldItemInnerValue=styled.div`
margin-left:4px;
`;


export const BottomDivSecond=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:20%;
border-radius:0px 0px 18px 18px;
border-top:1px dashed #BDBDBD;
background:#e9f1f5;
`;

export const BottomDivSecondPriceDiv=styled.div`
width:80%;
display:flex;
justify-content:space-between;
align-items:center;
`;

export const PriceDivItemDels=styled.div`
width:80%;
display:flex;
flex-direction:column;
`;

export const ItemDelsLabel=styled.div`
font-size:0.938rem;
font-weight:500;
color:#bdbfc9;
margin-bottom:5px;
`;

export const ItemDelsPrice=styled.div`
font-size:1.563rem;
font-weight:700;
color:#242e42;
`;

export const ItemDelsPriceDecimal=styled.span`
font-size:1rem;
font-weight:600;
color:#242e42;
`;

export const ItemDelsPriceCurrency=styled.span`
font-size:1rem;
font-weight:500;
color:#bdbfc9;
`;

export const PriceDivItemIcon=styled.div`
font-size:1.5rem;
color:#242e42;
`;


export const BallCutterFirst=styled.div`
background:white;
position:absolute;
width:40px;
height:40px;
border-radius:50%;
bottom:-20px;
left:-20px;
`;

export const BallCutterSecond=styled.div`
background:white;
position:absolute;
width:40px;
height:40px;
border-radius:50%;
bottom:-20px;
right:-20px;
`;


export const MainCreditCardDiv=styled.div`
position:absolute;
border-radius:18px;
top:6px;
left:15%;
width:70%;
height:60%;
z-index:2;
perspective: 1000px;
background-color: rgba(255, 255, 255, 0.9);
opacity: 0.99;
backdrop-filter: blur(1px);
box-sizing:border-box;
box-shadow: -5px 31px 89px -33px rgba(0,0,0,0.75);
-webkit-box-shadow: -5px 31px 89px -33px rgba(0,0,0,0.75);
-moz-box-shadow: -5px 31px 89px -33px rgba(0,0,0,0.75);
`;

export const FlippableCard=styled.div`
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


export const CreditCardDiv=styled.div`
position:absolute;
width:100%;
height:100%;
border-radius:18px;
box-sizing:border-box;
background:transparent;
backface-visibility:hidden;
`;

export const CreditCardDivChipDiv=styled.div`
width:100%;
display:flex;
justify-content:space-around;
align-items:center;
box-sizing:border-box;
margin-top:20%;
box-sizing:border-box;
`;

export const ChipImg=styled.img`
width:40px;
height:auto;
transform: rotate(90deg);
`;

export const WifiIcon=styled.div`
font-size:1.5rem;
`;

export const CreditCardDivUserInfoDiv=styled.div`
margin-top:40%;
margin-bottom:5%;
width:100%;
padding:0px 10%;
color:#242e42;
`;

export const UserInfoDivName=styled.div`
font-size:0.99rem;
font-weight:500;
margin-bottom:3%;
`;

export const UserInfoDivAcctNo=styled.div`
display:flex;
align-items:center;
font-size:0.99rem;
font-weight:bold;
`;

export const AcctNoHiddenNo=styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
`;

export const AcctNoHiddenNoItem=styled.div`
width:5px;
height:5px;
margin:0px 1px;
border-radius:50%;
background:#242e42;
`;

export const AcctNoLastFourDigits=styled.div`

`;

export const CreditCardDivDateDiv=styled.div`
width:100%;
display:flex;
padding:0px 10%;
justify-content:space-between;
align-items:center;
box-sizing:border-box;
`;

export const DateDivDate=styled.div`
font-size:0.910rem;
font-weight:600;
`;

export const DateDivMasterCardDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`;

export const DateDivMasterCardImg=styled.img`
width:35px;
height:auto;
margin-bottom:3px;
`;

export const DateDivMasterCardText=styled.div`
font-size:0.5rem;
font-weight:500;
`;


export const FlippedVerCreditCard=styled.div`
position:absolute;
background:transparent;
display:flex;
align-items:center;
transform: rotateY(180deg);
width:100%;
height:100%;
border-radius:18px;
box-sizing:border-box;
backface-visibility:hidden;
`;


export const FlippedVerCvvDiv=styled.div`
position:relative;
width:24%;
height:80%;
margin:0 10% 0 35%;
box-sizing:border-box;
background:#E0E0E0;
backface-visibility:hidden;
`;

export const CvvDivBox=styled.div`
position:absolute;
padding:10px 10px;
margin:10px;
width:35%;
height:5%;
bottom:5px;
left:25%;
text-align:center;
font-size:0.90rem;
color:black;
background:#9E9E9E;

transform: rotate(90deg);

@media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    padding:10px 7px;
    left:15%;
    bottom:10px;
  }
`;

export const FlippedVerBlankDiv=styled.div`
width:25%;
height:100%;
box-sizing:border-box;
background:black;
`;


