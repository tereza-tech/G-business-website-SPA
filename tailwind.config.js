module.exports = {
  mode: "jit",
  purge: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#757575",
        gray_52: "#fff2f7",
        gray_501: "#a3a3a3",
        gray_700: "#575757",
        gray_51: "#f5f7ff",
        gray_53: "#f5faff",
        gray_500: "#949494",
        teal_50: "#deffed",
        gray_101: "#f0f0ff",
        gray_300: "#e6e6e6",
        blue_50: "#d9e8ff",
        gray_50: "#f2f7ff",
        gray_100: "#f2f2f2",
        black_900_0d: "#0000000d",
        blue_51: "#e8f0fc",
        orange_50: "#fff5db",
        orange_51: "#fff7e3",
        black_900: "#000000",
        indigo_A700: "#263bed",
        pink_A400: "#ff007a",
        white_A700: "#ffffff",
        black_900_26: "#00000026",
      },
      fontFamily: {
        avertademopecutteddemo: "Averta Demo PE Cutted Demo",
        proximanova: "Proxima Nova",
      },
      fontSize: {
        fs10: "10px",
        fs12: "12px",
        fs14: "14px",
        fs15: "15px",
        fs16: "16px",
        fs17: "17px",
        fs18: "18px",
        fs19: "19px",
        fs20: "20px",
        fs21: "21px",
        fs24: "24px",
        fs27: "27px",
        fs28: "28px",
        fs31: "31px",
        fs32: "32px",
        fs35: "35px",
        fs40: "40px",
        fs48: "48px",
        fs2714716911315918: "27.14716911315918px",
      },
      letterSpacing: { ls1: "1px" },
      borderWidth: { bw: "none", bw88: "8.8px" },
      borderRadius: {
        radius8: "8px",
        radius20: "20px",
        radius40: "40px",
        radius50: "50%",
        radius60: "60px",
        radius75: "75px",
        radius92: "92px",
        radius645: "64.5px",
      },
      boxShadow: {
        bs: "0px 10px  50px 0px #0000000d",
        bs1: "10px 20px  50px 0px #00000026",
      },
      lineHeight: { lh: "normal" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
