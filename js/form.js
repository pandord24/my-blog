const formElement = document.querySlelector('form');

const handleFormSubmit = function(event) {
event.preventDefault();
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
}


const redirectPage = function() {

}

const storeBlogDataLocalStorage = function(data) {

}

formElement.addEventListener('submit', handleFormSubmit)