// toggles

let isTImerDOne = false;

let isToast = false;

// bread variable
const bread = {
  size: [60, 40, 5],
  burnPoint: 600,
  toastPoint: 300,
  currentTemp: 20,
};

// toaster variable
const toaster = {
  slots: 4,
  button: (e) => {
    if (e) {
      return true;
    }
    return false;
  },
};

/* FUNCTIONS */

//cageDown
function cageDown(e) {
  if (e) {
    // turn on heat
    activateHeat();
    // start timer
    setTimer();
  }
}

//cageUp TODO: merge with cageDown function

// timer
function setTimer(e, time = 120) {
  if (e) {
    // run activate heat
    activateHeat();
    // start timer at length of time argument
  }
  // TODO: doesn't feel right: toggle case && disable heat element
}
//activateHeat
function activateHeat() {
  // increase bread temp
  // TODO: as loop increases, apply value to bread current temp consistently
}
console.log("helloWorld!");
