import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import generalComponentStyles from "../../styles/generalComponentStyles";
import { memo, useMemo } from "react";

interface componentProps {
    buttonTitles: string[],
}

const LocalNavBar = ({buttonTitles}: componentProps) => {

    const { wrapper, titleLight } = generalComponentStyles();

    const renderButtons = useMemo(() => buttonTitles.map(buttonTitle => (
        <Pressable 
            key={buttonTitle} 
            style={[styles.btn]}>
            <Text style={[titleLight, styles.btnText, styles.btnActive]}>
                {buttonTitle}
            </Text>
        </Pressable>
    )), [...buttonTitles]);

    return (
        <View style={[wrapper, styles.body]}>
            {renderButtons}
        </View>
    );
};

export default memo(LocalNavBar);
