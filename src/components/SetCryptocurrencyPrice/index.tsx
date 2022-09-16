import { TextInput, View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from '../../styles/CommonComponentStyles';

export default function SetCryptocurrencyPrice() {

    const { wrapper, titleLight, title, borderedSection, markeredText } = CommonComponentStyles();
    const { plainText, warning, lightGrey, componentDividingLine } = useThemeColors();

    const dynamicColors = StyleSheet.create({
        warningText:{
            color: warning,
        },
        input:{
            borderColor: componentDividingLine,
            color: plainText,
        }
    });
    
    return (
        <View style={wrapper}>
            <View style={borderedSection}>
                <Text style={title}>
                    Following price*
                </Text>
                <TextInput
                    style={[styles.inputArea, styles.availableValue, dynamicColors.input]}
                    selectionColor={lightGrey}
                    keyboardType='decimal-pad'
                    onChange={(text) => text.nativeEvent.text}/>
                <Text style={[title, styles.warningText, dynamicColors.warningText]}>
                    {false ? ' ' : 'Please write the correct price*'}
                </Text>
                <Text style={[styles.avaibleTitle, titleLight]}>
                    Available
                    &#160;
                    <Text style={styles.availableValue}>
                        {2.21}
                        &#160;
                        ETH
                    </Text>
                </Text>
            </View>
            <Text style={[titleLight, styles.priceLimit]}>
                Price limit
            </Text>
            <View style={styles.block}>
                <Text style={title}>
                    Minimum
                </Text>
                <Text style={[markeredText, styles.highlightedText]}>
                    0,01
                </Text>
                <View style={styles.dot}/>
                <Text style={title}>
                    Maximum
                </Text>
                <Text style={[markeredText, styles.highlightedText]}>
                    2500
                </Text>
            </View>
        </View>
    );
}