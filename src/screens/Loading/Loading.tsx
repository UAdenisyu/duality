import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import AnimatedTitle from './AnimatedTitle';
import { useAuthStore } from '../../mobx/appStoreContext';

const Loading: FC = () => {
    const { isLoading } = useAuthStore();

    return (
        <Modal
            isVisible={isLoading}
            style={{ margin: 0 }}
            useNativeDriver
            animationIn="fadeIn"
            animationInTiming={500}
            animationOut="fadeOut"
            animationOutTiming={800}>
            <View style={styles.modal}>
                <Image
                    source={require('../../assets/images/SplashScreenBackground.png')}
                    style={styles.splashScreenImage}
                />
                <AnimatedTitle />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashScreenImage: {
        width: '110%',
        height: '100%',
    },
    splashScreenTitle: {
        position: 'absolute',
    },
});

export default observer(Loading);
