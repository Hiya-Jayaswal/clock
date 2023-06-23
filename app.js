const UI ={
    date: document.querySelector('.date'),
    am_pm: document.querySelector('.am-pm'),
    second: document.querySelector('.hand--second'),
    minute: document.querySelector('.hand--minute'),
    hour: document.querySelector('.hand--hour'),
}

function updateClock(){
    const now = new Date();
    const date = now.getDate();
    const seconds = now.getSeconds()/60 *360;
    const minutes = now.getMinutes()/60*360;
    const hours = now.getHours()/12*360;
    UI.date.textContent = date;
    UI.second.style.transform = `rotate(${seconds}deg)`;
    UI.minute.style.transform = `rotate(${minutes}deg)`;
    UI.hour.style.transform = `rotate(${hours}deg)`;
    UI.am_pm.textContent= now.getHours()>12 ? 'PM': 'AM'
    requestAnimationFrame(updateClock)
}
requestAnimationFrame(updateClock)