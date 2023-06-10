import InputCryptoInfo from 'components/InputCryptoInfo';
import TotalBalance from 'components/TotalBalance';
import { FC, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { useDualityStore } from 'stores/appStoreContext';

const EarnMain: FC = () => {
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
