import { View, ScrollView } from "react-native";
import TotalBalance from "../../components/TotalBalance";
import Chart from "../../components/Trade/Chart";
import LocalNavBar from "../../components/LocalNavBar";
import InputVolume from "../../components/Trade/InputVolume";
import BuySellButtons from "../../components/Trade/BuySellButtons";


export default () => {
    return (
        // <LinkButton to={'/earn/input'}/>
        <ScrollView>
            {/* <TotalBalance/>
            <Chart/>
            <LocalNavBar buttonTitles={["Market", "Limit", "Stop"]}/>
            <InputVolume titleText={'Volume'}/>
            <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
                <InputVolume titleText={'Volume'} fullScreenWidth={false}/>
                <InputVolume titleText={'Price'} fullScreenWidth={false}/>
            </View>
            <BuySellButtons/> */}
            <View style={{height: 100}}></View>
        </ScrollView>
    );
}