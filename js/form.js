const formElement = document.querySelector('#button');

const handleFormSubmit = function(event) {
event.preventDefault();
console.log("test")
const usernameElement = document.querySelector('#username').value.trim();
const titleElement = document.querySelector('#title').value.trim();
const contentElement = document.querySelector('#content').value.trim();

if(!usernameElement || !titleElement || !contentElement ) {
    const errorElement = document.querySelector('#error');
    errorElement.textContent = 'Please fill in all fields';

    setTimeout (() => {
        errorElement.textContent = '';
    }, 3000);

    return;
}
const newblogs={username:usernameElement, title:titleElement, content:contentElement}
storeBlogDataLocalStorage(newblogs)
redirectPage()
}


const redirectPage = function() {
location.href="./blog.html"
}

const storeBlogDataLocalStorage = function(data) {
const blogs =JSON.parse(localStorage.getItem("blogs"))||[]
blogs.push(data)
localStorage.setItem("blogs",JSON.stringify(blogs))
}

formElement.addEventListener('click', handleFormSubmit)