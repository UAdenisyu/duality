import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import {
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

const ChangePassword: FC = () => {
    const { titleTextColor, markedItemBackgroundColor, darkTextColor } =
        useThemeColors();
    const { input, wrapper } = useGeneralComponentStyles();

    return (
        <Pressable onPress={() => Keyboard.dismiss()}>
            <View style={styles.screenHintWrapper}>
                <Text style={[titleTextColor, styles.screenHintText]}>
                    Password must contain at least 6 characters, including
                    numbers, letters
                </Text>
            </View>
            <View style={[wrapper, styles.inputsWrapper]}>
                <TextInput
                    autoCorrect={false}
                    secureTextEntry
                    style={input}
                    placeholder="Current Password"
                    placeholderTextColor={titleTextColor.color}
                />
                <TextInput
                    autoCorrect={false}
                    secureTextEntry
                    style={input}
                    placeholder="New password"
                    placeholderTextColor={titleTextColor.color}
                />
                <TextInput
                    autoCorrect={false}
                    secureTextEntry
                    style={input}
                    placeholder="New password again"
                    placeholderTextColor={titleTextColor.color}
                />
                <TouchableOpacity
                    style={[
                        markedItemBackgroundColor,
                        styles.submitButtonWrapper,
                    ]}>
                    <Text style={[darkTextColor, styles.submitButtonText]}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    screenHintWrapper: {
        marginHorizontal: 35,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    screenHintText: {
        textAlign: 'center',
    },
    inputsWrapper: {
        marginTop: 40,
    },
    submitButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 24,
        paddingVertical: 16,
        borderRadius: 16,
    },
    submitButtonText: {
        fontFamily: 'trap-semibold',
        fontSize: 16,
    },
});

export default observer(ChangePassword);
