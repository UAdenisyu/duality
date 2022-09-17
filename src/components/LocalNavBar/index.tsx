import { View, Text, Pressable } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from "../../styles/CommonComponentStyles";


const LocalNavBar = observer(({buttonTitles}: {buttonTitles: string[]}) => {

    const { wrapper, titleLight } = CommonComponentStyles();

    return (
        <View style={[wrapper, styles.body]}>
            {buttonTitles.map(buttonTitle => (
                <Pressable key={buttonTitle} style={[styles.btn]}>
                    <Text style={[titleLight, styles.btnText, styles.btnActive]}>
                        {buttonTitle}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
});

export default LocalNavBar;
