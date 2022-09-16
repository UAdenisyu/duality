import { Text, View, StyleSheet } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import InfoIcon from '../../assets/svgs/infoIcon.svg';
import Arrow from '../../assets/svgs/arrow.svg';

import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from "../../styles/CommonComponentStyles";


const ListItem = observer(({ cryptoName, bottomBorder=true }: { cryptoName: string, bottomBorder?: boolean }) => {
    
    const { cryptoCurrencyFullInfo } = useCounterStore();
    const cryptoInfo = cryptoCurrencyFullInfo[cryptoName][0];
    const cryptoNameBeautified = cryptoName.toUpperCase();

    const { title, infoIcon, valueSmall } = CommonComponentStyles();
    const { grey, selectedItemColor, plainText, componentDividingLine } = useThemeColors();

    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText,
        },
        markedText:{
            color: selectedItemColor,
        },
        bordered: bottomBorder ? { borderBottomWidth: 1, borderBottomColor: componentDividingLine} : {}
    });

    return (
        <View style={[styles.itemContainer, dynamicColors.bordered]}>
            <View style={styles.titleSection}>
                <View style={styles.logo}>
                    {cryptoInfo.logoSvgSmall()}
                </View>
                <Text style={[styles.cryptoName, dynamicColors.plainText]}>{cryptoNameBeautified}</Text>
                <View style={[styles.section, styles.timeDeposits]}>
                    <Text style={[title, styles.title]}>Floating term deposits</Text>
                    <View style={infoIcon}>
                        <InfoIcon color={grey}/>
                    </View>
                </View>
                <View>
                    <Arrow color={selectedItemColor}/>
                </View>
            </View>
            <View style={[styles.section, {marginTop: 13}]}>
                <Text style={[title, styles.contentTitles]}>Amount ({cryptoNameBeautified})</Text>
                <Text style={[title, styles.contentTitles]}>Estimated yield</Text>
                <Text style={[title, styles.contentTitles]}>Cumulative %</Text>
            </View>
            <View style={[styles.section, {marginTop: 4}]}>
                <Text style={[valueSmall, styles.contentValues]}>6492,518</Text>
                <Text style={[valueSmall, styles.contentValues]}>1 %</Text>
                <Text style={[valueSmall, styles.contentValues, dynamicColors.markedText]}>5, 353214466</Text> 
            </View>
        </View>
    );
});

export default ListItem;
