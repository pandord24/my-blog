const themeSwitcher = document.querySelector('#theme-switcher');
const body = document.querySelector('body');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    body.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    body.setAttribute('class', 'dark');
  }
});



const UsernameInput = document.querySelector('#Username');
const TitleInput = document.querySelector('#Title');
const blogInput = document.querySelector('#blog');
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // create user object from submission
  const data = {
    Username: UsernameInput.value.trim(),
    Title: TitleInput.value.trim(),
    blog: blogInput.value.trim(),
  }

  // set new submission to local storage
  handleSave (data)
});

function handleSave (data) {
    const blogs=JSON.parse(localStorage.getItem("blog"))||[]
    blogs.push(data)
    localStorage.setItem('blog', JSON.stringify(blogs));
}