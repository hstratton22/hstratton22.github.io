
const apiURL="http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e7e99f72ef4dc80d87dfcaa6b6420751";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = jsObject.list[0].main.temp.toFixed(0);
    document.getElementById('temp').textContent = jsObject.list[0].main.temp_max.toFixed(0);
    document.getElementById('windspeed').textContent = jsObject.list[0].wind.speed.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    
    
/*    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  */ });

   /*==================windchill===============================*/ 
    let t = parseFloat(document.getElementById("temp").textContent);
    let s = parseFloat(document.getElementById("windspeed").textContent);
    
    let f;
    if (t<=50 && s>=3.0) {
    
    f = 35.74 + 0.6215*t - 35.75*s**0.16 + 0.4275*t*s**0.16;
    f= f.toFixed(0);
    }
    else {f= "N/A";}
   
    document.getElementById("windchill").textContent = f; 

/*//works with <body onload="windChill()">
function windChill() {
    
    let t = parseFloat(document.getElementById("temp").textContent);
    let s = parseFloat(document.getElementById("windspeed").textContent);
    //console.log(s);
    let f;
    if (t<=50 && s>=3.0) {
    
    f = 35.74 + 0.6215*t - 35.75*s**0.16 + 0.4275*t*s**0.16;
    f= f.toFixed(0)+ "&#8457;";
    }
    else {f= "N/A";}
   
    document.getElementById("windchill").textContent = f;
}*/