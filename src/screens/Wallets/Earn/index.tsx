import { View } from 'react-native';

import Portfolio from '../../../components/Portfolio';
import SummaryPrice from '../../../components/SummaryPrice';

const WalletsEarn = () => {
    return (
        <View>
            <SummaryPrice titleText="Estimated cost" />
            <Portfolio />
        </View>
    );
};

export default WalletsEarn;
