import Svg, { Path } from 'react-native-svg';

export default ({ color }: { color: string }, { ...props }) => (
    <Svg
        width={25}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
            d="M8.5 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
            fill={color}
            fillOpacity={0.25}
        />
        <Path
            d="M3.5 14.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
            fill={color}
        />
    </Svg>
);
