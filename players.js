// ======================================
// PLAYERS DATA
// ======================================

const players = [

    {
        name: "Hassan Hussain",
        position: "Defender",
        image: "hassan aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Ali Shiri",
        position: "Forward",
        image: "ali shiri aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Ameen Ahmed",
        position: "Midfielder",
        image: "ameen aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Harvey Ellis",
        position: "Defender",
        image: "harvey aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Kamraan Brooks",
        position: "Midfielder",
        image: "kam aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Alfie Rutherford",
        position: "Midfielder",
        image: "alfie aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Mehbub Hoque",
        position: "Midfielder",
        image: "mebs aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Reyad al Zain",
        position: "Midfielder",
        image: "reyad new.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Oliver Spiby",
        position: "Goalkeeper",
        image: "Ollie aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Jamal Hussain",
        position: "Forward",
        image: "jamal aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Max Watson",
        position: "Midfielder",
        image: "max aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Yacob El Houbli Ibrahim",
        position: "Midfielder",
        image: "yacob aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Yusuf Murtza",
        position: "Defender",
        image: "yusuf aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Usaama Hussain",
        position: "Defender",
        image: "Usaama aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Aaryan Ul-Haq",
        position: "Midfielder",
        image: "Aryaan aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Musa Muhammed",
        position: "Forward",
        image: "Musa aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Dominik Zuber",
        position: "Defender",
        image: "dom aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Saif Ali",
        position: "Midfielder",
        image: "saif aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Abdullah Yousaf",
        position: "Defender",
        image: "Abdullah aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },
     {
        name: "Muhammad Haadi",
        position: "Defender",
        image: "Haadi.jpeg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Haaziq Ul-Haq",
        position: "Defender",
        image: "grey face aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    },

    {
        name: "Lukasz Barkowski",
        position: "Goalkeeper",
        image: "grey face aqsa.jpg",
        apps: 0,
        goals: 0,
        assists: 0
    }

];



// ======================================
// PLAYERS CONTAINER
// ======================================

const playersContainer =
    document.getElementById("playersContainer");



// ======================================
// DISPLAY PLAYERS
// ======================================

players.forEach(player => {

    playersContainer.innerHTML +=

    `
    <div class="player-card">

        <img
            src="${player.image}"
            alt="${player.name}"
            class="player-image"
        >

        <div class="player-info">

            <h2>${player.name}</h2>

            <p class="position">
                ${player.position}
            </p>

            <div class="stats">

                <div class="stat-box">
                    <span>Apps</span>
                    <h3>${player.apps}</h3>
                </div>

                <div class="stat-box">
                    <span>Goals</span>
                    <h3>${player.goals}</h3>
                </div>

                <div class="stat-box">
                    <span>Assists</span>
                    <h3>${player.assists}</h3>
                </div>

            </div>

        </div>

    </div>
    `;

});
