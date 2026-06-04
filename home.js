// ==============================
// NEXT MATCH DATA
// ==============================

const nextMatch = {
    opponent: "Blackrose FC",
    location: "Home",
    date: "August 24, 2026 10:30:00"
};


// ==============================
// LAST RESULTS DATA
// ==============================

const results = [

    "Real Aqsa FC 2 - 1 Team B",

    "Real Aqsa FC 0 - 0 Team C",

    "Real Aqsa FC 3 - 2 Team D"

];


// ==============================
// INSERT MATCH INFO INTO HTML
// ==============================

document.getElementById("opponent").innerHTML =
    `<strong>Opponent:</strong> ${nextMatch.opponent}`;

document.getElementById("location").innerHTML =
    `<strong>Location:</strong> ${nextMatch.location}`;

document.getElementById("match-date").innerHTML =
    `<strong>Date & Time:</strong> ${nextMatch.date}`;



// ==============================
// COUNTDOWN TIMER
// ==============================

const matchDate = new Date(nextMatch.date).getTime();

const countdown = document.getElementById("countdown");


setInterval(() => {

    const now = new Date().getTime();

    const distance = matchDate - now;


    // MATCH STARTED
    if (distance < 0) {

        countdown.innerHTML = "Match Started!";

        return;
    }


    // TIME CALCULATIONS
    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );


    // DISPLAY COUNTDOWN
    countdown.innerHTML =
        `${days}d ${hours}h ${minutes}m`;

}, 1000);



// ==============================
// DISPLAY LAST RESULTS
// ==============================

const resultsContainer =
    document.getElementById("results-container");


results.forEach(result => {

    resultsContainer.innerHTML +=
        `<div class="result">${result}</div>`;

});