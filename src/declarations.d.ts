declare module '*.svg' {
    import { SvgProps } from 'react-native-svg';
    const content: React.StatelessComponent<SvgProps>;
    export default content;
}

declare namespace React {
    type StatelessComponent<P> = React.FunctionComponent<P>;
}
