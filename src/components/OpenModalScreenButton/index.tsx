import React, { JSXElementConstructor, useState, ReactElement } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, StyleProp, ViewStyle, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import useThemeColors from "../../hooks/useThemeColors";

import Arrow from '../../assets/svgs/arrow.svg';

import { observer } from 'mobx-react-lite';


//targetContentComponent: React.ComponentType<TargetProps>

const OpenModalScreenButton = observer(({
    targetContentComponent,
    targetStyles,
    textContent,
    showCancelButton=false,
    confirmButtonOnPress,
    cancelButtonOnPress} :
        {   targetContentComponent: ReactElement
            targetStyles?: StyleProp<ViewStyle>, 
            textContent: string | string[], 
            showCancelButton?: boolean, 
            confirmButtonOnPress?: () => void, 
            cancelButtonOnPress?: () => void}) => {

    const { commonText, modalBackgroud, modalWindowElementsColor, } = useThemeColors(); 

    const [ modalVisible, setModalVisible ] = useState(false);
    const textContentBeautified = typeof textContent === 'string' ?
        <Text style={[styles.modalTextContent, {color: modalWindowElementsColor, textAlign: 'center'}]}>{textContent}</Text> :
        textContent.map((item, i) => {
        return <Text key={i.toString()} style={[styles.modalTextContent, {color: modalWindowElementsColor, marginTop: i === 0 ? 0 : 16}]}>
                {i+1}. {item}
            </Text>
    });


    // doesn't copy component children 
    // const Btn = React.cloneElement(<Pressable/>, { ...targetContentComponent.props, onPress: () => setModalVisible(true)});

    const Btn = <Pressable onPress={() => setModalVisible(true)}>
                    {targetContentComponent}
                </Pressable>
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => console.warn('closed')}
                statusBarTranslucent={true}>
                <View style={[styles.centeredView, styles.modalViewWrapper]}>
                    <View style={[styles.modalView, {backgroundColor: modalBackgroud}]}>
                        <View style={styles.modalTextWrapper}>
                            {textContentBeautified}
                        </View>
                        <Pressable
                            style={[styles.button, {backgroundColor: modalWindowElementsColor}]}
                            onPress={() => {
                                setModalVisible(false);
                                if (confirmButtonOnPress){
                                    confirmButtonOnPress();
                                }
                            }}>
                            <Text style={[styles.buttonText, {color: commonText}]}>OK</Text>
                            <View style={styles.arrowIcon}>
                                <Arrow color={commonText}/>
                            </View>
                        </Pressable>
                        {showCancelButton ? <Pressable
                                style={[styles.button, styles.showCancelButton]}
                                onPress={() => {
                                    setModalVisible(false);
                                    if (cancelButtonOnPress){
                                        cancelButtonOnPress();
                                    }
                                }}>
                                <Text style={[styles.buttonText, {color: modalWindowElementsColor}]}>Cancel</Text>
                            </Pressable> : null
                        }
                    </View>
                </View>
            </Modal>
            {Btn}
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
    showCancelButton: {
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


export default OpenModalScreenButton;