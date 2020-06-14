const url =
  "http://api.openweathermap.org/data/2.5/weather?lat=36.204823999999995&lon=138.252924&appid=e24d4d7d62f7fdb36958bce46ed3759f";
const req = new XMLHttpRequest();
req.open("GET", url);
req.send();
console.log(req.responseText);
