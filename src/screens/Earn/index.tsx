import { ScrollView, View } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import UserShortInfoBalanceList from "../../components/UserShortInfoBalanceList";
import IncomeFromInvestments from "../../components/IncomeFromInvestments";



export default function EarnMain({ navigation }: { navigation: any }) {
    return (
        <ScrollView>
            <TotaLBalance/>
            <InputCryptoInfo cryptoName = 'Eth' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true} navigation={navigation}/>
            <InputCryptoInfo cryptoName = 'Usdt' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true} navigation={navigation}/>
            <View style={{height: 100}}/>
        </ScrollView>
    );
}