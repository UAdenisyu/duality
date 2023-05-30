import { Text, View } from 'react-native';

import styles from './styles';
import useThemeColors from '../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

type ComponentProps = {
    titleName: string;
    value: string;
    alignRight?: boolean;
};

const InfoBlock = ({ titleName, value, alignRight }: ComponentProps) => {
    const { title } = useGeneralComponentStyles();
    const { cancelText, plainTextColor } = useThemeColors();

    return (
        <View style={alignRight ? { alignItems: 'flex-end' } : null}>
            <Text style={[title, { fontSize: 12 }]}>{titleName}</Text>
            <Text
                style={[
                    styles.componentTitle,
                    { fontSize: 14 },
                    value === 'Canceled' ? cancelText : plainTextColor,
                ]}>
                {value}
            </Text>
        </View>
    );
};

export default InfoBlock;
