import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const refs = {
  userInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}


let userSelectedDate = null;
let intervalId;
refs.startBtn.disabled = true

refs.startBtn.addEventListener('click', () => {
    if (!userSelectedDate){
        refs.startBtn.disabled = true
        iziToast.error({
            title: 'Error',
            message: "Please choose a date in the future",
        });
    }
    const initTime = userSelectedDate
    intervalId = setInterval(() => {
        const currentTime = Date.now()
        const diff = initTime - currentTime
        const time = convertMs(diff)


        refs.days.textContent = time.days.toString().padStart(2,0)
        refs.hours.textContent = time.hours.toString().padStart(2,0)
        refs.minutes.textContent = time.minutes.toString().padStart(2,0)
        refs.seconds.textContent = time.seconds.toString().padStart(2,0)
    }, 1000)
    
    refs.startBtn.disabled = true
    refs.startBtn.classList.add('js-disabled')
    refs.userInput.disabled = true

    setTimeout(() => {
        clearInterval(intervalId)
        refs.startBtn.classList.remove('js-disabled')
        refs.userInput.disabled = false
    }, initTime - Date.now());


})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0]
        if (userSelectedDate <= new Date()) {
            refs.startBtn.disabled = true
            refs.startBtn.classList.add('js-disabled')
            iziToast.error({
                title: 'Error',
                message: "Please choose a date in the future",
});
        } else {
            refs.startBtn.disabled = false
            refs.startBtn.classList.remove('js-disabled')
            
        }

    }
};

flatpickr('#datetime-picker', options);
