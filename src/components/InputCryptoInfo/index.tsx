import { useNavigation } from '@react-navigation/native';
import EthLogo from 'assets/svgs/EthLogo.svg';
import UsdtLogo from 'assets/svgs/UsdtLogo.svg';
import Arrow from 'assets/svgs/arrow.svg';
import LogoNotFound from 'assets/svgs/logoNotFound.svg';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';
import { EarnScreenNavigationProp } from 'types/navigationStacks';

import styles from './styles';
import ShowMoreBtn from '../ShowMoreBtn';

interface ComponentProps {
    cryptoName: string;
    yearIncomeMin: number;
    yearIncomeMax: number;
    showMoreBtn?: boolean;
}

type SvgArray = {
    [key: string]: JSX.Element;
};

const cryptoNamesvgArray: SvgArray = {
    Eth: <EthLogo />,
    Usdt: <UsdtLogo />,
    '': <LogoNotFound />,
};

const InputCryptoInfo: FC<ComponentProps> = ({
    cryptoName = '',
    yearIncomeMin = 0,
    yearIncomeMax = 0,
    showMoreBtn = false,
}) => {
    const { plainTextColor, markedItemBorderColor } = useThemeColors();
    const { wrapper, valueBig, titleLight, markedText, borderedSection } =
        useGeneralComponentStyles();
    const navigation = useNavigation<EarnScreenNavigationProp>();

    const showMorePressed = () => {
        navigation.navigate('EarnInput', { cryptoName });
    };

    const showMoreBtnStyle = useMemo(
        () => ({
            marginTop: 19,
        }),
        []
    );

    return (
        <View style={wrapper}>
            <View style={[styles.titleSection, borderedSection]}>
                {cryptoNamesvgArray[cryptoName]}
                <Text style={[valueBig, styles.title, plainTextColor]}>
                    Input: {cryptoName}
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={titleLight}>% Per year</Text>
                <Text style={[markedText, styles.persentsPerYear]}>
                    {yearIncomeMin} - {yearIncomeMax}
                </Text>
                <Arrow
                    color={markedItemBorderColor.borderColor}
                    style={styles.arrow}
                />
            </View>
            {!showMoreBtn || (
                <ShowMoreBtn
                    onPress={showMorePressed}
                    wrapperStyle={showMoreBtnStyle}
                />
            )}
        </View>
    );
};

export default memo(observer(InputCryptoInfo));
