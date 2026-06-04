// ======================================
// LEAGUE TABLE DATA
// ======================================

const leagueTable = [

    {
        team: "Real Aqsa FC",
        played: 10,
        wins: 7,
        draws: 2,
        losses: 1,
        gf: 20,
        ga: 10,
        points: 23,
        form: ["W", "W", "D"]
    },

    {
        team: "Team B",
        played: 10,
        wins: 6,
        draws: 3,
        losses: 1,
        gf: 18,
        ga: 9,
        points: 21,
        form: ["W", "L", "W"]
    },

    {
        team: "Team C",
        played: 10,
        wins: 5,
        draws: 2,
        losses: 3,
        gf: 15,
        ga: 12,
        points: 17,
        form: ["D", "W", "L"]
    }

];



// ======================================
// SORT TABLE BY POINTS
// ======================================

leagueTable.sort((a, b) => b.points - a.points);



// ======================================
// TABLE BODY
// ======================================

const tableBody =
    document.getElementById("table-body");



// ======================================
// DISPLAY TABLE
// ======================================

leagueTable.forEach(team => {

    // GOAL DIFFERENCE
    const gd = team.gf - team.ga;



    // FORM HTML
    let formHTML = "";

    team.form.forEach(result => {

        let className = "";

        if (result === "W") {
            className = "win";
        }

        else if (result === "D") {
            className = "draw";
        }

        else {
            className = "loss";
        }



        formHTML +=
            `<span class="${className}">
                ${result}
            </span>`;

    });



    // HIGHLIGHT REAL AQSA
    const rowClass =
        team.team === "Real Aqsa FC"
        ? "highlight"
        : "";



    // CREATE ROW
    tableBody.innerHTML +=

    `
    <tr class="${rowClass}">

        <td>${team.team}</td>

        <td>${team.played}</td>

        <td>${team.wins}</td>

        <td>${team.draws}</td>

        <td>${team.losses}</td>

        <td>${team.gf}</td>

        <td>${team.ga}</td>

        <td>${gd}</td>

        <td>${team.points}</td>

        <td class="form">
            ${formHTML}
        </td>

    </tr>
    `;

});