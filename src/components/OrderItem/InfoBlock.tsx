import { Text, View } from "react-native";
import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from "../../styles/generalComponentStyles";
import styles from "./styles";

type ComponentProps = {
  titleName: string,
  value: string,
  alignRight?: boolean,
}

const InfoBlock = ({titleName, value, alignRight} : ComponentProps) => {

  const { title } = generalComponentStyles();
  const { cancelText, plainTextColor } = useThemeColors();

  return (
      <View style={alignRight ? {alignItems: 'flex-end'} : null}>
          <Text style={[title, {fontSize: 12}]}>
              {titleName}
          </Text>
          <Text style={[styles.componentTitle, {fontSize: 14}, value === 'Canceled' ? cancelText : plainTextColor]}>
              {value}
          </Text>
      </View>
  )
}

export default InfoBlock;