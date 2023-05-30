import { View } from 'react-native';

import BalanceCryptoDetails from '../../../components/BalanceCryptoDetails';

export default function Wallets() {
    return (
        <View>
            <BalanceCryptoDetails currencyName="Eth" />
        </View>
    );
}
