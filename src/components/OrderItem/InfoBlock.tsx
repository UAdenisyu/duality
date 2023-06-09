import useThemeColors from 'hooks/useThemeColors';
import { FC, useMemo } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

type ComponentProps = {
    titleName: string;
    value: string;
    alignRight?: boolean;
};

const InfoBlock: FC<ComponentProps> = ({ titleName, value, alignRight }) => {
    const { title } = useGeneralComponentStyles();
    const { cancelText, plainTextColor } = useThemeColors();

    const wrapperStyle = useMemo<ViewStyle>(
        () => ({ alignItems: alignRight ? 'flex-end' : 'flex-start' }),
        [alignRight]
    );

    return (
        <View style={wrapperStyle}>
            <Text style={[title, styles.tinyFontSize]}>{titleName}</Text>
            <Text
                style={[
                    styles.componentTitle,
                    styles.smallFontSize,
                    value === 'Canceled' ? cancelText : plainTextColor,
                ]}>
                {value}
            </Text>
        </View>
    );
};

export default InfoBlock;
