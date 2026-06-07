// ==============================
// NEXT MATCH DATA
// ==============================

const nextMatch = {
    opponent: "TBC",
    location: "TBC",
    date: "TBC"
};


// ==============================
// LAST RESULTS DATA
// ==============================

const results = [
"No Competative Fixtures Yet"

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
// SEASON MESSAGE
// ==============================

const countdown = document.getElementById("countdown");

countdown.innerHTML =
    "2026/27 Season Fixtures Coming Soon";
