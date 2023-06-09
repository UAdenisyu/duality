import LocalNavBar from 'components/LocalNavBar';
import TotalBalance from 'components/TotalBalance';
import BuySellButtons from 'components/Trade/BuySellButtons';
import Chart from 'components/Trade/Chart';
import { FC } from 'react';
import { ScrollView } from 'react-native';

const Trade: FC = () => {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <TotalBalance />
            <Chart />
            <LocalNavBar buttonTitles={['Market', 'Limit', 'Stop']} />
            {/* <InputVolume titleText={'Volume'}/> */}
            {/* <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
                <InputVolume titleText={'Volume'} fullScreenWidth={false}/>
                <InputVolume titleText={'Price'} fullScreenWidth={false}/>
            </View> */}
            <BuySellButtons />
        </ScrollView>
    );
};

export default Trade;
