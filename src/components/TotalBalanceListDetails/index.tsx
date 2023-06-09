import { observer } from 'mobx-react-lite';
import { FC, memo, useMemo } from 'react';
import { View } from 'react-native';

import ListItem from './ListItem';
import styles from './styles';
import { useDualityStore } from '../../mobx/appStoreContext';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

const TotalBalanceListDetails: FC = () => {
    const { cryptoCurrencyFullInfo } = useDualityStore();

    const { wrapper } = useGeneralComponentStyles();

    const cryptoNames = Object.keys(cryptoCurrencyFullInfo);

    const cryptoList = useMemo(
        () =>
            cryptoNames.map((cryptoName, i) => (
                <ListItem
                    key={cryptoName}
                    cryptoName={cryptoName}
                    bottomBorder={i + 1 < cryptoNames.length}
                />
            )),
        [cryptoNames]
    );

    return <View style={[wrapper, styles.container]}>{cryptoList}</View>;
};

export default memo(observer(TotalBalanceListDetails));
