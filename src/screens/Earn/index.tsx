import { useMemo } from 'react';
import { ScrollView } from 'react-native';

import InputCryptoInfo from '../../components/InputCryptoInfo';
import TotalBalance from '../../components/TotalBalance';
import { useDualityStore } from '../../mobx/appStoreContext';

const EarnMain = () => {
    const { cryptoCurrencyFullInfo } = useDualityStore();

    const cryptoList = useMemo(() => {
        return Object.keys(cryptoCurrencyFullInfo).map((item) => (
            <InputCryptoInfo
                key={item}
                cryptoName={item}
                yearIncomeMin={5.51}
                yearIncomeMax={100.17}
                showMoreBtn
            />
        ));
    }, [cryptoCurrencyFullInfo]);

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <TotalBalance />
            {cryptoList}
        </ScrollView>
    );
};

export default EarnMain;
