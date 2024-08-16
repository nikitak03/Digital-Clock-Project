function updateClock() {
    const clockElement = document.querySelector('.clock');
    const dateElement = clockElement.querySelector('.date');
    const timeElement = clockElement.querySelector('.time');

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString();

    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock(); 
