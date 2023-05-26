import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import generalComponentStyles from "../../styles/generalComponentStyles";
import { memo } from "react";

interface componentProps {
    buttonTitles: string[],
}

const LocalNavBar = ({buttonTitles}: componentProps) => {

    const { wrapper, titleLight } = generalComponentStyles();

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

export default memo(LocalNavBar);
