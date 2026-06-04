// ======================================
// ALL MATCHES DATA
// ======================================

const matches = [

    // UPCOMING FIXTURES
    {
        opponent: "Team A",
        date: "2025-08-17",
        displayDate: "Sunday 17 August - 10:30 AM",
        venue: "Home",
        played: false
    },

    {
        opponent: "Team B",
        date: "2025-08-24",
        displayDate: "Sunday 24 August - 10:30 AM",
        venue: "Away",
        played: false
    },



    // PAST RESULTS
    {
        opponent: "Team C",
        date: "2025-08-03",
        displayDate: "Sunday 3 August",
        venue: "Home",
        played: true,
        result: "2 - 1 Win"
    },

    {
        opponent: "Team D",
        date: "2025-07-27",
        displayDate: "Sunday 27 July",
        venue: "Away",
        played: true,
        result: "0 - 0 Draw"
    }

];



// ======================================
// HTML CONTAINERS
// ======================================

const upcomingFixtures =
    document.getElementById("upcomingFixtures");

const pastResults =
    document.getElementById("pastResults");

const monthFilter =
    document.getElementById("monthFilter");



// ======================================
// GET UNIQUE MONTHS
// ======================================

const months = [];

matches.forEach(match => {

    const date = new Date(match.date);

    const month =
        date.toLocaleString("default", {
            month: "long"
        });

    if (!months.includes(month)) {

        months.push(month);

    }

});



// ======================================
// ADD MONTHS TO FILTER
// ======================================

months.forEach(month => {

    monthFilter.innerHTML +=
        `<option value="${month}">
            ${month}
        </option>`;

});



// ======================================
// DISPLAY MATCHES FUNCTION
// ======================================

function displayMatches(selectedMonth = "all") {

    // CLEAR HTML
    upcomingFixtures.innerHTML = "";

    pastResults.innerHTML = "";



    matches.forEach(match => {

        const date = new Date(match.date);

        const month =
            date.toLocaleString("default", {
                month: "long"
            });



        // FILTER CHECK
        if (
            selectedMonth !== "all" &&
            month !== selectedMonth
        ) {
            return;
        }



        // UPCOMING FIXTURES
        if (!match.played) {

            upcomingFixtures.innerHTML +=

            `
            <div class="fixture">

                <p>
                    <strong>Opponent:</strong>
                    ${match.opponent}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${match.displayDate}
                </p>

                <p>
                    <strong>Venue:</strong>
                    ${match.venue}
                </p>

            </div>
            `;

        }



        // PAST RESULTS
        else {

            pastResults.innerHTML +=

            `
            <div class="fixture">

                <p>
                    <strong>Opponent:</strong>
                    ${match.opponent}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${match.displayDate}
                </p>

                <p>
                    <strong>Venue:</strong>
                    ${match.venue}
                </p>

                <p>
                    <strong>Result:</strong>
                    ${match.result}
                </p>

            </div>
            `;

        }

    });

}



// ======================================
// FILTER EVENT LISTENER
// ======================================

monthFilter.addEventListener("change", () => {

    displayMatches(monthFilter.value);

});



// ======================================
// INITIAL DISPLAY
// ======================================

displayMatches();