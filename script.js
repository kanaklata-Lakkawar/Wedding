// Set the date we're counting down to
var countDownDate = new Date("Dec 7, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " Days : " + hours + " Hrs : " + minutes + " Min : " + seconds + " Sec";
  
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    document.getElementById("abbreviations").innerHTML = "";
  }
}, 1000);

const total = 30;
const dotContainer = document.querySelector(".dot-container");
const w = window.innerWidth;
const h = window.innerHeight;

for (let i = 0; i < total; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = Math.random() * w + 'px';
  dot.style.top = -Math.random() * h + 'px';
  dotContainer.appendChild(dot);

  animateDot(dot);
}

function animateDot(dot) {
  const duration = Math.random() * 10 + 6; // Random duration between 6 and 16 seconds
const fallDistance = h + 100;
  dot.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;
  dot.style.transform = `translateY(${h}px)`;
  dot.style.opacity = '0';

  setTimeout(() => {
    dot.style.transition = 'none';
    dot.style.transform = 'translateY(-100px)';
    dot.style.opacity = '1';

    requestAnimationFrame(() => {
      animateDot(dot);
    });
  }, duration * 1000);
}



