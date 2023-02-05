
import { ScrollView, View } from "react-native";
import CryptocurrencyLifecycle from "../../../components/CryptocurrencyLifecycle";
import IncomeFromInvestments from "../../../components/IncomeFromInvestments";
import SetCryptocurrencyPrice from "../../../components/SetCryptocurrencyPrice";
import TermsOfServiceList from "../../../components/TermsOfServiceList";

const terms = Array(5).fill('You can pay with your actives, free to your sport account');

export default function InputDetails() {
    return (
        <ScrollView>
            <SetCryptocurrencyPrice/>
            <CryptocurrencyLifecycle showDetails={true} titleLeft={'Total'}/>
            <IncomeFromInvestments/>
            <TermsOfServiceList terms={terms}/>
            <View style={{height: 100}}/>
        </ScrollView>
    );
}
