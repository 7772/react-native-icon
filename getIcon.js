const ICONS = {
  // 술집
  alcohol: require("./assets/icon/alcohol.png"),
  // Null Imgae
  noImg: require("./assets/icon/noImg.png")
};

export const getIcon = iconName => {
  if (ICONS.hasOwnProperty(iconName)) return ICONS[iconName];
  else return ICONS["noImg"];
};
