
import { ScrollView } from "react-native";
import TotaLBalance from "../../../components/TotalBalance";
import InputCryptoInfo from "../../../components/InputCryptoInfo";
import TableList from "../../../components/TableList";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function EarnInput({route} : any) {

    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({ headerTitle: 'Input ' + route.params.cryptoName});
    }, []);

    const {cryptoName} = route.params;

    return (
        <ScrollView>
            <TotaLBalance selectedCrypto={cryptoName}/>
            <InputCryptoInfo cryptoName={cryptoName} yearIncomeMin={5.51} yearIncomeMax={100.17}/>
            <TableList target={cryptoName}/>
        </ScrollView>
    );
}
