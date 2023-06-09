import SummaryPrice from 'components/SummaryPrice';
import TotalBalanceListDetails from 'components/TotalBalanceListDetails';
import { FC } from 'react';
import { View } from 'react-native';

const WalletsSpotAccount: FC = () => {
    return (
        <View>
            <SummaryPrice titleText="Calculated total cost" />
            <TotalBalanceListDetails />
        </View>
    );
};

export default WalletsSpotAccount;
