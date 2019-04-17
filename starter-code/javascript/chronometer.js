var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var hecDec      = document.getElementById('hecDec');
var hecUni      = document.getElementById('hecUni');
var splits      = document.getElementById('splits');

// function printTime() {
//   printHectoseconds();
//   printSeconds();
//   printMinutes();
// }

// function printHectoseconds() {
//   hecDec.innerHTML = chronometer.hectoseconds.toString().split("")[0];
//   hecUni.innerHTML = chronometer.hectoseconds.toString().split("")[1];
// }

// function printSeconds() {
//   secDec.innerHTML = chronometer.seconds.toString().split("")[0];
//   secUni.innerHTML = chronometer.seconds.toString().split("")[1];
// }

// function printMinutes() {
//   minDec.innerHTML = chronometer.minutes.toString().split("")[0];
//   minUni.innerHTML = chronometer.minutes.toString().split("")[1];
// }





function Chronometer() {
  this.hectoseconds = 0;
  this.seconds = 0;
  this.minutes = 0;
  this.intervalId;
  this.startClick = function() {
    this.intervalId = setInterval(() => {
        this.hectoseconds++;
        if (this.hectoseconds <= 9) {
          hecUni.innerHTML = this.hectoseconds.toString();
          hecDec.innerHTML = 0;
        } else {
          hecUni.innerHTML = this.hectoseconds.toString().split("")[1];
          hecDec.innerHTML = this.hectoseconds.toString().split("")[0];
        }
        
        // hecDec.innerHTML = this.hectoseconds.toString().split("")[0];
        if (this.hectoseconds % 100 === 0) {
          this.hectoseconds = 0;
          this.seconds++;
          if (this.seconds <= 9) {
            secUni.innerHTML = this.seconds.toString();
            secDec.innerHTML = 0;
          } else {
            secUni.innerHTML = this.seconds.toString().split("")[1];
            secDec.innerHTML = this.seconds.toString().split("")[0];
          }
          
          
          if (this.seconds % 60 === 0) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes <= 9) {
              minUni.innerHTML = this.minutes.toString();
            } else {
              minUni.innerHTML = this.minutes.toString().split("")[1];
              minDec.innerHTML = this.minutes.toString().split("")[0];
            }
          }
        };
        
        
        
        
        // console.log(`${this.twoDigitsNumber(this.minutes)} : ${this.twoDigitsNumber(this.seconds)} : ${this.twoDigitsNumber(this.hectoseconds)}`);
        // console.log(count);
        // return count;
      },
    10);
  };
  // this.getMinutes = function() {};
  // this.getSeconds = function(){};

  this.twoDigitsNumber = function(time) {
    if (time <= 9) {
        time = `0${time}`;
    }
    return time;
  };

  //to show the result (amount of time)
  this.stopClick = function() {
    clearInterval(this.intervalId);
    // console.log(`Stop click: ${this.twoDigitsNumber(this.minutes)} : ${this.twoDigitsNumber(this.seconds)} : ${this.twoDigitsNumber(this.hectoseconds)}`);
  };
  // to reset chronometer to zero
  this.resetClick = function() {
    this.hectoseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    hecUni.innerHTML = 0;
    hecDec.innerHTML = 0;
    secUni.innerHTML = 0;
    secDec.innerHTML = 0;
    minUni.innerHTML = 0;
    minDec.innerHTML = 0;
    console.log(`Reset: ${this.minutes}:${this.seconds}:${this.hectoseconds}`);
  };
  // to split parts of exercise 
  this.splitClick = function() {
    var li = document.createElement("li");
    var splitContent = document.createTextNode = `${this.twoDigitsNumber(this.minutes)}:${this.twoDigitsNumber(this.seconds)}:${this.twoDigitsNumber(this.hectoseconds)}`;
    li.innerHTML = splitContent;
    splits.appendChild(li);
    console.log(`Split: ${this.minutes}:${this.seconds}:${this.hectoseconds}`);
  };
  this.clearSplits = function() {
    while(splits.firstChild) {
      splits.removeChild(splits.firstChild);
    }
  };
}

