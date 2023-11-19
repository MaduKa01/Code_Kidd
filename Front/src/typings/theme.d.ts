interface IThemeMargins {
  quarck: number;
  nano: number;
  xxxs: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  huge: number;
  giant: number;
}

interface IThemeRoundness {
  none: number;
  sm: number;
  md: number;
  lg: number;
  circular: string;
}

interface IThemeFontWeight {
  regular: number;
  medium: number;
  bold: number;
}

interface IThemeFontSize {
  giant: number;
  display: number;
  xxxl: number;
  xxl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
  xxs: number;
  xxxs: number;
}

interface ISideBar {
  width: number;
  background: string;
}
interface IappBar {
  height: number;
  background: string;
}

interface FontColors {
  title: string;
  description: string;
  secondaryText: string;
  disabled: string;
}
export interface CustomTheme {
  margins: IThemeMargins;
  roundness: IThemeRoundness;
  fontWeight: IThemeFontWeight;
  fontSize: IThemeFontSize;
  sideBar: ISideBar;
  appBar: IappBar;
  fontColors: FontColors;
}

export type Colors = "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit";

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export type Themes = {
  defaultTheme: Theme;
};
