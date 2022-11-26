import { TextInput, View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from '../../styles/generalComponentStyles';

export default function SetCryptocurrencyPrice() {

    const { wrapper, titleLight, title, borderedSection, markedText } = generalComponentStyles();
    const { inputColors, inputBorderColor } = useThemeColors();

    return (
        <View style={wrapper}>
            <View style={borderedSection}>
                <Text style={title}>
                    Following price*
                </Text>
                <TextInput
                    style={[styles.inputArea, styles.availableValue, inputColors]}
                    selectionColor={inputBorderColor.borderColor}
                    keyboardType='decimal-pad'
                    onChange={(text) => text.nativeEvent.text}/>
                <Text style={[title, styles.warningText, inputColors]}>
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
                <Text style={[markedText, styles.highlightedText]}>
                    0,01
                </Text>
                <View style={styles.dot}/>
                <Text style={title}>
                    Maximum
                </Text>
                <Text style={[markedText, styles.highlightedText]}>
                    2500
                </Text>
            </View>
        </View>
    );
}