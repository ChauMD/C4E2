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
//click
breakdecrementDom.on('click', function () { 
    if (breakLength === 1) return;
    breakLength -= 1;
    breakLengthDom.text(breakLength)
 });

 sessiondecrementDom.on('click', function () { 
    if (sessionLength === 1) return;
    sessionLength -= 1;
    sessionLengthDom.text(sessionLength);
    $(TimerDom).text(formatMintoString(sessionLength*60));
 });

 sessionincrementDom.on('click', function () { 
    if (sessionLength === 1) return;
    if (sessionLength > 60) return;
    sessionLength += 1;
    sessionLengthDom.text(sessionLength);
    $(TimerDom).text(formatMintoString(sessionLength*60));
 });

 breakincrementDom.on('click', function () { 
    if (breakLength === 1) return;
    if (breakLength > 60) return;
    breakLength += 1;
    breakLengthDom.text(breakLength)
 });
 startstopDom.on('click', function() {
    countdown(sessionLength*60);
    if (sessionLength==0)
    return
});

function formatMintoString(sec) {
    let minutes = Math.floor(sec/60) ;
    let seconds = sec - minutes*60;
    if (seconds == 60) return '00:01:00';
           else if (seconds < 10) 
            return  minutes + ':0' + seconds;
          else  return minutes + ':' + seconds;
};

function countdown(min) {
    let sec = min * 60;
   setInterval(function() {
        sec --;
        let minutes = Math.floor(sec/60) ;
        let seconds = sec - minutes*60;
        if (sec == 60) {
            $('#time-left').text('1:00');
        } else if (seconds < 10) {
            $('#time-left').text(minutes + ':0' + seconds);
        } else $('#time-left').text( minutes + ':' + seconds);
    },1000) };


