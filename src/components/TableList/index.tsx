import { useMemo } from 'react';
import { View, Text } from 'react-native';

import TableListItem from './TableListItem';
import styles from './styles';
import useThemeColors from '../../hooks/useThemeColors';
import { useDualityStore } from '../../mobx/appStoreContext';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

type ComponentProps = {
    target: string;
};

export default function TableList({ target }: ComponentProps) {
    const { tableColumnTitleColor, darkTextColor } = useThemeColors();
    const { cryptoCurrencyFullInfo } = useDualityStore();

    const items = useMemo(
        () =>
            cryptoCurrencyFullInfo[target].map((item, i) => (
                <TableListItem
                    key={Math.random()}
                    backgroundColor={i % 2 ? darkTextColor.color : '#34363A'}
                    data={item}
                />
            )),
        [target]
    );

    const { wrapper } = useGeneralComponentStyles();

    const columnTitle = (textContent: string) => (
        <Text style={[styles.headerText, tableColumnTitleColor]}>
            {textContent}
        </Text>
    );

    return (
        <View style={[wrapper, styles.container]}>
            <View style={styles.headerWrapper}>
                {columnTitle('% Per year')}
                {columnTitle('Target price')}
                {columnTitle('Completion time')}
            </View>
            {items}
        </View>
    );
}
