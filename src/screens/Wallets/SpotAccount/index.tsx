import { View } from 'react-native';

import SummaryPrice from '../../../components/SummaryPrice';
import TotalBalanceListDetails from '../../../components/TotalBalanceListDetails';

export default function WalletsSpotAccount() {
    return (
        <View>
            <SummaryPrice titleText="Calculated total cost" />
            <TotalBalanceListDetails />
        </View>
    );
}
