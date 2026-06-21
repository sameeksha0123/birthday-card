// script.js

// Select DOM components
const viewBtn = document.getElementById('viewBtn');
const videoContainer = document.getElementById('videoContainer');
const myVideo = document.getElementById('myVideo');

// Handle button click event
viewBtn.addEventListener('click', () => {
    // Reveal the video block layout
    videoContainer.classList.remove('hidden');
    
    // Automatically play the clip
    myVideo.play();
    
    // Optional: Hide the button once clicked
    viewBtn.style.display = 'none';
});