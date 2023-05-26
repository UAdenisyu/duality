import { ScrollView } from "react-native";
import TotalBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import { useDualityStore } from "../../mobx/appStoreContext";
import { memo, useMemo } from "react";

const EarnMain = () => {

    const { cryptoCurrencyFullInfo } = useDualityStore();

    const cryptoList = useMemo(() => {
        return Object.keys(cryptoCurrencyFullInfo).map(item => (
            <InputCryptoInfo key={item} cryptoName={item} yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
        ));
    }, [cryptoCurrencyFullInfo]);

    return (
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <TotalBalance/>
            {cryptoList}
        </ScrollView>
    );
}

export default EarnMain;