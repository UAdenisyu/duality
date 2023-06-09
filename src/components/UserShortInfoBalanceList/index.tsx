import { observer } from 'mobx-react-lite';
import { FC, memo, useMemo } from 'react';
import { View } from 'react-native';

import ShortInfoCryptoBalance from './ShortInfoCryptoBalance';
import { useDualityStore } from '../../mobx/appStoreContext';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

const UserShortInfoBalanceList: FC = () => {
    const { cryptoCurrencyFullInfo } = useDualityStore();
    const { wrapper, borderedSection } = useGeneralComponentStyles();

    const cryptoNames = Object.keys(cryptoCurrencyFullInfo);

    const cryptoCurrencyList = useMemo(
        () =>
            cryptoNames.map((cryptoName, i) => (
                <View
                    key={cryptoName}
                    style={[
                        i + 1 >= cryptoNames.length ? null : borderedSection,
                        i === 0 ? null : { paddingTop: 16 },
                    ]}>
                    <ShortInfoCryptoBalance cryptoName={cryptoName} />
                </View>
            )),
        [cryptoNames]
    );

    return <View style={wrapper}>{cryptoCurrencyList}</View>;
};

export default memo(observer(UserShortInfoBalanceList));
