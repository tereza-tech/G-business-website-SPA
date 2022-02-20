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
        gray_52: "#fff2f7",
        gray_51: "#f5f7ff",
        gray_53: "#f5faff",
        red_900: "#912b2b",
        black_900_5b: "#0000005b",
        red_400: "#e05252",
        gray_50: "#f2f7ff",
        blue_100_5b: "#adcfff5b",
        black_900: "#000000",
        pink_A400: "#ff007a",
        black_900_26: "#00000026",
        gray_600: "#757575",
        gray_501: "#a3a3a3",
        gray_700: "#575757",
        gray_601: "#737373",
        gray_400: "#bababa",
        gray_500: "#949494",
        orange_A200: "#e3a642",
        gray_901: "#171717",
        amber_400: "#fcd91a",
        gray_902: "#262626",
        gray_800: "#4a4a4a",
        gray_900: "#292929",
        blue_600: "#3882e0",
        teal_50: "#deffed",
        gray_101: "#f0f0ff",
        gray_300: "#e6e6e6",
        blue_50: "#d9e8ff",
        gray_100: "#f2f2f2",
        black_900_0d: "#0000000d",
        blue_51: "#e8f0fc",
        orange_50: "#fff5db",
        orange_51: "#fff7e3",
        indigo_A700: "#263bed",
        bluegray_500: "#697d9c",
        lime_50: "#f5ffde",
        white_A700: "#ffffff",
      },
      fontFamily: {
        alef: "Alef",
        girassol: "Girassol",
        aksarabaligalang: "Aksara Bali Galang",
        poppins: "Poppins",
        sora: "Sora",
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
        fs22: "22px",
        fs23: "23px",
        fs24: "24px",
        fs25: "25px",
        fs27: "27px",
        fs28: "28px",
        fs30: "30px",
        fs31: "31px",
        fs32: "32px",
        fs35: "35px",
        fs37: "37px",
        fs40: "40px",
        fs42: "42px",
        fs44: "44px",
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
        radius73: "73px",
        radius75: "75px",
        radius92: "92px",
        radius645: "64.5px",
        radius825: "82.5px",
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
