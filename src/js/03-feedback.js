import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector('textarea');
const feedbackFormStateKey = 'feedback-form-state';

function saveFormState() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));
}

function restoreFormState() {
    const savedFormData = localStorage.getItem(feedbackFormStateKey);
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

function clearFormState() {
    localStorage.removeItem(feedbackFormStateKey);
    form.reset();
}

function onSubmit(event) {
    event.preventDefault();

    if (emailInput.value === '' || messageInput.value === '') {
        return alert('Заповніть всі поля.');
    }

    console.log('Form Data:', {
        Email: emailInput.value,
        Message: messageInput.value,
    });

    clearFormState();
}

form.addEventListener('input', throttle(saveFormState, 500));
document.addEventListener('DOMContentLoaded', restoreFormState);
form.addEventListener('submit', onSubmit);
