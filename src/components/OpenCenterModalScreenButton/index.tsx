import Arrow from 'assets/svgs/arrow.svg';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import React, { useState, ReactElement, FC, useMemo } from 'react';
import {
    Modal,
    Text,
    Pressable,
    View,
    StyleProp,
    ViewStyle,
} from 'react-native';

import styles from './styles';

interface ComponentProps {
    targetContentComponent: ReactElement;
    targetStyles?: StyleProp<ViewStyle>;
    textContent: string | string[];
    showCancelButton?: boolean;
    confirmButtonOnPress?: () => void;
    cancelButtonOnPress?: () => void;
}

const OpenCenterModalScreenButton: FC<ComponentProps> = ({
    targetContentComponent,
    textContent,
    showCancelButton = true,
    confirmButtonOnPress,
    cancelButtonOnPress,
}) => {
    const {
        plainTextColor,
        modalOkButtonDarkColor,
        modalTextDarkColor,
        modalLightBackgroundColor,
    } = useThemeColors();

    const [modalVisible, setModalVisible] = useState(false);

    const textContentBeautified = useMemo(
        () =>
            typeof textContent === 'string' ? (
                <Text
                    style={[
                        styles.modalTextContent,
                        modalTextDarkColor,
                        { textAlign: 'center' },
                    ]}>
                    {textContent}
                </Text>
            ) : (
                textContent.map((item, i) => {
                    // TODO: keys should be another, performance now is bad
                    return (
                        <Text
                            key={i}
                            style={[
                                styles.modalTextContent,
                                modalTextDarkColor,
                                { marginTop: i === 0 ? 0 : 16 },
                            ]}>
                            {i + 1}. {item}
                        </Text>
                    );
                })
            ),
        []
    );

    // doesn't copy component children
    // const Btn = React.cloneElement(<Pressable/>, { ...targetContentComponent.props, onPress: () => setModalVisible(true)});

    const Btn = (
        <Pressable onPress={() => setModalVisible(true)}>
            {targetContentComponent}
        </Pressable>
    );

    const cancelOnPress = () => {
        setModalVisible(false);
        cancelButtonOnPress?.();
    };

    const confirmOnPress = () => {
        setModalVisible(false);
        confirmButtonOnPress?.();
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent
                visible={modalVisible}
                onRequestClose={() => console.warn('closed')}
                statusBarTranslucent>
                <View style={[styles.centeredView, styles.modalViewWrapper]}>
                    <View style={[styles.modalView, modalLightBackgroundColor]}>
                        <View style={styles.modalTextWrapper}>
                            {textContentBeautified}
                        </View>
                        <Pressable
                            style={[styles.button, modalOkButtonDarkColor]}
                            onPress={confirmOnPress}>
                            <Text style={[styles.buttonText]}>OK</Text>
                            <View style={styles.arrowIcon}>
                                <Arrow color={plainTextColor.color} />
                            </View>
                        </Pressable>
                        {showCancelButton && (
                            <Pressable
                                style={[styles.button, styles.showCancelButton]}
                                onPress={cancelOnPress}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </Modal>
            {Btn}
        </View>
    );
};

export default observer(OpenCenterModalScreenButton);
