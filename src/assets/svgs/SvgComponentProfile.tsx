import Svg, { Path } from 'react-native-svg';

export default ({ color }: { color: string }, { ...props }) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 19a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5 3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"
            fillOpacity={0.25}
            fill={color}
        />
        <Path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" fill={color} />
    </Svg>
);
