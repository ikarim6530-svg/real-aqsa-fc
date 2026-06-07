// ======================================
// LEAGUE TABLE DATA
// ======================================

const leagueTable = [

    {
        team: "Real Aqsa FC",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        points: 0,
        form: []
    },

    {
        team: "TBC",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        points: 0,
        form: []
    },

    {
        team: "TBC",
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        points: 0,
        form: []
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
