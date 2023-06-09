import useThemeColors from 'hooks/useThemeColors';
import { FC, memo, useMemo } from 'react';
import { Text } from 'react-native';

import styles from './styles';

type ComponentProps = {
    textContent: string;
    index: number;
};

const TermClause: FC<ComponentProps> = ({ textContent, index }) => {
    const { plainTextColor } = useThemeColors();

    const textStyle = useMemo(
        () => [styles.text, plainTextColor, index > 0 && { marginTop: 16 }],
        [index]
    );

    return (
        <Text style={textStyle}>
            {index.toString()}. {textContent}
        </Text>
    );
};

export default memo(TermClause);
