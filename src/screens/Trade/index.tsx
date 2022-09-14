import { View, ScrollView } from "react-native";
import Portfolio from "../../components/Portfolio/Portfolio";
import SummaryPrice from "../../components/SummaryPrice/SummaryPrice";



export default () => {
    return (
        // <LinkButton to={'/earn/input'}/>
        <ScrollView>
            <SummaryPrice/>
            <Portfolio/>
            <View style={{height: 100}}></View>
        </ScrollView>
    );
}