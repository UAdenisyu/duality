import { View, ScrollView } from "react-native";
import Portfolio from "../../components/Portfolio/Portfolio";
import SummaryPrice from "../../components/SummaryPrice/SummaryPrice";
import UserShortInfoBalanceList from "../../components/UserShortInfoBalanceList";


export default () => {
    return (
        // <LinkButton to={'/earn/input'}/>
        <ScrollView>
            <SummaryPrice showDetails={true}/>
            <Portfolio/>
            <UserShortInfoBalanceList/>
            <View style={{height: 100}}></View>
        </ScrollView>
    );
}