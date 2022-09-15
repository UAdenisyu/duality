import { View, Text, Pressable } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import InfoIcon from '../../assets/svgs/infoIcon.svg';

import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from '../../styles/CommonComponentStyles';
import BottomBorderedStyle from "../../styles/BottomBorderedStyle";
import OpenBottomModalScreenButton from "../OpenBottomModalScreenButton";


const SummaryPrice = observer(({ showDetails=false }: {showDetails?: boolean}) => {
    const componentStyles = CommonComponentStyles();
    const { grey, warning, selectedItemColor, extraDark, commonText } = useThemeColors();
    const { bordered } = BottomBorderedStyle();


    return (
        <View style={[componentStyles.wrapper, {marginTop: 0}]}>
            <View style={showDetails ? bordered : null}>
                <Text style={componentStyles.title}>Summary price</Text>
                <View style={styles.section}>
                    <Text style={componentStyles.valueBig}>1,04500</Text>
                    <Text style={componentStyles.cryptoName}>ETH</Text>
                </View>
                <View style={styles.section}>
                    <Text style={componentStyles.valueSmall}>21 727,23 $</Text>
                    <View style={componentStyles.infoIcon}>
                        <InfoIcon color={grey}/>
                    </View>
                </View>
            </View>
            {showDetails ? 
                <View style={styles.detailsWrapper}>            
                    <View style={styles.section}>
                        <Text style={[componentStyles.title, {fontSize: 12}]}>PnL for today</Text>
                        <View style={componentStyles.infoIcon}>
                            <InfoIcon color={grey}/>
                        </View>
                    </View>
                    <Text style={[componentStyles.title, {color: warning, marginTop: 4}]}>-7,39 $/-0,03%</Text>
                    <View style={[styles.section, {marginTop: 14, justifyContent: 'space-between'}]}>
                        <View>
                            <OpenBottomModalScreenButton
                                // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                                targetContentComponent={
                                    <View 
                                        style={[styles.button, {backgroundColor: selectedItemColor}]}>
                                        <Text style={[styles.buttonText, {color: extraDark}]}>Deposit</Text>
                                    </View>
                                }
                                titleText = {'Choose a currency'}/>
                        </View>
                        <View>
                            <OpenBottomModalScreenButton
                                // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                                targetContentComponent={
                                    <View 
                                        style={[styles.button, {backgroundColor: 'rgba(100, 100, 104, 0.34)'}]}
                                        >
                                        <Text style={[styles.buttonText, {color: commonText}]}>Withdraw</Text>
                                    </View>
                                }
                                titleText = {'Choose a network'}
                                promptText = {'Make sure the network you choose for input matches the network for output\n Otherwise, all assets will be lost'}/>
                        </View>

                    </View>

                </View> : 
                null}
        </View>
    );
});

export default SummaryPrice;
