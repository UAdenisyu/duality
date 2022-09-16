import { View, Text, StyleSheet } from "react-native";
import styles from './styles';
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';
import useThemeColors from "../../hooks/useThemeColors";

export default function TermClause({ textContent, index }: { textContent: string, index: number }) {
    const { plainText } = useThemeColors();

    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText,
        },
    });

    const textStyle = [styles.text, dynamicColors.plainText, index > 0 ? { marginTop: 16} : null];
    
    return (
        <Text style={textStyle}>{index.toString()}. {textContent}</Text>
    );
}