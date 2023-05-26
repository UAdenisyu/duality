import { Pressable, Text, View } from "react-native";
import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from "../../styles/generalComponentStyles";
import styles from "./styles";

import Arrow from '../../assets/svgs/arrow.svg';
import { memo } from "react";

const DetailsBlock = () => {

  const { title, wrapper } = generalComponentStyles();
  const { plainTextColor, markedTextColor, lightBorderedItem } = useThemeColors();

  return (
    <View style={styles.detailsWrapper}>            
      <View style={styles.section}>
          <Text style={[title, styles.detailsTitle]}>Profit for 30 days (ETH)</Text>
          <Text style={[title, styles.detailsTitle2]}>PnL for last day...</Text>
      </View>
      <View style={styles.section}>
          <Text style={[title, styles.linesPadding, markedTextColor]}>+0,17431341</Text>
          <Text style={[title, styles.linesPadding, markedTextColor, { marginLeft: 32 }]}>+0,000231</Text>            
      </View>
      <Pressable style={[wrapper, styles.subscribeToEarnBtn, styles.section]}>
          <Text style={[styles.buttonText, plainTextColor]}>Subcribe to Earn</Text>
          <View style={styles.arrow}>
            <Arrow color={plainTextColor.color}/></View>
      </Pressable>
      <Pressable style={[styles.transactionsHistory, lightBorderedItem]}>
          <Text style={[styles.buttonText, plainTextColor]}>Transactions history</Text>
      </Pressable>
    </View>
  );
};

export default memo(DetailsBlock);