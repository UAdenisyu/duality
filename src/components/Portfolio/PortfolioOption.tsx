import { observer } from 'mobx-react-lite';
import { cloneElement } from 'react';
import { Text, View } from 'react-native';
import NumberFormat from 'react-number-format';

import styles from './styles';
import CoinsIcon from '../../assets/svgs/coins.svg';
import EarnIcon from '../../assets/svgs/earn-small.svg';
import useThemeColors from '../../hooks/useThemeColors';
import { useDualityStore } from '../../mobx/appStoreContext';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

type svgList = {
    [key: string]: JSX.Element;
};

const logoSvgs: svgList = {
    'Spot-account': <CoinsIcon />,
    Earn: <EarnIcon />,
};

const PortfolioOption = ({ titleText }: { titleText: string }) => {
    const { totalBalance } = useDualityStore();

    const { title } = useGeneralComponentStyles();
    const { plainTextColor, markedTextColor } = useThemeColors();
    const coloredSvg = cloneElement(logoSvgs[titleText], {
        ...logoSvgs[titleText].props,
        ...markedTextColor,
    });

    return (
        <View style={[styles.section, styles.contentSectionWrapper]}>
            <View style={[styles.contentSection, styles.section]}>
                <View style={styles.contentTitleIcon}>{coloredSvg}</View>
                <Text style={[styles.iconTitle, plainTextColor]}>
                    {titleText}
                </Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }} />
                <NumberFormat
                    value={totalBalance.toFixed(2)}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(value) => (
                        <Text
                            style={[styles.balanceCryptoValue, plainTextColor]}>
                            {value} ETH
                        </Text>
                    )}
                />
                <Text style={title}>21 727,23 $</Text>
            </View>
        </View>
    );
};

export default observer(PortfolioOption);
