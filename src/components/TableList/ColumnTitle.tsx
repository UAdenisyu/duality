import useThemeColors from 'hooks/useThemeColors';
import { FC, memo } from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface ComponentProps {
    textContent: string;
}

const ColumnTitle: FC<ComponentProps> = ({ textContent }) => {
    const { tableColumnTitleColor } = useThemeColors();
    return (
        <Text style={[styles.headerText, tableColumnTitleColor]}>
            {textContent}
        </Text>
    );
};

export default memo(ColumnTitle);
