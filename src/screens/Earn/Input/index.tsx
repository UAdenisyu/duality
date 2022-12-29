
import { ScrollView } from "react-native";
import TotaLBalance from "../../../components/TotalBalance";
import InputCryptoInfo from "../../../components/InputCryptoInfo";
import TableList from "../../../components/TableList";

export default function EarnInput() {
    return (
        <ScrollView>
            <TotaLBalance/>
            <InputCryptoInfo cryptoName='Eth' yearIncomeMin={5.51} yearIncomeMax={100.17}/>
            <TableList target='Eth'/>
        </ScrollView>
    );
}
