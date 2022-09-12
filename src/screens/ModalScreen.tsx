import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

import useThemeColors from "../hooks/useThemeColors";

import Arrow from '../assets/svgs/arrow.svg';

import { observer } from 'mobx-react-lite';

const ModalScreen = observer(({ 
    textContent,
    cancelButton=false, 
    confirmButtonOnPress,
    cancelButtonOnPress} :
        {textContent: string | string[], cancelButton?: boolean, confirmButtonOnPress?: ()=>void, cancelButtonOnPress?: ()=>void}) => {

    const { commonText, modalBackgroud, modalWindowElementsColor, } = useThemeColors(); 

    const textContentBeautified = typeof textContent === 'string' ?
        <Text style={[styles.modalTextContent, {color: modalWindowElementsColor, textAlign: 'center'}]}>{textContent}</Text> :
        textContent.map((item, i) => {
        return <Text key={i.toString()} style={[styles.modalTextContent, {color: modalWindowElementsColor, marginTop: i === 0 ? 0 : 16}]}>
                {i+1}. {item}
            </Text>
    });

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={true}
                onRequestClose={() => console.warn('closed')}
                statusBarTranslucent={true}>
                <View style={[styles.centeredView, styles.modalViewWrapper]}>
                    <View style={[styles.modalView, {backgroundColor: modalBackgroud}]}>
                        <View style={styles.modalTextWrapper}>
                            {textContentBeautified}
                        </View>
                        <Pressable
                            style={[styles.button, {backgroundColor: modalWindowElementsColor}]}
                            onPress={confirmButtonOnPress}>
                            <Text style={[styles.buttonText, {color: commonText}]}>OK</Text>
                            <View style={styles.arrowIcon}>
                                <Arrow color={commonText}/>
                            </View>
                        </Pressable>
                        {cancelButton ? <Pressable
                                style={[styles.button, styles.cancelButton]}
                                onPress={cancelButtonOnPress}>
                                <Text style={[styles.buttonText, {color: modalWindowElementsColor}]}>Cancel</Text>
                            </Pressable> : null
                        }
                    </View>
                </View>
            </Modal>
        </View>
    );
});

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalViewWrapper: {
        backgroundColor: 'rgba(18, 18, 18, 0.82)',
    },
    modalView: {
        margin: 20,
        borderRadius: 24,
        padding: 24,
    },
    button: {
        flexDirection: 'row',
        borderRadius: 20,
        padding: 16,
        justifyContent: 'center',
    },
    cancelButton: {
        backgroundColor: 'transparent', 
        marginTop: 10,
    },
    buttonText: {
        fontFamily: 'trap-semibold',
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 16,
    },
    modalTextWrapper: {
        marginBottom: 21,
    },
    modalTextContent: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
    },
    arrowIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 21,
    }
});


export default ModalScreen;