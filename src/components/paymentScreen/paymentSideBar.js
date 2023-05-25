import { useEffect, useState } from "react";
import { AcctNoHiddenNo, AcctNoHiddenNoItem, AcctNoLastFourDigits, BallCutterFirst, BallCutterSecond, BottomDivFirst, BottomDivFirstItemDiv, BottomDivSecond, BottomDivSecondPriceDiv, ChipImg, CreditCardDiv, CreditCardDivChipDiv, CreditCardDivDateDiv, CreditCardDivUserInfoDiv, CvvDivBox, DateDivDate, DateDivMasterCardDiv, DateDivMasterCardImg, DateDivMasterCardText, FieldItemInnerValue, FieldItemName, FieldItemValue, FirstItemDivFieldItem, FlippableCard, FlippedVerBlankDiv, FlippedVerCreditCard, FlippedVerCvvDiv, ItemDelsLabel, ItemDelsPrice, ItemDelsPriceCurrency, ItemDelsPriceDecimal, MainCreditCardDiv, PaymentSideBarMainDiv, PriceDivItemDels, PriceDivItemIcon, SideBarBlueTopDiv, SideBarBottomDiv, UserInfoDivAcctNo, UserInfoDivName, WifiIcon } from "../../styles/paymentScreen/paymentSideBar.styles";
import {IoIosWifi} from 'react-icons/io';
import { BsApple } from "react-icons/bs";
import {MdReceiptLong} from 'react-icons/md';
import { PaymentScreenContext } from "../../contextApis/paymentScreenContext";
import { useContext } from "react";




const PaymentSideBar=()=>{

    const [cardClicked,setCardClicked]=useState(false);
    const {paymentForm}=useContext(PaymentScreenContext);

    

    return(
        <PaymentSideBarMainDiv>
            <MainCreditCardDiv onClick={()=>setCardClicked((prev)=>prev==true?false:true)}>
                <FlippableCard rotate={cardClicked}>
                    <CreditCardDiv>
                        <CreditCardDivChipDiv>
                            <ChipImg src="chip.png"/>
                            <WifiIcon><IoIosWifi/></WifiIcon>
                        </CreditCardDivChipDiv>
                        <CreditCardDivUserInfoDiv>
                            <UserInfoDivName>Jonathan Michael</UserInfoDivName>
                            <UserInfoDivAcctNo>
                                <AcctNoHiddenNo>
                                    <AcctNoHiddenNoItem></AcctNoHiddenNoItem>
                                    <AcctNoHiddenNoItem></AcctNoHiddenNoItem>
                                    <AcctNoHiddenNoItem></AcctNoHiddenNoItem>
                                    <AcctNoHiddenNoItem></AcctNoHiddenNoItem>
                                </AcctNoHiddenNo>
                                &nbsp;&nbsp;
                                <AcctNoLastFourDigits>3456</AcctNoLastFourDigits>
                            </UserInfoDivAcctNo>
                        </CreditCardDivUserInfoDiv>
                        <CreditCardDivDateDiv>
                                <DateDivDate>{paymentForm.expiryMonth>0?paymentForm.expiryMonth:""}/{paymentForm.expiryYear>0?paymentForm.expiryYear:""}</DateDivDate>
                                <DateDivMasterCardDiv>
                                    <DateDivMasterCardImg src="mastercard.png"/>
                                    <DateDivMasterCardText>Mastercard</DateDivMasterCardText>
                                </DateDivMasterCardDiv>
                            </CreditCardDivDateDiv>
                    </CreditCardDiv>
                    <FlippedVerCreditCard>
                        <FlippedVerCvvDiv>
                            <CvvDivBox>{paymentForm.cvv}</CvvDivBox>
                        </FlippedVerCvvDiv>
                        <FlippedVerBlankDiv></FlippedVerBlankDiv>
                    </FlippedVerCreditCard>
                </FlippableCard>
            </MainCreditCardDiv>
            <SideBarBlueTopDiv></SideBarBlueTopDiv>
            <SideBarBottomDiv>
                <BottomDivFirst>
                    <BallCutterFirst></BallCutterFirst>
                    <BallCutterSecond></BallCutterSecond>
                    <BottomDivFirstItemDiv>

                        <FirstItemDivFieldItem>
                            <FieldItemName>Company</FieldItemName>
                            <FieldItemValue>
                                <BsApple/>
                                <FieldItemInnerValue>Apple</FieldItemInnerValue>
                            </FieldItemValue>
                        </FirstItemDivFieldItem>
                        <FirstItemDivFieldItem>
                            <FieldItemName>Order Number</FieldItemName>
                            <FieldItemValue>
                                <FieldItemInnerValue>1266176</FieldItemInnerValue>
                            </FieldItemValue>
                        </FirstItemDivFieldItem>
                        <FirstItemDivFieldItem>
                            <FieldItemName>Product</FieldItemName>
                            <FieldItemValue>
                                <FieldItemInnerValue>MacBook Air</FieldItemInnerValue>
                            </FieldItemValue>
                        </FirstItemDivFieldItem>
                        <FirstItemDivFieldItem>
                            <FieldItemName>VAT {"(20%)"} </FieldItemName>
                            <FieldItemValue>
                                <FieldItemInnerValue>100%</FieldItemInnerValue>
                            </FieldItemValue>
                        </FirstItemDivFieldItem>
                    </BottomDivFirstItemDiv>
                </BottomDivFirst>
                <BottomDivSecond>
                    <BottomDivSecondPriceDiv>
                        <PriceDivItemDels>
                            <ItemDelsLabel>You have to pay</ItemDelsLabel>
                            <ItemDelsPrice>599<ItemDelsPriceDecimal>.99</ItemDelsPriceDecimal>
                            &nbsp;&nbsp;<ItemDelsPriceCurrency>USD</ItemDelsPriceCurrency></ItemDelsPrice>
                        </PriceDivItemDels>
                        <PriceDivItemIcon>
                            <MdReceiptLong/>
                        </PriceDivItemIcon>
                    </BottomDivSecondPriceDiv>
                </BottomDivSecond>
            </SideBarBottomDiv>
        </PaymentSideBarMainDiv>
    );
};
export default PaymentSideBar;