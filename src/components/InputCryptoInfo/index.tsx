import { View, Text, StyleSheet, Pressable } from "react-native";
import ShowMoreBtn from '../ShowMoreBtn';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import LogoNotFound from '../../assets/svgs/logoNotFound.svg';

type options = {
    cryptoName: string,
    yearIncomeMin: number, 
    yearIncomeMax: number, 
    showMoreBtn: boolean,
}

export default function InputCryptoInfo({ cryptoName = 'Eth', yearIncomeMin = 0, yearIncomeMax = 0, showMoreBtn = true} : options) {
    return (
        <View style={styles.container}>
            <View style={{
                    ...styles.block, 
                    paddingTop: 0,
                    paddingBottom: 16,
                    borderBottomColor: '#4A4B4E',
                    borderBottomWidth: 1,
                }}>
                <LogoNotFound/>
                <Text style={styles.title}>Input: {cryptoName}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.persentsPerYearTitle}>% Per year</Text>
                <Text style={styles.persentsPerYearValue}>{yearIncomeMin} - {yearIncomeMax}</Text>
                <Arrow color='#E2FF9D' style={styles.arrow}/>
            </View>
            { showMoreBtn ? <View style={styles.block}><ShowMoreBtn/></View> : null }
        </View>
    );
}

