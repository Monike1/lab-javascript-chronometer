var chronometer = new Chronometer();









// function printSplit() {

// }

// function clearSplits() {

// }


// replace css classes to change the state of the buttons 
function setStopBtn() {
  btnLeft.classList.replace('start', 'stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.replace('reset', 'split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.replace('stop', 'start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.classList.replace('split', 'reset');
  btnRight.innerHTML = 'RESET';
}


// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (btnLeft.classList.contains('start')) {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});



// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (btnRight.classList.contains('reset')) {
       chronometer.resetClick();
       chronometer.clearSplits();
      //  setSplitBtn();
  } else {
    chronometer.splitClick();
    
    // setResetBtn();
  }
});
    

