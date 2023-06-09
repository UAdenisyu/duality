import EthLogo from 'assets/svgs/EthLogoSmall.svg';
import MathSquareX from 'assets/svgs/MathSquareX.svg';
import useThemeColors from 'hooks/useThemeColors';
import { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface ComponentProps {
    textContent: string;
}

const BottomTipsSection: FC<ComponentProps> = ({ textContent }) => {
    const { markedTextColor, plainTextColor } = useThemeColors();
    return (
        <View style={styles.incomeInfo}>
            <View style={styles.section}>
                <View style={styles.icon}>
                    <EthLogo />
                </View>
                <Text style={[styles.textInfo, plainTextColor]}>
                    {textContent}
                </Text>
                <View style={styles.icon}>
                    <MathSquareX color={markedTextColor.color} />
                </View>
            </View>
        </View>
    );
};

export default memo(BottomTipsSection);
