const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const todayDate = new Date();
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const AllMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (todayDate.getDate() < 10 ? "0":"") + todayDate.getDate();
day.innerHTML = weekdays[todayDate.getDay()];
month.innerHTML = AllMonths[todayDate.getMonth()];
year.innerHTML = todayDate.getFullYear();