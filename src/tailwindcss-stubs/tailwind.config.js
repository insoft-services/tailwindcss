
module.exports = {
	// purge blade and css fiels 
  purge: ['./resources/views/**/*.blade.php', './resources/sass/**/*.scss', './resources/css/**/*.css'],
  theme: {
  	// add correct fonts to the theme
    fontFamily: {
      'sans': ['Prometo', 'sans-serif'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'body': ['Soleto', 'sans-serif'] 
    },
    // add extra minheight values
    minHeight: {
      '0': '0',
      '1/12': '8.33%',
      '2/12': '16.66%',
      '3/12': '25%',
      '4/12': '33.33%',
      '5/12': '41.66%',
      '6/12': '50%',
      '7/12': '58.33%',
      '8/12': '66.66%',
      '9/12': '75%',
      '10/12': '83.33%',
      '11/12': '91.66%',
      'full': '100%',
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      'screen': '100vh',
      '120': '120px',
      '150': '150px',
      '180': '180px',
      '240': '240px',
      '280': '280px',
      '320': '320px',
      '480': '480px',
      '640': '640px'
    },
    opacity: {
      '0': '0',
      '5': '.05',
      '10': '.1',
      '15': '.15',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '35': '.35',
      '40': '.4',
      '45': '.45',
      '50': '.5',
      '55': '.55',
      '60': '.6',
      '65': '.65',
      '70': '.7',
      '75': '.75',
      '80': '.8',
      '85': '.85',
      '90': '.9',
      '95': '.95',
      '100': '1',
    },

    filter: {
      // defaults to {}
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
      brighter: 'brightness(1.25)',
      darker: 'brightness(0.75)',
    },
    backdropFilter: {
      // defaults to {}
      none: 'none',
      blur: 'blur(20px)',
    },

    extend: {
      // extend more width values
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
      },

      // extended theme colours of Insoft services
      colors: {
        primary: {
          // Oxford
          default: '#334755',
          100: '#EBEDEE',
          200: '#CCD1D5',
          300: '#ADB5BB',
          400: '#707E88',
          500: '#334755',
          600: '#2E404D',
          700: '#1F2B33',
          800: '#172026',
          900: '#0F151A',
        },
        secondary: {
          default: '#82C579',
          100: '#F3F9F2',
          200: '#E0F1DE',
          300: '#CDE8C9',
          400: '#A8D6A1',
          500: '#82C579',
          600: '#75B16D',
          700: '#4E7649',
          800: '#3B5936',
          900: '#273B24',
        },
        tertiary: {
          default: '#5C7B8F',
          100: '#EFF2F4',
          200: '#D6DEE3',
          300: '#BECAD2',
          400: '#8DA3B1',
          500: '#5C7B8F',
          600: '#536F81',
          700: '#374A56',
          800: '#293740',
          900: '#1C252B',
        },
        quartary: {
          default: '#556978',
          100: '#EEF0F2',
          200: '#D5DADD',
          300: '#BBC3C9',
          400: '#8896A1',
          500: '#556978',
          600: '#4D5F6C',
          700: '#333F48',
          800: '#262F36',
          900: '#1A2024',
        },
		// some default styling colors generated for the page 		
        white: '#FFFFFF',
        black: '#020202',
        transparent: 'transparent',
        brand: '#334755',
        cta: '#553336',
        info: '#3cbdda',
        warning: '#d7bc32',
        success: '#41ca4e',
        danger: '#d84248',
        error: '#FF6363',
        searchbar: '#DCF0FA',
      },
    },

    variants: {
      minHeight: ['responsive'],
      rotate: ['responsive', 'hover', 'focus', 'active', 'checked'], // required for rotating arrow in course page's details accordion
      filter: ['responsive, hover'], // defaults to ['responsive']
      backdropFilter: ['responsive, hover'], // defaults to ['responsive']
    },

    plugins: [
      require('cssnano')({ preset: 'default', }), // to minimize code
      require('tailwindcss-filters'), // add tailwind filters plugin to for creating inline class filters
      require('@tailwindcss/ui'), //tailwindcss ui
  ],
  future: {
   	    removeDeprecatedGapUtilities: true
   	      },
   }
}
