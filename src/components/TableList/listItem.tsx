import { View, Text } from "react-native";
import { listItem } from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

export default function TableListItem({ backgroundColor, data } : { backgroundColor : string, data : { 
        incomePerYear: number;
        targetPrice: number; 
        completionTime: Date 
    } }) {
    return (
        <View style={{...listItem.container, backgroundColor: backgroundColor}}>
            <Text style={listItem.income}>{data.incomePerYear}</Text>
            <Text style={listItem.price}>{data.targetPrice}</Text>
            <View style={listItem.date}>
                <Text style={listItem.date.mytextColor}>{data.completionTime.toLocaleDateString("en-US")}</Text>
                <Arrow color='#E2FF9D' style={listItem.arrow}/>
            </View>
        </View>
    );
}