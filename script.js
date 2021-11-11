function startTicker() {
    setDate()
    setInterval(setDate, 1000)
}

function setDate(){
    const now = new Date();
    const whenWeMeet = new Date("2021-11-12T16:00:00Z")
    const timeUntilSeconds = Math.round((whenWeMeet.getTime() - now.getTime()) / 1000)
    const hoursUntil = Math.floor(timeUntilSeconds / 3600)
    const minutesUntil = Math.floor(timeUntilSeconds / 60) - (hoursUntil * 60)
    const secondsUntil = timeUntilSeconds % 60

    document.getElementById("date-header").textContent = `${hoursUntil}:${minutesUntil}:${secondsUntil}`
}