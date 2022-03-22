console.log('ready!')

function updateClock()
{
  let dateNow   = new Date();
  let hours     = dateNow.getHours();
  let mins      = dateNow.getMinutes();
  let seconds   = dateNow.getSeconds();

  let dayOrNight = ( hours < 12 ) ? 'AM' : 'PM';
  
  hours   = (hours >= 12 ) ? hours-12 : hours;
  hours   = (hours < 10 ) ? '0'+ hours : hours;
  mins    = (mins < 10 ) ? '0'+ mins : mins;
  seconds = (seconds < 10 ) ? '0'+ seconds : seconds;

  let timeStr = hours + ':' + mins + ':' + seconds + ' ' + dayOrNight;
  document.getElementById('clock').innerHTML = timeStr;
}