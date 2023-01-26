export const typography = {
  fontWeight: {
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  },
  heading: {
    lineHeight: {
      h1: "60px",
      h2: "56px",
      h3: "40px",
      h4: "33px",
      h5: "30px",
      h6: "24px",
      h7: "24px",
    },
    fontSize: {
      h1: "46px",
      h2: "38px",
      h3: "30px",
      h4: "22px",
      h5: "20px",
      h6: "16px",
      h7: "14px",
    },
    fontFamily: '"Manrope", sans-serif',
  },
  paragraph: {
    lineHeight: {
      p1: "33px",
      p2: "28px",
      p3: "24px",
    },
    fontSize: {
      p1: "20px",
      p2: "16px",
      p3: "14px",
    },
    fontFamily: '"Manrope", sans-serif',
  },
};

export type FontWeightTypography = keyof typeof typography.fontWeight;

export type HeadingTypeographyLevels = keyof typeof typography.heading.fontSize;
export type ParagraphTypeographyLevels = keyof typeof typography.paragraph.fontSize;
