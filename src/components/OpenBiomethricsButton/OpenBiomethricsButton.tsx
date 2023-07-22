import FaceIdLogo from 'assets/svgs/Face_ID_logo.svg';
import * as LocalAuthentication from 'expo-local-authentication';
import useThemeColors from 'hooks/useThemeColors';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface ComponentProps {
    onSuccess: () => void;
    onError?: () => void;
}

const OpenBiomethricsButton: FC<ComponentProps> = ({ onSuccess }) => {
    const [isBiomethricsAvailable, setIsBiomethricsAvailable] = useState(false);

    const colors = useThemeColors();

    useEffect(() => {
        checkForBiometrics();
    }, []);

    const checkForBiometrics = async () => {
        const isBiomethricsAvailable =
            await LocalAuthentication.isEnrolledAsync();
        console.log('isBiomethricsAvailable', isBiomethricsAvailable);
        setIsBiomethricsAvailable(isBiomethricsAvailable);
    };

    const handleAuthenticate = async () => {
        const { success } = await LocalAuthentication.authenticateAsync();

        if (success) {
            onSuccess();
            console.log('Authentication successful');
        } else {
            console.log('Authentication failed:');
        }
    };

    return (
        <View style={styles.container}>
            {isBiomethricsAvailable && (
                <TouchableOpacity
                    style={[styles.button, colors.candleRed]}
                    onPress={handleAuthenticate}>
                    <FaceIdLogo color="red" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default OpenBiomethricsButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
});
