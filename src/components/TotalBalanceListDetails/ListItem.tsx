import { observer } from 'mobx-react-lite';
import { FC, memo, useMemo } from 'react';
import { Text, View, ViewStyle } from 'react-native';

import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import InfoIcon from '../../assets/svgs/infoIcon.svg';
import useThemeColors from '../../hooks/useThemeColors';
import { useDualityStore } from '../../mobx/appStoreContext';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

type ComponentProps = {
    cryptoName: string;
    bottomBorder?: boolean;
};

const ListItem: FC<ComponentProps> = ({ cryptoName, bottomBorder = true }) => {
    const { cryptoCurrencyFullInfo } = useDualityStore();
    const cryptoInfo = cryptoCurrencyFullInfo[cryptoName][0];
    const cryptoNameBeautified = cryptoName.toUpperCase();

    const { title, infoIcon, valueSmall } = useGeneralComponentStyles();

    const {
        titleTextColor,
        markedTextColor,
        plainTextColor,
        dividingLineColor,
    } = useThemeColors();

    const borderedItemStyle = useMemo<ViewStyle>(
        () =>
            bottomBorder ? [dividingLineColor, { borderBottomWidth: 1 }] : {},
        [bottomBorder]
    );

    return (
        <View style={[styles.itemContainer, borderedItemStyle]}>
            <View style={styles.titleSection}>
                <View style={styles.logo}>{cryptoInfo.logoSvgSmall()}</View>
                <Text style={[styles.cryptoName, plainTextColor]}>
                    {cryptoNameBeautified}
                </Text>
                <View style={[styles.section, styles.timeDeposits]}>
                    <Text style={[title, styles.title]}>
                        Floating term deposits
                    </Text>
                    <View style={infoIcon}>
                        <InfoIcon color={titleTextColor.color} />
                    </View>
                </View>
                <View>
                    <Arrow color={markedTextColor.color} />
                </View>
            </View>
            <View style={[styles.section, styles.amountWrapperMargin]}>
                <Text style={[title, styles.contentTitles]}>
                    Amount {cryptoNameBeautified}
                </Text>
                <Text style={[title, styles.contentTitles]}>
                    Estimated yield
                </Text>
                <Text style={[title, styles.contentTitles]}>Cumulative %</Text>
            </View>
            <View style={[styles.section, styles.detailsWrapper]}>
                <Text style={[valueSmall, styles.contentValues]}>6492,518</Text>
                <Text style={[valueSmall, styles.contentValues]}>1 %</Text>
                <Text
                    style={[valueSmall, styles.contentValues, markedTextColor]}>
                    5, 353214466
                </Text>
            </View>
        </View>
    );
};

export default memo(observer(ListItem));
