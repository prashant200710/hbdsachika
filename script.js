// Select all the cards
const cards = document.querySelectorAll('.card');

// Adjust card heights dynamically (simulating Masonry layout)
window.addEventListener('load', () => {
    cards.forEach(card => {
        const randomHeight = Math.random() * (400 - 250) + 250; // Random height between 250px and 400px
        card.style.height = `${randomHeight}px`;
    });
});

// Add a hover effect
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Scroll to top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆ Scroll to Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';


// Search bar functionality
document.getElementById("search-bar").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Prevent default form submission
        event.preventDefault();

        // Get the search query
        const query = event.target.value;

        // Redirect to Google search with the query
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});




// Select all videos with the class 'hover-video'
const hoverVideos = document.querySelectorAll('.hover-video');

// Add event listeners to play/pause on hover
hoverVideos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play(); // Play video when mouse enters
    });

    video.addEventListener('mouseleave', () => {
        video.pause(); // Pause video when mouse leaves
        video.currentTime = 0; // Optional: Reset to start
    });
});

// JavaScript to handle the pop-up
document.addEventListener("DOMContentLoaded", () => {
    // Get all the images/videos
    const clickableItems = document.querySelectorAll(".clickable");

    // Get the pop-up elements
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    const closeBtn = document.querySelector(".close-btn");

    // Add click event to each clickable item
    clickableItems.forEach((item) => {
        item.addEventListener("click", () => {
            const message = item.getAttribute("data-message"); // Get custom message
            popupText.textContent = message; // Set the message in the pop-up
            popup.style.display = "flex"; // Show the pop-up
        });
    });

    // Close the pop-up when the close button is clicked
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close the pop-up when clicking outside the content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});