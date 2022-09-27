import { View, Text, Pressable } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from "../../styles/generalComponentStyles";

interface componentProps {
    buttonTitles: string[],
}

const LocalNavBar = ({buttonTitles}: componentProps) => {

    const { wrapper, titleLight } = CommonComponentStyles();

    return (
        <View style={[wrapper, styles.body]}>
            {buttonTitles.map(buttonTitle => (
                <Pressable 
                    key={buttonTitle} 
                    style={[styles.btn]}
                    onPress={() => {}}>
                    <Text style={[titleLight, styles.btnText, styles.btnActive]}>
                        {buttonTitle}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

export default LocalNavBar;
