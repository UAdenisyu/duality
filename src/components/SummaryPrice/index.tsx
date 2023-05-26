import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';

import InfoIcon from '../../assets/svgs/infoIcon.svg';

import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from '../../styles/generalComponentStyles';

import ActionsBlock from "./ActionsBlock";
import DetailsBlock from "./DetailsBlock";
import { memo, useMemo } from "react";

type ComponentProps = {
    titleText?: 'Summary price' | 'Estimated cost' | 'Calculated total cost'
}

const SummaryPrice = ({ titleText='Summary price' }: ComponentProps) => {

    const { wrapper, title, infoIcon, borderedSection, valueBig, valueSmall, cryptoName } = generalComponentStyles();
    const { titleTextColor } = useThemeColors();

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
            {
                titleText === 'Estimated cost' ? 
                    useMemo(() => <ActionsBlock/>, []) : 
                titleText === 'Calculated total cost' ?
                    useMemo(() => <DetailsBlock/>, []) : 
                null
            }
        </View>
    );
};

export default memo(observer(SummaryPrice));
