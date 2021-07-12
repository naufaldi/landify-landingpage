import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    body: "Lexend, sans-serif",
    heading: "Lexend, serif",
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
    Heading: {
      variants: {
        "heading-one": {
          fontWeight: "800",
          fontSize: "72px",
          lineHeight: "98px",
          color: "grey.900",
        },
      },
    },
    Text: {
      variants: {
        "lead-one": {
          fontSize: "180x",
          lineHeight: "32px",
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
