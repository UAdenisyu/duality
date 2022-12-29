import { ScrollView, View } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import UserShortInfoBalanceList from "../../components/UserShortInfoBalanceList";
import IncomeFromInvestments from "../../components/IncomeFromInvestments";
import TableList from "../../components/TableList";



export default function EarnMain() {
    return (
        <ScrollView>
            <TotaLBalance/>
            <InputCryptoInfo cryptoName = 'Eth' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
            <UserShortInfoBalanceList/>
            <View style={{height: 100}}/>
        </ScrollView>
    );
}