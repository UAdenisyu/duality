import { View, Text, StyleSheet, Pressable } from "react-native";
import ShowMoreBtn from '../ShowMoreBtn';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import LogoNotFound from '../../assets/svgs/logoNotFound.svg';
import EthLogo from '../../assets/svgs/EthLogo.svg';
import UsdtLogo from '../../assets/svgs/UsdtLogo.svg';
import OpenModalScreenButton from "../OpenModalScreenButton";

type options = {
    cryptoName: string,
    yearIncomeMin: number, 
    yearIncomeMax: number, 
    showMoreBtn: boolean,
}

type Data = {
    [key: string]: JSX.Element,
}

const data: Data = {
    'Eth': <EthLogo/>,
    'Usdt': <UsdtLogo/>,
    '': <LogoNotFound/>
}

const termsOfServiceList: Array<string> = [
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
]


export default function InputCryptoInfo({ cryptoName = '', yearIncomeMin = 0, yearIncomeMax = 0, showMoreBtn = true} : options) {
    return (
        <View style={styles.container}>
            <View style={{
                    ...styles.block, 
                    paddingTop: 0,
                    paddingBottom: 16,
                    borderBottomColor: '#4A4B4E',
                    borderBottomWidth: 1,
                }}>
                {data[cryptoName]}
                <Text style={styles.title}>Input: {cryptoName}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.persentsPerYearTitle}>% Per year</Text>
                <Text style={styles.persentsPerYearValue}>{yearIncomeMin} - {yearIncomeMax}</Text>
                <Arrow color='#E2FF9D' style={styles.arrow}/>
            </View>
            { showMoreBtn ? <View style={{ marginTop: 19 }}>
                    <OpenModalScreenButton
                        // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                        targetContentComponent={<ShowMoreBtn/>}
                        textContent = {termsOfServiceList}
                        showCancelButton = {false}/>
                </View> : null }
        </View>
    );
}

