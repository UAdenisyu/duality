import Svg, { Path } from "react-native-svg"

export default ({ color }: { color: string }, { ...props }) => (

  <Svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2V8.8Z"
      fillOpacity={0.25}
      fill={color}
    />
    <Path

      clipRule="evenodd"
      d="M17 9h5v6h-5a3 3 0 1 1 0-6Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
)

