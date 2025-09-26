// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamDropdown = document.getElementById("teamSelect");

// Track attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  // Prevent form from submitting normally
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamDropdown.value;
  const teamName = teamDropdown.selectedOptions[0].text;

  // Log the values to the console (it works)
  // console.log(`Name: ${name}, Team Name: ${teamName}`);

  count++; // Increment and check attendance count
  // console.log(`Current attendance count: ${count}`);

  // Update the attendance count and check if max is reached
  if (count > maxCount) {
    console.log("Maximum attendance reached. No more check-ins allowed.");
    count = maxCount;
    return;
  } else {
    const attendeeCount = document.getElementById("attendeeCount");
    attendeeCount.innerText = count;
  }

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  // console.log(`Attendance percentage: ${percentage}`);

  const progressBar = document.getElementById("progressBar");

  progressBar.style.width = percentage; // Update the width of the progress bar
  progressBar.innerText = percentage; // Update the text inside the progress bar

  // Greeting message
  emoji = "🎉";
  const greeting = document.getElementById("greeting");
  greeting.innerText = `${emoji} Welcome, ${name} from ${teamName}!`;
  greeting.style.display = "block";

  if (count === maxCount) {
    // LevelUp: Reach the attendance goal triggers a celebration message and highlights for the winning team
    greeting.innerText = `Congratulations to ${teamName} for reaching the most check-ins! 🎉  `;

    // Highlight the winning team counter
    const winningTeam = document.getElementById(team + "Count");
    winningTeam.style.backgroundColor = "gold";
    winningTeam.style.fontWeight = "bold";
  }

  // Update team counters
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.innerText = parseInt(teamCounter.innerText) + 1;

  // LevelUp: Attendee names and selected teams are displayed and updated
  const attendeeList = document.getElementById("attendeeList");
  const listItem = document.createElement("ul");
  listItem.innerText = `${name} (${teamName})`;
  attendeeList.appendChild(listItem);

  form.reset();
});
