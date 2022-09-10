import { View, Text } from "react-native";
import styles from './styles';
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';
import useThemeColors from "../../hooks/useThemeColors";

export default function TermClause({ textContent, index }: { textContent: string, index: number }) {
    const { commonText } = useThemeColors();
    const textStyle = index === 0 ? [styles.text, {color: commonText}] : [styles.text, {color: commonText, marginTop: 16}]
    // const keyProp = (Math.random() * 1000).toFixed();
    return (
        <Text style={textStyle} key={index.toString()}>{index+1}. {textContent}</Text>
    );
}