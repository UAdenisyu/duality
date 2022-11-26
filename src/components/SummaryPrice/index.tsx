import { View, Text, Pressable } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';

import InfoIcon from '../../assets/svgs/infoIcon.svg';

import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from '../../styles/generalComponentStyles';
import OpenBottomModalScreenButton from "../OpenBottomModalScreenButton";

import Arrow from '../../assets/svgs/arrow.svg';

type Props = {
    titleText?: 'Summary price' | 'Estimated cost' | 'Calculated total cost'
}

const SummaryPrice = ({ titleText='Summary price' }: Props) => {

    const { wrapper, title, infoIcon, borderedSection, valueBig, valueSmall, cryptoName } = generalComponentStyles();
    const { warningText, markedItemBackgroundColor, darkTextColor, plainTextColor, titleTextColor, markedTextColor, lightBorderedItem } = useThemeColors();


    const actionsBlock = <View style={styles.detailsWrapper}>            
            <View style={styles.section}>
                <Text style={[title, styles.detailsTitle]}>PnL for today</Text>
                <View style={infoIcon}>
                    <InfoIcon color={titleTextColor.color}/>
                </View>
            </View>
            <Text style={[title, styles.linesPadding, warningText]}>-7,39 $/-0,03%</Text>
            <View style={[styles.section, styles.depositAndWithdraw]}>
                <OpenBottomModalScreenButton
                        // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                        targetContentComponent={
                            <View 
                                style={[styles.button, markedItemBackgroundColor]}>
                                <Text style={[styles.buttonText, darkTextColor]}>Deposit</Text>
                            </View>
                        }
                        titleText = {'Choose a currency'}/>
                <OpenBottomModalScreenButton
                        // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                        targetContentComponent={
                            <View 
                                style={[styles.button, styles.withdrawBtn]}>
                                <Text style={[styles.buttonText, plainTextColor]}>Withdraw</Text>
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
                <Text style={[title, styles.linesPadding, markedTextColor]}>+0,17431341</Text>
                <Text style={[title, styles.linesPadding, markedTextColor, { marginLeft: 32 }]}>+0,000231</Text>            
            </View>
            <Pressable style={[wrapper, styles.subscribeToEarnBtn, styles.section]}>
                <Text style={[styles.buttonText, plainTextColor]}>Subcribe to Earn</Text>
                <View style={styles.arrow}><Arrow color={plainTextColor.color}/></View>
            </Pressable>
            <Pressable style={[styles.transactionsHistory, lightBorderedItem]}>
                <Text style={[styles.buttonText, plainTextColor]}>Transactions history</Text>
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
                        <InfoIcon color={titleTextColor.color}/>
                    </View>
                </View>
            </View>
            {titleText === 'Estimated cost' ? 
                actionsBlock : 
                titleText === 'Calculated total cost' ? detailsBlock : null}
        </View>
    );
};

export default observer(SummaryPrice);
