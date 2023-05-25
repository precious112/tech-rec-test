import React, { useState } from "react";
import { PaymentScreenInnerDiv, PaymentScreenMainDiv, PaymentScreenMainSection, PaymentScreenSideBar } from "../../styles/paymentScreen/main.styles";
import PaymentHeader from "./compHeader";
import MainPaymentScreen from "./mainPaymentScreen";
import PaymentSideBar from "./paymentSideBar";
import { PaymentScreenContext } from "../../contextApis/paymentScreenContext";
import PropTypes from 'prop-types';


const PaymentScreen=()=>{

    const [paymentForm,setPaymentForm]=useState({
        cvv:"255",expiryMonth:9,expiryYear:22,password:""
    });

    return(
        <PaymentScreenMainDiv>
            <PaymentScreenInnerDiv>

                <PaymentScreenContext.Provider value={{paymentForm,setPaymentForm}}>
                    <PaymentScreenMainSection>
                    <PaymentHeader/>
                    <MainPaymentScreen/>  
                    </PaymentScreenMainSection>
                    <PaymentScreenSideBar>
                        <PaymentSideBar/>
                    </PaymentScreenSideBar>
                </PaymentScreenContext.Provider>
            </PaymentScreenInnerDiv>
        </PaymentScreenMainDiv>
    );
};
export default PaymentScreen;