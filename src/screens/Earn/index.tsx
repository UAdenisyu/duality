import { ScrollView, Text, View, StyleSheet, UIManager, Pressable } from "react-native";
import TotaLBalance from "../../components/TotalBalance";
import InputCryptoInfo from "../../components/InputCryptoInfo";
import TableList from "../../components/TableList";
import LinkButton from "../../navigation/LinkButton";
import SetCryptocurrencyPrice from "../../components/SetCryptocurrencyPrice";
import CryptocurrencyLifecycle from "../../components/CryptocurrencyLifecycle";
import TermsOfServiceList from "../../components/TermsOfServiceList";
import IncomeFromInvestments from "../../components/IncomeFromInvestments";
import OpenModalScreenButton from "../../components/OpenModalScreenButton";

import ShowMoreBtn from "../../components/ShowMoreBtn";

import Arrow from '../../assets/svgs/arrow.svg';

const termsOfServiceList: Array<string> = [
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
]

const modalText=['You cannot cancel a subscription once it has been activated. Always read the information carefully before confirming a subscription.',

'This product is not a Principal Refund Guaranteed product. Be prudent and take risks into account when investing your assets.']

export default function Earn() {
    return (
        <ScrollView>
            <TotaLBalance/>
            {/* <InputCryptoInfo cryptoName = 'Eth' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
            <InputCryptoInfo cryptoName = 'Usdt' yearIncomeMin={5.51} yearIncomeMax={100.17} showMoreBtn={true}/>
            <SetCryptocurrencyPrice/>
            <CryptocurrencyLifecycle showDetails={false} titleLeft={'Total'}/> 
            <TermsOfServiceList terms={termsOfServiceList}/>
            <IncomeFromInvestments/> */}
            <OpenModalScreenButton
                // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                targetContentComponent={<ShowMoreBtn/>}
                textContent = {termsOfServiceList}
                showCancelButton = {true}
            />
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        paddingHorizontal: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#646468',
        borderRadius: 16,
        flexDirection: 'row',
    },
    text: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16,
    },
    arrow: {
        marginLeft: 20,
    }
});