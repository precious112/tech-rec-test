import { BackDivBlankStrip, BackDivCvvStrip, ChipDivChipImgTwo, ChipDivWifiIconTwo, CvvDivForm, CvvDivFormIcon, CvvDivFormInput, CvvDivLabelDiv, CvvDivLabelDivText, CvvDivLabelSubText, CvvStripBox, DivFormsMonthAndYearForm, DivFormsSlash, ExpiryDivForms, ExpiryDivLabelDiv, ExpiryDivLabelDivText, ExpiryDivLabelSubText, FrontDivChipDiv, FrontDivUserInfo, MainPaymentCardNumberDiv, MainPaymentCvvDiv, MainPaymentExpiryDiv, MainPaymentMainDiv, MainPaymentPasswordDiv, MainPaymentPayBtn, MobileCreditCardViewBackDiv, MobileCreditCardViewFlippableDiv, MobileCreditCardViewFrontDiv, MobileCreditCardViewParentDiv, NumberFormMasterCardImg, NumberFormVerifiedImg, NumberLabelEdit, NumberLabelEditText, NumberLabelHeader, NumberLabelSubText, NumberLabelText, PasswordDivForm, PasswordDivFormIcon, PasswordDivFormInput, PasswordDivLabelDiv, PasswordDivLabelDivText, PasswordDivLabelSubText, PaymentCardNumberForm, PaymentCardNumberLabel, UserInfoUserName } from "../../styles/paymentScreen/mainPaymentScreen.styles";
import {FaPen} from 'react-icons/fa';
import {TfiLayoutGrid3Alt} from 'react-icons/tfi';
import { PaymentScreenContext } from "../../contextApis/paymentScreenContext";
import { useContext, useState } from "react";
import { IoIosWifi } from "react-icons/io";
import { AcctNoHiddenNo, AcctNoHiddenNoItem, AcctNoLastFourDigits, CreditCardDivDateDiv, DateDivDate, DateDivMasterCardDiv, DateDivMasterCardImg, DateDivMasterCardText, UserInfoDivAcctNo } from "../../styles/paymentScreen/paymentSideBar.styles";



const MainPaymentScreen=()=>{

    const {paymentForm,setPaymentForm}=useContext(PaymentScreenContext);

    const [clicked,setClicked]=useState(false);

    return(
        <MainPaymentMainDiv>

            <MobileCreditCardViewParentDiv onClick={()=>setClicked((prev)=>prev==true?false:true)}>
                <MobileCreditCardViewFlippableDiv rotate={clicked} >

                    <MobileCreditCardViewFrontDiv >
                        <FrontDivChipDiv>
                            <ChipDivChipImgTwo src="chip.png"/>
                            <ChipDivWifiIconTwo><IoIosWifi/></ChipDivWifiIconTwo>
                        </FrontDivChipDiv>
                        <FrontDivUserInfo>
                            <UserInfoUserName>Jonathan Michael</UserInfoUserName>
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
                            <CreditCardDivDateDiv>
                                <DateDivDate>{paymentForm.expiryMonth>0?paymentForm.expiryMonth:""}/{paymentForm.expiryYear>0?paymentForm.expiryYear:""}</DateDivDate>
                                <DateDivMasterCardDiv>
                                    <DateDivMasterCardImg src="mastercard.png"/>
                                    <DateDivMasterCardText>Mastercard</DateDivMasterCardText>
                                </DateDivMasterCardDiv>
                            </CreditCardDivDateDiv>
                        </FrontDivUserInfo>
                    </MobileCreditCardViewFrontDiv>

                    <MobileCreditCardViewBackDiv>
                        <BackDivBlankStrip></BackDivBlankStrip>
                        <BackDivCvvStrip>
                            <CvvStripBox>{paymentForm.cvv}</CvvStripBox>
                        </BackDivCvvStrip>
                    </MobileCreditCardViewBackDiv>

                </MobileCreditCardViewFlippableDiv>
            </MobileCreditCardViewParentDiv>

            <MainPaymentCardNumberDiv>
                <PaymentCardNumberLabel>
                    <NumberLabelHeader>
                        <NumberLabelText>Card Number</NumberLabelText>
                        <NumberLabelSubText>Enter the 16-digit card number on the card</NumberLabelSubText>
                    </NumberLabelHeader> 
                    <NumberLabelEdit>
                        <FaPen/>
                        <NumberLabelEditText>Edit</NumberLabelEditText>
                    </NumberLabelEdit>   
                </PaymentCardNumberLabel>
            </MainPaymentCardNumberDiv>
            <PaymentCardNumberForm>
                <NumberFormMasterCardImg
                src="mastercard.png"
                />
                2412&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;7512&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;3412&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;3456 
                <NumberFormVerifiedImg
                src="verified.png"
                />
            </PaymentCardNumberForm>
            <MainPaymentCvvDiv>
                <CvvDivLabelDiv>
                    <CvvDivLabelDivText>CVV Number</CvvDivLabelDivText>
                    <CvvDivLabelSubText>Enter the 3 or 4 digit number on the card</CvvDivLabelSubText>
                </CvvDivLabelDiv>
                <CvvDivForm>
                    <CvvDivFormIcon><TfiLayoutGrid3Alt/></CvvDivFormIcon>
                    <CvvDivFormInput
                    value={paymentForm.cvv}
                    onChange={(e)=>setPaymentForm((prev)=>({...prev,cvv:e.target.value}))}
                    autocomplete="off"
                    />
                </CvvDivForm>
            </MainPaymentCvvDiv>
            <MainPaymentExpiryDiv>
                <ExpiryDivLabelDiv>
                    <ExpiryDivLabelDivText>Expiry Date</ExpiryDivLabelDivText>
                    <ExpiryDivLabelSubText>Enter the date of expiration</ExpiryDivLabelSubText>
                </ExpiryDivLabelDiv>
                <ExpiryDivForms>
                    <DivFormsMonthAndYearForm
                    value={paymentForm.expiryMonth}
                    onChange={(e)=>setPaymentForm((prev)=>({...prev,expiryMonth:e.target.value}))}
                    />
                    <DivFormsSlash>/</DivFormsSlash>
                    <DivFormsMonthAndYearForm
                    value={paymentForm.expiryYear}
                    onChange={(e)=>setPaymentForm((prev)=>({...prev,expiryYear:e.target.value}))}
                    />
                </ExpiryDivForms>
            </MainPaymentExpiryDiv>
            <MainPaymentPasswordDiv>
                    <PasswordDivLabelDiv>
                        <PasswordDivLabelDivText>Password</PasswordDivLabelDivText>
                        <PasswordDivLabelSubText>Enter your dynamic password</PasswordDivLabelSubText>
                    </PasswordDivLabelDiv>
                    <PasswordDivForm>
                        <PasswordDivFormIcon><TfiLayoutGrid3Alt/></PasswordDivFormIcon>
                        <PasswordDivFormInput
                        type="password"
                        onChange={(e)=>setPaymentForm((prev)=>({...prev,password:e.target.value}))}
                        autoComplete="new-password"
                        />
                    </PasswordDivForm>
            </MainPaymentPasswordDiv>
            <MainPaymentPayBtn>Pay Now</MainPaymentPayBtn>
        </MainPaymentMainDiv>
    );
};
export default MainPaymentScreen;