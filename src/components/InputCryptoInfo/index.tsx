import { View, Text, StyleSheet, Pressable } from "react-native";
import EthLogo from '../../assets/svgs/EthLogo.svg';
import ShowMoreBtn from '../ShowMoreBtn';
import Arrow from '../../assets/svgs/arrow.svg';
import styles from './styles';

export default function InputCryptoInfo() {
    return (
        <View style={styles.container}>
            <View style={{
                    ...styles.block, 
                    paddingTop: 0,
                    paddingBottom: 16,
                    borderBottomColor: '#4A4B4E',
                    borderBottomWidth: 1,
                }}>
                <EthLogo/>
                <Text style={styles.title}>Input: ETH</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.persentsPerYearTitle}>% Per year</Text>
                <Text style={styles.persentsPerYearValue}>5,51% -100,17%</Text>
                <Arrow color='#E2FF9D' style={styles.arrow}/>
            </View>
            <View style={styles.block}>
                <ShowMoreBtn/>
            </View>
        </View>
    );
}

