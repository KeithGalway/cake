// setTheme function sets the CSS properties for light and dark mode
function setTheme(theme) {
    // gets the html element and set to 'root'
    let root = document.documentElement

    // if theme is light
    if (theme === 'light') {
        // set background color for light theme
        root.style.setProperty('--bg-color', '#ECF2FF')
        // set text color for light theme
        root.style.setProperty('--text-color', '#2B283A')
        // set title color for light theme
        root.style.setProperty('--title-color', '#4A4E74')
    // if the theme is dark
    } else if (theme === 'dark') {
        // set background color for dark theme
        root.style.setProperty('--bg-color', '#2B283A')
        // set text color for dark theme
        root.style.setProperty('--text-color', '#ECF2FF')
        // set title color for dark theme
        root.style.setProperty('--title-color', '#D5D4D8')
    }
}

// Choose between themes 'dark' or 'light'
setTheme('dark')

// toggle button functionality
const button = document.getElementById('bulb')
const onBulb = document.getElementById('on')
const offBulb = document.getElementById('off')

button.addEventListener('click', () => {
    if (getComputedStyle(onBulb).display === 'inline') {
        onBulb.style.display = 'none'
        offBulb.style.display = 'inline'
        setTheme('dark')
    } else {
        offBulb.style.display = 'none'
        onBulb.style.display = 'inline'
        setTheme('light')
    }
})