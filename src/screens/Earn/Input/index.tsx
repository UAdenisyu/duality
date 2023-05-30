import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';

import InputCryptoInfo from '../../../components/InputCryptoInfo';
import TableList from '../../../components/TableList';
import TotalBalance from '../../../components/TotalBalance';

export default function EarnInput({ route }: any) {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Input ' + route.params.cryptoName,
        });
    }, []);

    const { cryptoName } = route.params;

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <TotalBalance selectedCrypto={cryptoName} />
            <InputCryptoInfo
                cryptoName={cryptoName}
                yearIncomeMin={5.51}
                yearIncomeMax={100.17}
            />
            <TableList target={cryptoName} />
        </ScrollView>
    );
}
