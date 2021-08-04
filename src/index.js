const themeSwitcher = document.querySelector("#theme-switch-toggle");
const fullScreen = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', Theme.LIGHT)
};

fullScreen.classList.add(localStorage.getItem('theme'));

if (localStorage.getItem('theme') === Theme.DARK) {
    themeSwitcher.checked = true;
    console.log('working');
}

themeSwitcher.addEventListener('change', onThemeToggle);

function onThemeToggle(e) {
    if (themeSwitcher.checked) {
        localStorage.setItem('theme', Theme.DARK);
        fullScreen.classList.remove(Theme.LIGHT);
        fullScreen.classList.add(Theme.DARK);
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        fullScreen.classList.remove(Theme.DARK);
        fullScreen.classList.add(Theme.LIGHT);
    }
}