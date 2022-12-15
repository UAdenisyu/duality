import { View, Text } from "react-native";
import styles from "./styles";

import useThemeColors from "../../hooks/useThemeColors";

import generalComponentStyles from "../../styles/generalComponentStyles";

import InfoIcon from "../../assets/svgs/infoIcon.svg";

interface ComponentProps {
    showDetails?: boolean,
    titleLeft: string, 
    titleRight?: string | number | null,
}

export default function CryptocurrencyLifecycle({ titleLeft, titleRight = null, showDetails = true } : ComponentProps) {

    const { markedItemBorderColor, plainTextColor } = useThemeColors();
    const { wrapper, borderedSection, title, titleLight, markedText, titleSmall } = generalComponentStyles();

    const showDetailsClasslist = showDetails ? [borderedSection, styles.tableWrapper] : styles.tableWrapper

    const rowItem = (titleName: string, value: string, marker: boolean = true, titleYear: boolean = false) => (
        <View style={styles.sectionNested}>
            { marker ? <View style={[markedItemBorderColor, styles.marker]}/> : null}
            <View style={[styles.titles, marker ? null : styles.titlesBottom]}>
                <Text style={[titleSmall, plainTextColor]}>
                    {titleName}
                </Text>
                { titleYear ? 
                    <InfoIcon color={plainTextColor.color} style={styles.infoIcon}/>
                    : null }
            </View>
            <View style={styles.values}>
                <Text style={[markedText, titleYear ? null : plainTextColor]}>
                    {value}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={wrapper}>
            <View style={styles.section}>
                <Text style={title}>
                    {titleLeft}
                </Text>
                {titleRight ? <Text style={titleLight}>
                    {titleRight}
                </Text> : null}
            </View>
            <View style={showDetailsClasslist}>
                {rowItem('Following date', '2022-07-05')}
                <View style={[styles.spaceFillingLine, markedItemBorderColor]}/>
                {rowItem('Settlement date', '2022-07-08 10:00')}
                <View style={[styles.spaceFillingLine, markedItemBorderColor]}/>
                {rowItem('Distribution', '2022-07-08 16:00')}
            </View>
            {showDetails ? <View style={styles.bottomSection}>
                {rowItem('Spot price ETH', '1104,15', false)}
                {rowItem('Target price', '1050', false)}
                {rowItem('% Year', '112,32 %', false, true)}
            </View> : null}
            

        </View>
    );
}
