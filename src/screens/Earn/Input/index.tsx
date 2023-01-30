
import { ScrollView } from "react-native";
import TotaLBalance from "../../../components/TotalBalance";
import InputCryptoInfo from "../../../components/InputCryptoInfo";
import TableList from "../../../components/TableList";
import { useNavigation } from "@react-navigation/native";

export default function EarnInput() {

    const navigation = useNavigation();

    const { cryptoName } = navigation.getState().routes.find(({name} : {name: string}) => name === "Earn/Input")?.params;

    return (
        <ScrollView>
            <TotaLBalance selectedCrypto={cryptoName}/>
            <InputCryptoInfo cryptoName={cryptoName} yearIncomeMin={5.51} yearIncomeMax={100.17}/>
            <TableList target={cryptoName}/>
        </ScrollView>
    );
}
