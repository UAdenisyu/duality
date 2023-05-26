import { Text, View } from "react-native";
import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from "../../styles/generalComponentStyles";
import OpenBottomModalScreenButton from "../OpenBottomModalScreenButton";
import styles from "./styles";

import InfoIcon from '../../assets/svgs/infoIcon.svg';
import { memo } from "react";

const ActionsBlock = () => {

  const { title, infoIcon } = generalComponentStyles();
  const { warningText, markedItemBackgroundColor, darkTextColor, plainTextColor, titleTextColor } = useThemeColors();

  return (
    <View style={styles.detailsWrapper}>            
      <View style={styles.section}>
          <Text style={[title, styles.detailsTitle]}>PnL for today</Text>
          <View style={infoIcon}>
              <InfoIcon color={titleTextColor.color}/>
          </View>
      </View>
      <Text style={[title, styles.linesPadding, warningText]}>-7,39 $/-0,03%</Text>
      <View style={[styles.section, styles.depositAndWithdraw]}>
          <OpenBottomModalScreenButton
                  // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                  targetContentComponent={
                      <View 
                          style={[styles.button, markedItemBackgroundColor]}>
                          <Text style={[styles.buttonText, darkTextColor]}>Deposit</Text>
                      </View>
                  }
                  titleText = {'Choose a currency'}/>
          <OpenBottomModalScreenButton
                  // targetContentComponent={<View style={{height: 50, width: 50, backgroundColor: 'blue'}}><Text>Show more</Text></View>}
                  targetContentComponent={
                      <View 
                          style={[styles.button, styles.withdrawBtn]}>
                          <Text style={[styles.buttonText, plainTextColor]}>Withdraw</Text>
                      </View>
                  }
                  titleText = {'Choose a network'}
                  promptText = {'Make sure the network you choose for input matches the network for output\n Otherwise, all assets will be lost'}/>
      </View>
    </View>);
};

export default memo(ActionsBlock);