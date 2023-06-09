import CoinsIcon from 'assets/svgs/coins.svg';
import EarnIcon from 'assets/svgs/earn-small.svg';
import useThemeColors from 'hooks/useThemeColors';
import { useDualityStore } from 'mobx/appStoreContext';
import { observer } from 'mobx-react-lite';
import { FC, cloneElement, useCallback } from 'react';
import { Text, View } from 'react-native';
import NumberFormat from 'react-number-format';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

type svgList = {
    [key: string]: JSX.Element;
};

const logoSvgs: svgList = {
    'Spot-account': <CoinsIcon />,
    Earn: <EarnIcon />,
};

interface ComponentProps {
    titleText: string;
}

const PortfolioOption: FC<ComponentProps> = ({ titleText }) => {
    const { totalBalance } = useDualityStore();

    const { title } = useGeneralComponentStyles();
    const { plainTextColor, markedTextColor } = useThemeColors();
    const coloredSvg = cloneElement(logoSvgs[titleText], {
        ...logoSvgs[titleText].props,
        ...markedTextColor,
    });

    const renderText = useCallback(
        (value: string) => (
            <Text style={[styles.balanceCryptoValue, plainTextColor]}>
                {value} ETH
            </Text>
        ),
        [totalBalance]
    );

    return (
        <View style={[styles.section, styles.contentSectionWrapper]}>
            <View style={[styles.contentSection, styles.section]}>
                <View style={styles.contentTitleIcon}>{coloredSvg}</View>
                <Text style={[styles.iconTitle, plainTextColor]}>
                    {titleText}
                </Text>
            </View>
            <View>
                <View style={styles.section} />
                <NumberFormat
                    value={totalBalance.toFixed(2)}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={renderText}
                />
                <Text style={title}>21 727,23 $</Text>
            </View>
        </View>
    );
};

export default observer(PortfolioOption);
