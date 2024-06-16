import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formEl = document.querySelector('.form')



formEl.addEventListener('submit', e => {
    e.preventDefault()

    const userFormData = new FormData(formEl)
    const delay = Number(userFormData.get('delay'));
    const state = userFormData.get('state') === 'fulfilled'

    makePromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});

function makePromise(delay, status) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) resolve(delay);
            else reject(delay);
        }, delay)
    });
    return promise
}
