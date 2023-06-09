import Portfolio from 'components/Portfolio';
import SummaryPrice from 'components/SummaryPrice';
import { FC } from 'react';
import { View } from 'react-native';

const WalletsEarn: FC = () => {
    return (
        <View>
            <SummaryPrice titleText="Estimated cost" />
            <Portfolio />
        </View>
    );
};

export default WalletsEarn;
