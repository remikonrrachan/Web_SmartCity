var video = document.getElementById("video");
var btn = document.getElementById("myBtn");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}
const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
sr.reveal('.box0',{delay: 200, origin: 'top'})
sr.reveal('.box1',{delay: 200, origin: 'top'})
sr.reveal('.box2',{delay: 200, origin: 'top'})
sr.reveal('.box3',{delay: 200, origin: 'top'})
sr.reveal('.box4',{delay: 200, origin: 'top'})
sr.reveal('.box5',{delay: 200, origin: 'top'})
sr.reveal('.box6',{delay: 200, origin: 'top'})
sr.reveal('.box7',{delay: 200, origin: 'top'})
sr.reveal('.MR',{delay: 200, origin: 'top'})