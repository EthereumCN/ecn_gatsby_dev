import React from "react"
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core"
import theme from "./theme/theme"
require("prismjs/themes/prism-solarizedlight.css")

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    {/* {console.log(window.localStorage.getItem('darkMode'))} */}
    {/* {window.localStorage && window.localStorage.setItem('darkMode',false)} */}
    {typeof window !== "undefined" &&
      window.localStorage.setItem("darkMode", false)}
    <ColorModeProvider>
      <CSSReset />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
)
