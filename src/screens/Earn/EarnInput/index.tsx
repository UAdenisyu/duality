import { useNavigation, useRoute } from '@react-navigation/native';
import InputCryptoInfo from 'components/InputCryptoInfo';
import TableList from 'components/TableList';
import TotalBalance from 'components/TotalBalance';
import { FC, useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import {
    EarnInputScreenNavigationProp,
    EarnInputScreenRouteProp,
} from 'types/navigationStacks';

const EarnInput: FC = () => {
    const navigation = useNavigation<EarnInputScreenNavigationProp>();
    const route = useRoute<EarnInputScreenRouteProp>();

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
};

export default EarnInput;
