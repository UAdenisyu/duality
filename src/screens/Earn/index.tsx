import { ScrollView } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import TableList from "../../components/TableList";

export default function Earn() {
    return (
        <ScrollView>
            <TotaLBalance/>
            <InputCryptoInfo/>
            <TableList/>
        </ScrollView>
    );
}