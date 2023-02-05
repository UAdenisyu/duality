import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CryptocurrencyLifecycle from "../../components/CryptocurrencyLifecycle";
import Portfolio from "../../components/Portfolio";
import SummaryPrice from "../../components/SummaryPrice";
import WalletsSpotAccount from "./SpotAccount";

 function Wallets() {
    return (
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <SummaryPrice titleText="Calculated total cost"/>
            <Portfolio/>
            <CryptocurrencyLifecycle titleLeft="Here"/>
        </ScrollView>
    );
}

export default WalletsSpotAccount;