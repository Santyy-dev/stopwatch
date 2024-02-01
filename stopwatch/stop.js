let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let seconds = 0;
let min = 0;
let milli = 0;
let set;
start.addEventListener("click", () => {
  set = setInterval(() => {
    milli++;
    if (milli == 60) {
      milli = 0;
      seconds++;
    }
    if (milli <= 9) {
      milli = "0" + milli;
    }
    if (seconds <= 9) {
      seconds = "0" + seconds++;
    } else seconds;

    if (seconds == 60) {
      seconds = 0;
      min++;
    }

    if (min <= 9) {
      min = "0" + min++;
    } else min = min;

    document.getElementById("time").innerHTML =
      min + " " + ":" + " " + seconds + ":" + " " + milli;
  }, 100);
});

reset.addEventListener("click", () => {
  clearInterval(set);
  {
    seconds = "00";
    min = "00";
    milli = "00";
    document.getElementById("time").innerHTML =
      min + " " + ":" + " " + seconds + " " + ":" + " " + milli;
  }
});
stop.addEventListener("click", () => {
  clearInterval(set);
  {
    document.getElementById("time").innerHTML =
      min + " " + ":" + " " + seconds + " " + ":" + " " + milli;
  }
});
