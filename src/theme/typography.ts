import {FunctionComponent} from 'react';
import {Text, TextProps} from 'react-native';
import styled, {css} from 'styled-components/native';

export type ThemeColorProps = {
  primary?: boolean | string;
  primaryLight?: boolean | string;
  secondary?: boolean | string;
  accent?: boolean | string;
  primaryVariant?: boolean | string;
};

export type TypographyProps = {
  centered?: boolean | string;
  color?: string;
  white?: boolean;
} & ThemeColorProps;

export type TypographyComponent<T = {}> = FunctionComponent<
  TextProps & TypographyProps & T
>;
export type LabelProps = {small?: boolean | string};
export const textBase = css``;

export const textProps = css<TypographyProps>`
  ${({color}) => color && `color: ${color}`}
  ${({white, theme}) => white && `color: ${theme.colors.white}`}
  ${({centered}) => centered && 'text-align: center'}
`;

export const CustomText: TypographyComponent = styled(Text)`
  color: ${({theme}) => theme.colors.primary_black};
  ${textBase}
  ${textProps}
`;

export const Title: TypographyComponent = styled(CustomText)`
  ${textProps}
`;
