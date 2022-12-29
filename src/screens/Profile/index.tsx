import { View, StyleSheet, Dimensions } from "react-native";
import SettingComponent from "../../components/SettingComponent";

import SettingsSvg from "../../assets/svgs/settingsScreen/Settings.svg";
import WarningSvg from "../../assets/svgs/settingsScreen/Warning.svg";
import LogoutSvg from "../../assets/svgs/settingsScreen/Logout.svg";

import useThemeColors from "../../hooks/useThemeColors";
import { observer } from "mobx-react-lite";
import { useDualityStore } from "../../mobx/appStoreContext";

const screenHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
    arrow: {
        marginLeft: 20,
        borderRightWidth: 3,
        borderTopWidth: 3,
        height: 10,
        width: 10,
        borderRadius: 2,
        transform:  [{ rotate: '45deg'}],
    },
    screenWrapper:{
        height: screenHeight-200,
    },
    logOutButtonWrapper:{
        flex: 1,
        justifyContent: 'flex-end',
    }
});


const profileButtonsList = [
    {
        title: 'Settings',
        logoIcon: <SettingsSvg/>,
        rightItem: (color: string) => <View style={[styles.arrow, { borderColor: color }]}/>
    },
    {
        title: 'Terms & Conditions',
        logoIcon: <WarningSvg/>,
        rightItem: (color: string) => <View style={[styles.arrow, { borderColor: color }]}/>
    },
    {
        title: 'Privacy Policy',
        logoIcon: <WarningSvg/>,
        rightItem: (color: string) => <View style={[styles.arrow, { borderColor: color }]}/>
    },
]


function Earn() {

    const { plainTextColor, markedTextColor } = useThemeColors();

    const { toggleIsLoggedIn } = useDualityStore();

    const mainPageComponentList = profileButtonsList.map(item => (
        <SettingComponent key={item.title} leftItem={item.logoIcon} rightItem={item.rightItem(plainTextColor.color)} titleText={item.title} onPressAction={() => console.log('pressed')}/>
    ));

    return (
        <View>
            <View style={styles.screenWrapper}>
                {mainPageComponentList}
                <View style={styles.logOutButtonWrapper}>
                    <SettingComponent leftItem={<LogoutSvg/>} titleText={'Logout'} onPressAction={toggleIsLoggedIn}/>
                </View>
            </View>
            <View style={{height: 100}}></View>
        </View>
    );
}


export default observer(Earn);