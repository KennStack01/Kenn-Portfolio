module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['montserrat Alternates regular', 'poppins light', 'ui-sans-serif', 'system-ui'],
       'serif': ['montserrat Alternates medium', 'poppins medium', 'ui-serif', 'Georgia'],
    },
    extend: {
      colors: {
        mirage: {  
          DEFAULT: '#192734',  
          '50': '#769BBD',  
          '100': '#648EB5',  
          '200': '#4B749B',  
          '300': '#3A5B79',  
          '400': '#2A4156',  
          '500': '#192734',  
          '600': '#080D12',  
          '700': '#000000',  
          '800': '#000000',  
          '900': '#000000'
        },
        myYellow: {  
          DEFAULT: '#EBFF03',  
          '50': '#FDFFE9',  
          '100': '#FBFFCF',  
          '200': '#F7FF9C',  
          '300': '#F3FF69',  
          '400': '#EFFF36',  
          '500': '#EBFF03',  
          '600': '#BFCF00',  
          '700': '#909C00',  
          '800': '#616900',  
          '900': '#323600'
        },
      }
    },
    borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
