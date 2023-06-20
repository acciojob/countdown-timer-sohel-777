window.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('userInput');
  const startButton = document.querySelector('button');
  const countDownDisplay = document.getElementById('countDown');
  const endTimeDisplay = document.getElementById('endTime');

  // Function to start the countdown
  function startCountdown(duration) {
    const endTime = new Date(Date.now() + duration * 60 * 1000); // Calculate end time
    displayEndTime(endTime); // Display the end time

    const interval = setInterval(updateCountdown, 1000); // Update countdown every second

    // Function to update the countdown display
    function updateCountdown() {
      const remainingTime = Math.round((endTime - Date.now()) / 1000); // Calculate remaining time in seconds

      if (remainingTime >= 0) {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        countDownDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      } else {
        clearInterval(interval); // Stop the countdown
        countDownDisplay.textContent = 'Countdown Complete';
      }
    }
  }

  // Function to display the end time
  function displayEndTime(endTime) {
    const hours = endTime.getHours();
    const minutes = endTime.getMinutes();
    endTimeDisplay.textContent = `${hours}:${minutes.toString().padStart(2, '0')}`;
  }

  // Event listener for start button click
  startButton.addEventListener('click', () => {
    const duration = parseInt(userInput.value); // Get the duration from user input
    startCountdown(duration);
  });

  // Start the default timers
  const defaultTimers = [5, 10, 15]; // Array of default timer durations in minutes

  defaultTimers.forEach((duration, index) => {
    setTimeout(() => {
      startCountdown(duration);
    }, (index + 1) * 1000); // Delay the start of each default timer by 1 second
  });
});
