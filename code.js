const STATES = {
    SESSION:'session',
    BREAK: 'break',
    ISP: true
};
const TIMER = {
    BREAK_LENGTHconst: 5,
    SESSION_LENGTH: 25,
};
// Goi bien 
let breakLength = 5; 
let sessionLength = 25;
let time = '25:00';
let end = '00:00';
// let remainingtimes = sessionLength*60;
let model = STATES.SESSION; //(session.break)//
let ISP = STATES.ISP;
//INIT APP
//Khai bao dom
let breakLengthDom = $('#break-length');
breakLengthDom.innertext = TIMER.BREAK_LENGTHconst;
let sessionLengthDom = $('#session-length');
sessionLengthDom.innertext = TIMER.SESSION_LENGTH;
let breakdecrementDom = $('#break-decrement');
let sessiondecrementDom = $('#session-decrement')
let sessionincrementDom = $('#session-increment')
let breakincrementDom = $('#break-increment');
let startstopDom = $('#start_stop');
let TimerDom = $('#time-left');
// TimerDom.innertext = $('#session-length');

//chay app
// Input cho nút chỉnh time và đồng bộ hóa các biến 
breakdecrementDom.on('click', function () { 
    if (breakLength === 1) return;
    breakLength -= 1;
    breakLengthDom.text(breakLength)
 });

 sessiondecrementDom.on('click', function () { 
    if (sessionLength === 1) return;
    sessionLength -= 1;
    sessionLengthDom.text(sessionLength)
 });

 sessionincrementDom.on('click', function () { 
    if (sessionLength === 1) return;
    if (sessionLength > 60) return;
    sessionLength += 1;
    sessionLengthDom.text(sessionLength)
    $(TimerDom).text(formatMintoString(sessionLength));
 });

 breakincrementDom.on('click', function () { 
    if (breakLength === 1) return;
    if (breakLength > 60) return;
    breakLength += 1;
    breakLengthDom.text(breakLength)
 });

function formatMintoString(sec) {
    let minuteText = Math.floor(sec/60) ;
    let secondText = sec - minuteText*60;
    return minuteText + ':' + secondText;
};
function countdown(initseconds) {
    switch (STATES) {
        case (STATES.SESSION):
        var initseconds = sessionLength * 60; 
        return setInterval(function (sec) {
            initseconds -=1;
            $(TimerDom).text(formatMintoString(initseconds))
          },1000);
          break;
        case (STATES.BREAK) :
        var initseconds = breakLength * 60; 
        return setInterval(function (sec) {
            initseconds -=1;
            $(TimerDom).text(formatMintoString(initseconds))
          },1000)
          break;
          default:
    };
  };
//   function a()  {
//       x = setInterval(function (){
//           now = $.now();
//           remainingtimes = end - now;
//           minutes = Math.floor((remainingtimes % (1000*60*60))/(1000*60));
//           seconds = Math.floor((remainingtimes % (1000*60)/1000));
//           if (seconds == 60) {
//               document.getElementById('display').innerHTML='1:00';
//           } else if (seconds < 10) {
//               document.getElementById('display').innerHTML= minutes + ':0' + seconds;
//           } else document.getElementById('display').innerHTML = minutes + ':' + seconds;
//       })
//   }


// function countdown() {
//     switch (mode) {
//         case     
        //     case (STATES.SESSION)
    //     let initseconds = sessionLength*60 ;
    //     return setInterval(function() {
    //         initseconds -= 1;
    //         $(TimerDom).text(formatMintoString(initseconds));
    //     },1000)
    //     break;
    // default:
    // }}
//
//setInterval. clear Interval







