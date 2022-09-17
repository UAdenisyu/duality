import { View, Text, Pressable, StyleSheet } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';

import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from '../../styles/CommonComponentStyles';


type Props = {
    contentType: 'list' | 'history'
    cryptoNameTitle: string,
    dateTime: string,
    limitBuy: number | 'Canceled',
    sum: string,
    price: number,
}

const OrderItem = observer(({contentType, cryptoNameTitle, dateTime, limitBuy, sum, price}: Props) => {

    const { wrapper, title, infoIcon, borderedSection, valueBig, valueSmall, cryptoName } = CommonComponentStyles();
    const { componentDividingLine, cancel, plainText, buttonBackground } = useThemeColors();


    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText
        },
        canceledText:{
            color: cancel,
        },
        cancelBtn:{
            backgroundColor: buttonBackground.danger,
        },
        titleSectionBorder:{
            borderBottomColor: componentDividingLine,
        }
    });


    function infoBlock(titleName: string, value: string, alignRight?: boolean){
        return (
            <View style={alignRight ? {alignItems: 'flex-end'} : null}>
                <Text style={[title, {fontSize: 12}]}>
                    {titleName}
                </Text>
                <Text style={[styles.componentTitle, {fontSize: 14}, value === 'Canceled' ? dynamicColors.canceledText : dynamicColors.plainText]}>
                    {value}
                </Text>
            </View>
        )
    } 

    const limitBuyBeatifiedValue = limitBuy !== 'Canceled' ? limitBuy + '%' : 'Canceled';

    return (
        <View style={wrapper}>
            <View style={[styles.titleSection, styles.section, dynamicColors.titleSectionBorder]}>
                <Text style={[styles.componentTitle, dynamicColors.plainText]}>
                    {cryptoNameTitle}
                </Text>
                <Text style={title}>
                    {dateTime}
                </Text>
            </View>
            <View style={[styles.section, styles.infoBlock]}>
                    {infoBlock('Limit/Buy', limitBuyBeatifiedValue)}
                    {infoBlock('Sum', sum)}
                    {infoBlock('Price', price.toFixed(2).toString(), true)}
            </View>
            {contentType === 'list' ? 
                <View style={[styles.btn, dynamicColors.cancelBtn]}>
                    <Text style={[styles.btnText, dynamicColors.plainText]}>
                        Cancel
                    </Text>
                </View> : null}

        </View>
    );
});

export default OrderItem;
