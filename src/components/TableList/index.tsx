import useThemeColors from 'hooks/useThemeColors';
import { useDualityStore } from 'mobx/appStoreContext';
import { useMemo, memo, FC } from 'react';
import { View } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import ColumnTitle from './ColumnTitle';
import TableListItem from './TableListItem';
import styles from './styles';

type ComponentProps = {
    target: string;
};

const TableList: FC<ComponentProps> = ({ target }) => {
    const { darkTextColor } = useThemeColors();
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

    return (
        <View style={[wrapper, styles.container]}>
            <View style={styles.headerWrapper}>
                <ColumnTitle textContent="% Per year" />
                <ColumnTitle textContent="Target price" />
                <ColumnTitle textContent="Completion time" />
            </View>
            {items}
        </View>
    );
};

export default memo(TableList);
