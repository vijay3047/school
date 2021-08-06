let date = new Date("aug 4, 2021 00:00:00").getTime();
let x = setInterval(function(){ 
let now = new Date().getTime();
let di = date - now;
let days = Math.floor(di/(1000*60*60*24));
let hours = Math.floor((di % (1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((di%(1000*60*60))/(1000*60));
let seconds = Math.floor((di%(1000*60))/1000);
document.getElementById("day").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

//   console.log(days);
//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);
},1000);

// console.log(days)