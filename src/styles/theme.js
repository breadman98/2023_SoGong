const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(28),
  big: calcRem(32),
  subTitleSize: calcRem(36),
  titleSize: calcRem(42),
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "1024px",
  NoteBook: "1440px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
  NoteBook: `only screen and (max-width: ${deviceSizes.NoteBook})`,
};

const colors = {
  primary: "#6C5CE7",
  secondary: "#A29BFE",
  gray_77: "#777",
  gray_f1: "#F1F3F7",
  gray_33: "#333333",
  gray_55: "#555555",
  gray_70: "#707070",
  gray_ea: "#eaeaea",
  gray_aa: "#aaaaaa",
  gray_dd: "#dddddd",
  gray_ee: "#eeeeee",
  gray_eb: "#ebebeb",
  bgColor: "#F8F9FD",
  lineColor: "#F1F3F7",
  white_ff: "#fff",
  black_22: "#222",
  red_74: "#e74c3c",
};

const custom = {
  mainGray: "#666",
  mediumGray: "#717171",
  lightGray: "#a4a4a4",
  grayBtn: "#cacaca",
  grayBorder: "#e1e2e3",
  blueTitle: "#36f",
};

const flex = {
  flexCenter: {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  },

  flexBetween: {
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
  },

  flexStart: {
    display: "flex",
    "justify-content": "flex-start",
    "align-items": "center",
  },

  flexAround: {
    display: "flex",
    "justify-content": "space-around",
    "align-items": "center",
  },
};

const theme = {
  fontSizes,
  deviceSizes,
  device,
  colors,
  custom,
  flex,
};

export default theme;
