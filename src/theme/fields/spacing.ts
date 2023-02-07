export const spacing = {
  button: {
    width: {
      xl: "190px",
      l: "170px",
      m: "140px",
      xs: "80px",
    },
    paddingTopBottom: {
      xl: "15px",
      l: "10px",
      m: "15px",
      s: "18px",
    },
    controlButtonWidth: {
      l: "110px",
      s: "48px",
    },
    controlButtonPadding: {
      l: "15px",
      s: "8px",
    },
  },
  card: {
    padding: {
      m: "20px",
      l: "25px",
      xl: "35px",
    },
    borderRadius: "6px",
  },
  block: {
    width: {
      xl: "540px",
      l: "445px",
      m: "350px",
      xm: "328px",
      s: "285px",
      xs: "255px",
      xxs: "244px",
    },
    height: {
      xl: "525px",
    },
  },
  betweenSections: {
    xxs: "40px",
    xs: "50px",
    s: "60px",
    m: "70px",
    l: "80px",
    xl: "90px",
    xxl: "100px",
    xxxl: "120px",
  },
  betweenItems: {
    xxs: "8px",
    xs: "10px",
    s: "12px",
    xm: "15px",
    m: "20px",
    l: "30px",
    xl: "40px",
    xxl: "50px",
    xxxl: "80px",
  },
};

export type SizeBetweenSections = keyof typeof spacing.betweenSections;
export type SizeBetweenItems = keyof typeof spacing.betweenItems;
export type BlockWidthType = keyof typeof spacing.block.width;
