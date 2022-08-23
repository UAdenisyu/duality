
import Svg, { Path, Rect } from "react-native-svg";


export default ({ color}: {color: string}, {...props}) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      opacity={0.3}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2v.5A1.5 1.5 0 0 1 14.5 5h-5A1.5 1.5 0 0 1 8 3.5V3Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 2h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H11a1 1 0 1 1 2 0Z"
      fill={color}
    />
    <Rect x={7} y={10} width={5} height={2} rx={1} fill={color} />
    <Rect x={7} y={14} width={9} height={2} rx={1} fill={color} />
  </Svg>
)

