function clockRun() {
    const phoneClock = document.querySelector(".device-header-left-time")
    setInterval(() => { 
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const nowClockText = `${nowHours}:${nowMinutes}`;

        const nowAmPmText = now.getHours() <= 12 ? "AM" : "PM"; 


        phoneAmPm.innerHTML = nowAmPmText;
        phoneClock.innerHTML = nowClockText;
    }, 1000);
}

clockRun();