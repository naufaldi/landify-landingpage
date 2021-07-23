import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    body: "Inter, sans-serif",
    heading: "Inter, serif",
  },
  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
    grey: {
      900: "#18191F",
    },
    redvio: {
      500: "#D9186A",
    },
  },
  sizes: {
    ...theme.space,
    container: {
      "2lg": "1110px",
      "2xl": "1440px",
    },
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
    Grid: {
      variants: {
        "grid-12": {
          templateColumns: "repeat(12,1fr)",
          gap: "30px",
        },
      },
    },
    Heading: {
      variants: {
        "heading-one": {
          fontWeight: "800",
          fontSize: "72px",
          lineHeight: "98px",
          color: "grey.900",
        },
        "heading-two": {
          fontWeight: "800",
          fontSize: "48px",
          lineHeight: "64px",
        },
        "heading-three": {
          fontWeight: "800",
          fontSize: "40px",
          lineHeight: "54px",
        },
        "heading-four": {
          fontWeight: "700",
          fontSize: "28px",
          lineHeight: "40px",
        },
        "heading-five": {
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "32px",
        },
      },
    },
    Text: {
      variants: {
        "lead-one": {
          fontSize: "18px",
          lineHeight: "32px",
        },
        "lead-two": {
          fontSize: "14px",
          lineHeight: "24px",
        },
        "body-one": {
          fontSize: "16px",
          lineHeight: "26px",
        },
        "subtitle-one": {
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: "700",
        },
      },
    },
    Container: {
      baseStyle: {
        mx: "auto",
        w: "full",
        px: { base: "24px", sm: "10", xl: "0" },
      },
      variants: {
        dekstop: {
          maxWidth: "container.2lg",
        },
        "dekstop-large": {
          maxWidth: "container.2xl",
        },
        fullWidth: {
          maxWidth: "none",
        },
      },
      defaultProps: {
        variant: "dekstop",
      },
    },
  },
});

export default customTheme;
