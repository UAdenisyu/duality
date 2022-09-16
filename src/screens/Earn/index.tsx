import { ScrollView, Text, View, StyleSheet, UIManager, Pressable } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import TableList from "../../components/TableList";
import LinkButton from "../../navigation/LinkButton";
import SetCryptocurrencyPrice from "../../components/SetCryptocurrencyPrice";
import CryptocurrencyLifecycle from "../../components/CryptocurrencyLifecycle";
import TermsOfServiceList from "../../components/TermsOfServiceList";
import IncomeFromInvestments from "../../components/IncomeFromInvestments";
import OpenCenterModalScreenButton from "../../components/OpenCenterModalScreenButton";

import ShowMoreBtn from "../../components/ShowMoreBtn";

import Arrow from '../../assets/svgs/arrow.svg';
import SummaryPrice from "../../components/SummaryPrice";
import Portfolio from "../../components/Portfolio";
import BalanceCryptoDetails from "../../components/BalanceCryptoDetails";
import OpenBottomModalScreenButton from "../../components/OpenBottomModalScreenButton";
import TotalBalanceListDetails from "../../components/TotalBalanceListDetails";
import UserShortInfoBalanceList from "../../components/UserShortInfoBalanceList";


const modalText=['You cannot cancel a subscription once it has been activated. Always read the information carefully before confirming a subscription.',

'This product is not a Principal Refund Guaranteed product. Be prudent and take risks into account when investing your assets.']

export default function Earn() {
    return (
        <ScrollView>
            <TotaLBalance/>
            <InputCryptoInfo cryptoName = 'Eth' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
            <InputCryptoInfo cryptoName = 'Usdt' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
            <CryptocurrencyLifecycle showDetails={true} titleLeft={'Total'}/>
            <IncomeFromInvestments/>
            <Portfolio/>
            <SetCryptocurrencyPrice/>
            <SummaryPrice titleText="Estimated cost"/>
            <TableList target="Eth"/>
            <TermsOfServiceList terms={['he', 'hu']}/>
            <TotalBalanceListDetails/>
            <UserShortInfoBalanceList/>
            <View style={{ height: 100 }}></View>
        </ScrollView>
    );
}