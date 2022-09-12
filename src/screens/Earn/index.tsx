import { ScrollView, Text, View, StyleSheet, UIManager } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import TableList from "../../components/TableList";
import LinkButton from "../../navigation/LinkButton";
import SetCryptocurrencyPrice from "../../components/SetCryptocurrencyPrice";
import CryptocurrencyLifecycle from "../../components/CryptocurrencyLifecycle";
import TermsOfServiceList from "../../components/TermsOfServiceList";
import IncomeFromInvestments from "../../components/IncomeFromInvestments";
import ModalScreen from "../ModalScreen";


const termsOfServiceList: Array<string> = [
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
]

const modalText=['You cannot cancel a subscription once it has been activated. Always read the information carefully before confirming a subscription.',

'This product is not a Principal Refund Guaranteed product. Be prudent and take risks into account when investing your assets.']

export default function Earn() {
    return (
        <ScrollView>
            <TotaLBalance/>
            {/* <InputCryptoInfo cryptoName = 'Eth' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
            <InputCryptoInfo cryptoName = 'Usdt' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
            <SetCryptocurrencyPrice/>
            <CryptocurrencyLifecycle showDetails={false} titleLeft={'Total'}/> 
            <TermsOfServiceList terms={termsOfServiceList}/>
            <IncomeFromInvestments/> */}
            <ModalScreen 
                textContent={modalText} 
                cancelButton={true}
                confirmButtonOnPress={() => console.log('confirm')}
                cancelButtonOnPress={() => console.log('cancel')}/>
        </ScrollView>
    );
}
