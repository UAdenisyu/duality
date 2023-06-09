import CryptocurrencyLifecycle from 'components/CryptocurrencyLifecycle';
import Portfolio from 'components/Portfolio';
import SummaryPrice from 'components/SummaryPrice';
import { FC } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import WalletsSpotAccount from './WalletsSpotAccount';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Wallets: FC = () => {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <SummaryPrice titleText="Calculated total cost" />
            <Portfolio />
            <CryptocurrencyLifecycle titleLeft="Here" />
        </ScrollView>
    );
};

export default WalletsSpotAccount;
