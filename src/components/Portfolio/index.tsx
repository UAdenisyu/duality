import Checkbox from 'expo-checkbox';
import { observer } from 'mobx-react-lite';
import { memo, useState } from 'react';
import { View, Text } from 'react-native';

import PortfolioOption from './PortfolioOption';
import styles from './styles';
import useThemeColors from '../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

const Portfolio = () => {
    const { wrapper, title, cryptoName, borderedSection } =
        useGeneralComponentStyles();
    const { titleTextColor, plainTextColor } = useThemeColors();
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={wrapper}>
            <Text style={[title, plainTextColor]}>Portfolio</Text>
            <View style={[styles.section, styles.hideZeroBalances]}>
                <Checkbox
                    style={[styles.checkbox]}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={titleTextColor.color}
                />
                <Text style={[cryptoName, styles.checkboxText]}>
                    Hide zero balance's
                </Text>
            </View>
            <PortfolioOption titleText="Spot-account" />
            <View style={borderedSection} />
            <PortfolioOption titleText="Earn" />
        </View>
    );
};

export default memo(observer(Portfolio));
