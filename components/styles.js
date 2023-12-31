import { Styled, styled } from 'styled-components';
import { View, Text, Image } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

//colors
export const Colors ={
    primary: "#ffffff",
    secondary: "#e5e7eb",
    tertiary: "#1f2937",
    darklight: "#9ca3af",
    brand: "#6d28d9",
    green: "#10b981",
    red: "#ef4444",
    
};

const {primary, secondary, tertiary, darklight, brand, green, red} = Colors;

export const StyleContainer = styled.View`
    flex:1;
    padding: 25px;
    padding-top: ${StatusBarHeight +10}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex:1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align:center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;    
`; 