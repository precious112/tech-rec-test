import { HeaderLogoDivLogo, HeaderLogoDivSubText, HeaderLogoDivText, HeaderTimeDiv, HeaderTimeDot, HeaderTimeItem, PaymentHeaderLogoDiv, PaymentHeaderMainDiv } from "../../styles/paymentScreen/compHeader.styles";
import {BsCreditCardFill} from 'react-icons/bs';




const PaymentHeader=()=>{

    return(
        <PaymentHeaderMainDiv>
            <PaymentHeaderLogoDiv>
                <HeaderLogoDivLogo><BsCreditCardFill/></HeaderLogoDivLogo>
                <HeaderLogoDivText>AceCoin</HeaderLogoDivText><HeaderLogoDivSubText>Pay</HeaderLogoDivSubText>
            </PaymentHeaderLogoDiv>
            <HeaderTimeDiv>
                <HeaderTimeItem>0</HeaderTimeItem>
                <HeaderTimeItem>1</HeaderTimeItem>
                <HeaderTimeDot>:</HeaderTimeDot>
                <HeaderTimeItem>1</HeaderTimeItem>
                <HeaderTimeItem>9</HeaderTimeItem>
            </HeaderTimeDiv>
        </PaymentHeaderMainDiv>
    );
};
export default PaymentHeader;