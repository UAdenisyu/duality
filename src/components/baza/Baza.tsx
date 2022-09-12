import { View } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import useThemeColors from "../../hooks/useThemeColors";

const Baza = observer(() => {
    const { totalBalance } = useCounterStore();

    const { grey, commonText } = useThemeColors();

    return (
        <View style={styles.container}>

        </View>
    );
});

export default Baza;
