// Function to generate and display the calendar
function generateCalendar() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    // Create calendar header
    const header = document.createElement("h2");
    header.textContent = monthNames[currentMonth] + " " + currentYear;
    document.querySelector(".calendar").appendChild(header);

    // Create calendar table
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Calculate the day of the week of the first day of the month
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

    // Create table rows and cells for the calendar
    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
                // Empty cells before the first day of the month and after the last day of the month
                const cell = document.createElement("td");
                row.appendChild(cell);
            } else {
                // Cells with the day number
                const cell = document.createElement("td");
                cell.textContent = dayCounter;
                row.appendChild(cell);
                dayCounter++;
            }
        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    document.querySelector(".calendar").appendChild(table);
}

// Call the function to generate and display the calendar
generateCalendar();
