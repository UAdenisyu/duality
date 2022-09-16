import { View, Text, StyleSheet } from "react-native";
import { listItem } from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import CommonComponentStyles from "../../styles/CommonComponentStyles";
import useThemeColors from "../../hooks/useThemeColors";

export default function TableListItem({ backgroundColor, data } : { backgroundColor : string, data : { 
        incomePerYear: number;
        targetPrice: number; 
        completionTime: Date 
    } }) {


    const { markeredText } = CommonComponentStyles();
    const { selectedItemColor, plainText } = useThemeColors();

    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText,
        },
    });

    const formattedDate = data.completionTime.getFullYear() + '-' + data.completionTime.getMonth()+1 + '-' + data.completionTime.getDate();
    // const formattedDate = data.completionTime.getDate();

    return (
        <View style={[listItem.container, {backgroundColor}]}>
            <Text style={[markeredText, listItem.income]}>{data.incomePerYear}</Text>
            <Text style={[markeredText, listItem.price, dynamicColors.plainText]}>{data.targetPrice}</Text>
            <View style={listItem.date}>
                <Text style={[markeredText,  dynamicColors.plainText]}>{formattedDate}</Text>
                <Arrow color={selectedItemColor} style={listItem.arrow}/>
            </View>
        </View>
    );
}