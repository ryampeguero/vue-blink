import { createApp } from 'vue'
import './scss/general.scss'
import App from './App.vue'
import {router} from "./router.js"

createApp(App).use(router).mount('#app')

function myInputNumber(inputNumberContainer) {
    // console.log(inputNumber.querySelector('#input_value'));
    const inputValue = inputNumberContainer.querySelector('#input_value');
    const msValue = inputNumberContainer.querySelector('#ms_value');
    console.log(msValue);
    const minusBtn = inputNumberContainer.querySelector('#minus');
    const plusBtn = inputNumberContainer.querySelector('#plus');


    msValue.innerHTML = inputValue.value;

    minusBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (inputValue.value != 0) {
            inputValue.value--;
        }
        msValue.innerHTML = inputValue.value;
    })

    plusBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();

        if (inputValue.value < 100) {
            inputValue.value++;
        }
        msValue.innerHTML = inputValue.value;
    })
}