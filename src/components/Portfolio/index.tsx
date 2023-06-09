import Checkbox from 'expo-checkbox';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, memo, useState } from 'react';
import { View, Text } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import PortfolioOption from './PortfolioOption';
import styles from './styles';

const Portfolio: FC = () => {
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
