import { View } from "react-native";
import Portfolio from "../../components/Portfolio";
import SummaryPrice from "../../components/SummaryPrice";


export default function Wallets() {
    return (
        <View>
            <SummaryPrice/>
            <Portfolio/>
        </View>
    );
}