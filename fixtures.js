// ======================================
// ALL MATCHES DATA
// ======================================

const matches = [

    // UPCOMING FIXTURES
    {
        opponent: "TBC",
        date: "TBC",
        displayDate: "TBC",
        venue: "TBC",
        played: false
    },

    {
        opponent: "TBC",
        date: "TBC",
        displayDate: "TBC",
        venue: "TBC",
        played: false
    },

    // PAST RESULTS
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
// ❗ CHANGED: Now using fixed full year instead of detecting from data

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];



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
