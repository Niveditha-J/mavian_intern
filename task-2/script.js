function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

const clock=document.getElementById("clock");
clock.addEventListener("click",()=>{
    setInterval(updateClock, 1000);//every millisecond
    updateClock();
});