import React, { useState, ReactElement } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, StyleProp, ViewStyle } from 'react-native';

import useThemeColors from "../../hooks/useThemeColors";

import Arrow from '../../assets/svgs/arrow.svg';

import { observer } from 'mobx-react-lite';

import styles from './styles';

//targetContentComponent: React.ComponentType<TargetProps>

const OpenCenterModalScreenButton = observer(({
    targetContentComponent,
    targetStyles,
    textContent,
    showCancelButton=true,
    confirmButtonOnPress,
    cancelButtonOnPress} :
        {   targetContentComponent: ReactElement
            targetStyles?: StyleProp<ViewStyle>, 
            textContent: string | string[], 
            showCancelButton?: boolean, 
            confirmButtonOnPress?: () => void, 
            cancelButtonOnPress?: () => void}) => {

    const { plainText, modalBackground, modalWindowElementsColor } = useThemeColors(); 
    const dynamicColors = StyleSheet.create({
        modalBackground: {
            backgroundColor: modalBackground
        },
        btnText:{
            color: plainText,
        },
        infoText:{
            color: modalWindowElementsColor,
        },
        btnBackground: {
            backgroundColor: modalWindowElementsColor
        }
    });

    const [ modalVisible, setModalVisible ] = useState(false);


    const textContentBeautified = typeof textContent === 'string' ?
        <Text style={[styles.modalTextContent, dynamicColors.infoText, { textAlign: 'center'}]}>{textContent}</Text> :
        textContent.map((item, i) => {
        return <Text key={i.toString()} style={[styles.modalTextContent, dynamicColors.infoText, { marginTop: i === 0 ? 0 : 16}]}>
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
                    <View style={[styles.modalView, dynamicColors.modalBackground]}>
                        <View style={styles.modalTextWrapper}>
                            {textContentBeautified}
                        </View>
                        <Pressable
                            style={[styles.button, dynamicColors.btnBackground]}
                            onPress={() => {
                                setModalVisible(false);
                                if (confirmButtonOnPress){
                                    confirmButtonOnPress();
                                }
                            }}>
                            <Text style={[styles.buttonText, dynamicColors.btnText]}>OK</Text>
                            <View style={styles.arrowIcon}>
                                <Arrow color={plainText}/>
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
                                <Text style={[styles.buttonText, dynamicColors.infoText]}>Cancel</Text>
                            </Pressable> : null
                        }
                    </View>
                </View>
            </Modal>
            {Btn}
        </View>
    );
});


export default OpenCenterModalScreenButton;