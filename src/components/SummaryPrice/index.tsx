import { View, Text, Pressable, StyleSheet } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';

import InfoIcon from '../../assets/svgs/infoIcon.svg';

import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from '../../styles/CommonComponentStyles';
import OpenBottomModalScreenButton from "../OpenBottomModalScreenButton";

import Arrow from '../../assets/svgs/arrow.svg';


const SummaryPrice = observer(({ titleText='Summary price' }: {titleText?: 'Summary price' | 'Estimated cost' | 'Calculated total cost'}) => {

    const { wrapper, title, infoIcon, borderedSection, valueBig, valueSmall, cryptoName } = CommonComponentStyles();
    const { grey, warning, selectedItemColor, extraDark, plainText } = useThemeColors();


    const dynamicColors = StyleSheet.create({
        warningText:{
            color: warning,
        },
        depositBtn: {
            backgroundColor: selectedItemColor,
        },
        depositBtnText:{
            color: extraDark
        },
        withdrawBtn:{
            backgroundColor: 'rgba(100, 100, 104, 0.34)'
        },
        plainText:{
            color: plainText
        },
        markedText:{
            color: selectedItemColor
        },
        transactionsHistoryBnt:{
            borderColor: plainText,
        }
    });


    const actionsBlock = <View style={styles.detailsWrapper}>            
            <View style={styles.section}>
                <Text style={[title, styles.detailsTitle]}>PnL for today</Text>
                <View style={infoIcon}>
                    <InfoIcon color={grey}/>
                </View>
            </View>
            <Text style={[title, styles.linesPadding, dynamicColors.warningText]}>-7,39 $/-0,03%</Text>
            <View style={[styles.section, styles.depositAndWithdraw]}>
                <OpenBottomModalScreenButton
                        // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                        targetContentComponent={
                            <View 
                                style={[styles.button, dynamicColors.depositBtn]}>
                                <Text style={[styles.buttonText, dynamicColors.depositBtnText]}>Deposit</Text>
                            </View>
                        }
                        titleText = {'Choose a currency'}/>
                <OpenBottomModalScreenButton
                        // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                        targetContentComponent={
                            <View 
                                style={[styles.button, dynamicColors.withdrawBtn]}>
                                <Text style={[styles.buttonText, dynamicColors.plainText]}>Withdraw</Text>
                            </View>
                        }
                        titleText = {'Choose a network'}
                        promptText = {'Make sure the network you choose for input matches the network for output\n Otherwise, all assets will be lost'}/>
            </View>
        </View>;

        
    const detailsBlock = <View style={styles.detailsWrapper}>            
            <View style={styles.section}>
                <Text style={[title, styles.detailsTitle]}>Profit for 30 days (ETH)</Text>
                <Text style={[title, styles.detailsTitle2]}>PnL for last day...</Text>
            </View>
            <View style={styles.section}>
                <Text style={[title, styles.linesPadding, dynamicColors.markedText]}>+0,17431341</Text>
                <Text style={[title, styles.linesPadding, dynamicColors.markedText, { marginLeft: 32 }]}>+0,000231</Text>            
            </View>
            <Pressable style={[wrapper, styles.subscribeToEarnBtn, styles.section]}>
                <Text style={[styles.buttonText, dynamicColors.plainText]}>Subcribe to Earn</Text>
                <View style={styles.arrow}><Arrow color={plainText}/></View>
            </Pressable>
            <Pressable style={[styles.transactionsHistory, dynamicColors.transactionsHistoryBnt]}>
                <Text style={[styles.buttonText, dynamicColors.plainText]}>Transactions history</Text>
            </Pressable>
        </View>;


    return (
        <View style={[wrapper, {marginTop: 0}]}>
            <View style={titleText !== 'Summary price' ? borderedSection : null}>
                <Text style={title}>{titleText}</Text>
                <View style={styles.section}>
                    <Text style={valueBig}>1,04500</Text>
                    <Text style={cryptoName}>ETH</Text>
                </View>
                <View style={styles.section}>
                    <Text style={valueSmall}>21 727,23 $</Text>
                    <View style={infoIcon}>
                        <InfoIcon color={grey}/>
                    </View>
                </View>
            </View>
            {titleText === 'Estimated cost' ? 
                actionsBlock : 
                titleText === 'Calculated total cost' ? detailsBlock : null}
        </View>
    );
});

export default SummaryPrice;
