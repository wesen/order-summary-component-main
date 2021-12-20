module.exports = {
    content: ["./*.html", "./src/*.{html,js,jsx,ts,tsx}", "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: '375px',
            lg: '1440px',
        },
        extend: {
            backgroundImage: {
                'pattern-desktop': "url('/images/pattern-background-desktop.svg')",
                'pattern-mobile': "url('/images/pattern-background-mobile.svg')",
            },
            colors: {
                'black': '#1f2e55',
                'pale-blue': 'hsl(225, 100%, 94%)',
                'bright-blue': 'hsl(245, 75%, 52%)',
                'very-pale-blue': 'hsl(225, 100%, 98%)',
                'desaturated-blue': 'hsl(224, 23%, 55%)',
                'dark-blue': 'hsl(223, 47%, 23%)',
                'light-text': '#717FA6',
                purple: '#766CF1'
            },
            boxShadow: {
                'card': '0px 40px 40px -20px rgba(13, 48, 189, 0.15)',
                'button': '0px 20px 20px rgba(56, 42, 225, 0.19)'
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                'red-hat-display': ['Red Hat Display', 'sans-serif']
            },
            fontSize: {
                'body-md': ['15px', '25px'],
                'body-lg': ['16px', '26px'],
                'heading': '22px',
                'heading-lg': ['28px', '37px'],
                'caption-md': ['14px', '18.5px'],
                'caption-lg': ['16px', '21.17px'],
                'button': ['15px', '20px'],
                'link-md': ['13px', '17.2px'],
                'caption': '16px',
                'caption-bold': '16px'
            }
        },
    },
    plugins: [],
}
