import { memo } from 'react';
import { Text } from 'react-native';

import styles from './styles';
import useThemeColors from '../../hooks/useThemeColors';

type ComponentProps = {
    textContent: string;
    index: number;
};

const TermClause = ({ textContent, index }: ComponentProps) => {
    const { plainTextColor } = useThemeColors();

    const textStyle = [
        styles.text,
        plainTextColor,
        index > 0 ? { marginTop: 16 } : null,
    ];

    return (
        <Text style={textStyle}>
            {index.toString()}. {textContent}
        </Text>
    );
};

export default memo(TermClause);
