import FaceIdLogo from 'assets/svgs/Face_ID_logo.svg';
import * as LocalAuthentication from 'expo-local-authentication';
import useThemeColors from 'hooks/useThemeColors';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface ComponentProps {
    onSuccess: () => void;
    onError?: () => void;
}

const FaceIDScreen: FC<ComponentProps> = ({ onSuccess }) => {
    const [isFaceIDAvailable, setIsFaceIDAvailable] = useState(false);

    const colors = useThemeColors();

    useEffect(() => {
        checkForBiometrics();
    }, []);

    const checkForBiometrics = async () => {
        const isFaceIDAvailable = await LocalAuthentication.isEnrolledAsync();
        console.log('isFaceIDAvailable', isFaceIDAvailable);
        setIsFaceIDAvailable(isFaceIDAvailable);
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
            {isFaceIDAvailable && (
                <TouchableOpacity
                    style={[styles.button, colors.candleRed]}
                    onPress={handleAuthenticate}>
                    <FaceIdLogo color="red" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default FaceIDScreen;

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
