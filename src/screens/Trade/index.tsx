import { View, ScrollView } from "react-native";
import BalanceCryptoDetails from "../../components/BalanceCryptoDetails";
import Portfolio from "../../components/Portfolio";
import SummaryPrice from "../../components/SummaryPrice";
import UserShortInfoBalanceList from "../../components/UserShortInfoBalanceList";


import EthLogo from '../../assets/svgs/EthLogo.svg';
import TotalBalanceListDetails from "../../components/TotalBalanceListDetails";

export default () => {
    return (
        // <LinkButton to={'/earn/input'}/>
        <ScrollView>
            {/* <SummaryPrice format={'details'}/> */}
            {/* <Portfolio/> */}
            {/* <BalanceCryptoDetails currencyName={'Eth'}/> */}
            {/* <TotalBalanceListDetails/> */}
            <View style={{height: 100}}></View>
        </ScrollView>
    );
}