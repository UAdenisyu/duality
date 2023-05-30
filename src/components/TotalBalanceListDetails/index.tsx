import { observer } from 'mobx-react-lite';
import { memo } from 'react';
import { View } from 'react-native';

import ListItem from './ListItem';
import styles from './styles';
import { useDualityStore } from '../../mobx/appStoreContext';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

const TotalBalanceListDetails = () => {
    const { cryptoCurrencyFullInfo } = useDualityStore();

    const { wrapper } = useGeneralComponentStyles();

    const cryptoNames = Object.keys(cryptoCurrencyFullInfo);

    return (
        <View style={[wrapper, styles.container]}>
            {cryptoNames.map(
                (cryptoName, i) => (
                    <ListItem
                        key={cryptoName}
                        cryptoName={cryptoName}
                        bottomBorder={i + 1 < cryptoNames.length}
                    />
                ),
                [cryptoNames]
            )}
        </View>
    );
};

export default memo(observer(TotalBalanceListDetails));
