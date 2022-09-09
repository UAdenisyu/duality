import { ScrollView, Text, View, StyleSheet, UIManager } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import TableList from "../../components/TableList";
import LinkButton from "../../navigation/LinkButton";
import SetCryptocurrencyPrice from "../../components/SetCryptocurrencyPrice";
import TotalCryptoInfo from "../../components/TotalCryptoInfo";

export default function Earn() {
    return (
        <ScrollView>
            {/* <TotaLBalance/>
            <InputCryptoInfo cryptoName = 'Eth' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
            <InputCryptoInfo cryptoName = 'Usdt' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/> */}
            <SetCryptocurrencyPrice/>
            <TotalCryptoInfo/> 
        </ScrollView>
    );
}
