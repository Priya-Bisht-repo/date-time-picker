const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const output = document.getElementById("output");

function updatePreview() {
  const date = dateInput.value;
  const time = timeInput.value;

  if (date && time) {
    output.textContent = `🗓️ Selected: ${date} at ${time}`;
  } else {
    output.textContent = "🕒 No date & time selected";
  }
}

dateInput.addEventListener("change", updatePreview);
timeInput.addEventListener("change", updatePreview);
