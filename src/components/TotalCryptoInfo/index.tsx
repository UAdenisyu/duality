import { View, Text } from "react-native";
import styles from "./styles";

import useThemeColors from "../../hooks/useThemeColors";
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';

import CommonComponentStyles from "../../styles/CommonComponentStyles";
import BottomBordered from "../../styles/BottomBordered";

import InfoIcon from "../../assets/svgs/infoIcon.svg"

export default function TotalCryptoInfo() {
    const themeColors = useThemeColors();
    
    const componentStyles = CommonComponentStyles();
    const componentSectionBottomBordered = BottomBordered();

    return (
        <View style={componentStyles.wrapper}>
            <Text style={[styles.componentTitle, {color: themeColors.grey}]}>
                Total
            </Text>
            <View style={[componentSectionBottomBordered.bordered, styles.tableWrapper]}>
                <View style={styles.section}>
                    <View style={[styles.marker, {borderColor: themeColors.selectedItemColor}]}/>
                    <View style={styles.titles}>
                        <Text style={[{color: themeColors.commonText}, styles.titlesText]}>
                            Following date
                        </Text>
                    </View>
                    <View style={styles.values}>
                        <Text style={[{color: themeColors.commonText}, styles.valuesText]}>
                            2022-07-05
                        </Text>
                    </View>
                </View>
                <View style={[styles.spaceFillingLine, {borderColor: themeColors.selectedItemColor}]}/>
                <View style={styles.section}>
                    <View style={[styles.marker, {borderColor: themeColors.selectedItemColor}]}/>
                    <View style={styles.titles}>
                        <Text style={[{color: themeColors.commonText}, styles.titlesText]}>
                            Settlement date
                        </Text>
                    </View>
                    <View style={styles.values}>
                        <Text style={[{color: themeColors.commonText}, styles.valuesText]}>
                            2022-07-08 10:00
                        </Text>
                    </View>
                </View>
                <View style={[styles.spaceFillingLine, {borderColor: themeColors.selectedItemColor}]}/>
                <View style={styles.section}>
                    <View style={[styles.marker, {borderColor: themeColors.selectedItemColor}]}/>
                    <View style={styles.titles}>
                        <Text style={[{color: themeColors.commonText}, styles.titlesText]}>
                            Distribution
                        </Text>
                    </View>
                    <View style={styles.values}>
                        <Text style={[{color: themeColors.commonText}, styles.valuesText]}>
                            2022-07-08 16:00
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <View style={[styles.section, styles.bottomSectionRow]}>
                    <Text style={[{color: themeColors.commonText}, styles.titlesText]}>
                        Spot price ETH
                    </Text>
                    <Text style={[{color: themeColors.commonText}, styles.valuesText]}>
                        1104,15
                    </Text>
                </View>
                <View style={[styles.section, styles.bottomSectionRow]}>
                    <Text style={[{color: themeColors.commonText}, styles.titlesText]}>
                        Target price
                    </Text>
                    <Text style={[{color: themeColors.commonText}, styles.valuesText]}>
                        1050
                    </Text>
                </View>
                <View style={[styles.section, styles.bottomSectionRow]}>
                    <View style={styles.section}>
                        <Text style={[{color: themeColors.commonText}, styles.titlesText, { marginRight: 7 }]}>
                            % Year
                        </Text>
                        <View style={{justifyContent: 'center'}}>
                            <InfoIcon/>
                        </View>
                    </View>
                    <Text style={[{color: themeColors.selectedItemColor}, styles.valuesText]}>
                        112,32 %
                    </Text>
                </View>
            </View>

        </View>
    );
}
