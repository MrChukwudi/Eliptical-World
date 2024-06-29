// script.js
document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Roots hold a tree's history, and branches shape its destiny",
    "Heat captures a flame's soul, but light is it's face",
    "Strength is in a tapestry's threads, and beauty in it's embroidery",
    "A river's legacy is its heritage, and it's culture is in the banks shaping its flow",
    "Glory lives at the mountain's peak, and comprehension rests in it's valleys",
  ];

  const scrollContent = document.getElementById("scroll-content");

  // Duplicate the messages to create a seamless loop
  const duplicatedMessages = messages.concat(messages);

  // Create span elements for each message
  duplicatedMessages.forEach(message => {
    const messageSpan = document.createElement("span");
    messageSpan.textContent = message + " ";
    messageSpan.style.paddingRight = "50px"; // Adjust spacing between messages
    scrollContent.appendChild(messageSpan);
  });

  // Calculate the total width of all messages
  const totalWidth = scrollContent.scrollWidth;

  // Ensure the content spans at least twice the width of the container
  const scrollBoxWidth = document.querySelector('.scroll-box').clientWidth;
  
  // Check if the content width is less than twice the container width
  if (totalWidth < 2 * scrollBoxWidth) {
    // Duplicate the content again to ensure seamless scrolling
    duplicatedMessages.forEach(message => {
      const messageSpan = document.createElement("span");
      messageSpan.textContent = message + " ";
      messageSpan.style.paddingRight = "50px"; // Adjust spacing between messages
      scrollContent.appendChild(messageSpan);
    });
  }

  // Calculate the new total width of all messages
  const newTotalWidth = scrollContent.scrollWidth;

  // Set the duration of the animation based on the new total width
  const speed = 100; // Adjust this value to control the speed (higher is slower)
  const duration = newTotalWidth / speed;
  scrollContent.style.animationDuration = `${duration}s`;
});
