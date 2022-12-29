import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CryptocurrencyLifecycle from "../../components/CryptocurrencyLifecycle";
import Portfolio from "../../components/Portfolio";
import SummaryPrice from "../../components/SummaryPrice";
import WalletsSpotAccount from "./SpotAccount";

 function Wallets() {
    return (
        <ScrollView>
            <SummaryPrice titleText="Calculated total cost"/>
            <Portfolio/>
            <CryptocurrencyLifecycle titleLeft="Here"/>
            <View style={{height: 100}}></View>
        </ScrollView>
    );
}

export default WalletsSpotAccount;