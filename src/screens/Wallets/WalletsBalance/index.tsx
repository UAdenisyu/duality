import BalanceCryptoDetails from 'components/BalanceCryptoDetails';
import { FC } from 'react';
import { View } from 'react-native';

const WalletsBalance: FC = () => {
    return (
        <View>
            <BalanceCryptoDetails currencyName="Eth" />
        </View>
    );
};

export default WalletsBalance;
