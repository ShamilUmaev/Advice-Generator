// Fetch random advice
const fetchData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const {slip} = await response.json();
    return slip;
}

// Show loader
const showLoader = () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('hide-loader');
    loader.classList.add('show-loader');
}

// Hide loader
const hideLoader = () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('show-loader');
    loader.classList.add('hide-loader');
}

// Display advice and ID of the advice
const displayAdvice = async () => {
    const h5 = document.querySelector('h5');
    h5.textContent = '';
    const p = document.querySelector('p');
    p.textContent = '';

    showLoader();

    const data = await fetchData();
    setTimeout(hideLoader, 500);
    
    setTimeout(() => {
        // Display ID of the advice
        const adviceId = document.createTextNode(`Advice #${data.id}`);
        h5.appendChild(adviceId);

        // Display advice
        const advice = document.createTextNode(`"${data.advice}"`);
        p.appendChild(advice);
    }, 500);
}

const init = () => {
    document.addEventListener('DOMContentLoaded', displayAdvice);
    const button = document.querySelector('button');
    button.addEventListener('click', displayAdvice);
}

init();