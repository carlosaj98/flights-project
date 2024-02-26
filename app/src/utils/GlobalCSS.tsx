import { GlobalStyles } from "@mui/material"

function GlobalCSS() {
  return <GlobalStyles styles={{
    ":root":{
      "--primary-color-light": "#b5e4ff",
      "--primary-color-semilight": "#1e9bff",
      "--primary-color-base": "#0067ff",
      "--primary-color-semidark": "#0d469b",
      "--primary-color-dark": "#0e2b5d",

      "--secondary-color-light": "#fff6c5",
      "--secondary-color-semilight": "#ffde46",
      "--secondary-color-base": "#ffaa00",
      "--secondary-color-semidark": "#bb5902",
      "--secondary-color-dark": "#7c380b",
      
      "--font-base": "Noto Sans, sans-serif",
      
    },

    "*":{
      boxSizing:"border-box",
      padding: 0,
      margin: 0
    },

    body:{
      fontFamily:"var(--font-base)",
    }
  }} />
}
export default GlobalCSS
