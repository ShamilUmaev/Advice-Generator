// Fetch random advice
const fetchData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const {slip} = await response.json();
    return slip;
}

// Display advice and ID of the advice
const displayAdvice = async () => {
    const data = await fetchData();
    
    // Display ID of the advice
    const h5 = document.querySelector('h5');
    h5.textContent = '';
    const adviceId = document.createTextNode(`Advice #${data.id}`);
    h5.appendChild(adviceId);

    // Display advice
    const p = document.querySelector('p');
    p.textContent = '';
    const advice = document.createTextNode(`"${data.advice}"`);
    p.appendChild(advice);
}

const init = () => {
    document.addEventListener('DOMContentLoaded', displayAdvice);
    const button = document.querySelector('button');
    button.addEventListener('click', displayAdvice);
}

init();