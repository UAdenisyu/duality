import { observer } from 'mobx-react-lite';
import { Image, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import AnimatedTitle from './AnimatedTitle';
import { useDualityStore } from '../../mobx/appStoreContext';

//usex LinearGradient for background colors

// type ScreenProps = {
//   isLoading: boolean,
//   toggleLoading: (isLoading: boolean) => void,
// }

const Loading = () => {
    const { isLoading } = useDualityStore();

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
        // flex: 1,
        // backgroundColor: 'green',
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
