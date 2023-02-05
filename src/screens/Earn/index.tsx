import { ScrollView, View } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import UserShortInfoBalanceList from "../../components/UserShortInfoBalanceList";
import IncomeFromInvestments from "../../components/IncomeFromInvestments";
import TableList from "../../components/TableList";
import { useDualityStore } from "../../mobx/appStoreContext";
import { useMemo } from "react";



export default function EarnMain() {

    const { cryptoCurrencyFullInfo } = useDualityStore();

    const cryptoList = useMemo(() => {
        return Object.keys(cryptoCurrencyFullInfo).map(item => (
            <InputCryptoInfo key={item} cryptoName={item} yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
        ));
    }, [cryptoCurrencyFullInfo]);

    return (
        <ScrollView>
            <TotaLBalance/>
            {cryptoList}
            <View style={{height: 100}}/>
        </ScrollView>
    );
}