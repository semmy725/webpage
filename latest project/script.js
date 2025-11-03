Document.getElementBYld('Change-greeting').addEventListener('clickFunction')
    ConstgreetingElement = Documents.getElementBYld('greeting');
    const newGreeting=prompt('Enter a new greeting:');
    if(newGreeting){
    greetingElement.textcontent=newGreeting
  }

  const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});

const container = document.querySelector('.auto-scroll-container');
const content = document.querySelector('.auto-scroll-content');

let scrollHeight = content.scrollHeight;
let containerHeight = container.clientHeight;
let scrollPosition = 0;
const scrollSpeed = 1; // Adjust speed

function autoScroll() {
  scrollPosition += scrollSpeed;
  container.scrollTop = scrollPosition;

  if (scrollPosition >= scrollHeight - containerHeight) {
    scrollPosition = 0; // Reset scroll position
  }
}

setInterval(autoScroll, 50); // Adjust interval for spe5