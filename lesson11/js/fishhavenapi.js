const d= new Date();
const todayDayNum= d.getDay();
const weekday= [];
weekday[0] ="Sun";
weekday[1] ="Mon";
weekday[2] ="Tue";
weekday[3] ="Wed";
weekday[4] = "Thu";
weekday[5] ="Fri";
weekday[6] ="Sat";

const apiURL="https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=e7e99f72ef4dc80d87dfcaa6b6420751";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('current').textContent = jsObject.list[0].weather[0].main;
    document.getElementById('temp').textContent = jsObject.list[0].main.temp_max.toFixed(0);
    document.getElementById('windspeed').textContent = jsObject.list[0].wind.speed.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    
    
   const time = jsObject.list;
   let dtemp= 1;
   let forecastDayNum=todayDayNum;
   for (let i=0; i<time.length; i++) {
    
    if (time[i].dt_txt.includes("18:00:00")) {
      
       
      let icon = time[i].weather[0].icon;
   let descr= time[i].weather[0].description;
   let iconsrc= 'https://openweathermap.org/img/w/' + icon + '.png';
   let daytemp = jsObject.list[i].main.temp.toFixed(0);

   
   let mytemp="daytemp" + dtemp;
   let myicon= "icon" + dtemp;
   document.getElementById(mytemp).innerHTML= daytemp + "&#8457;";
   document.getElementById(myicon).setAttribute('src', iconsrc);
   document.getElementById(myicon).setAttribute('alt', descr);

   forecastDayNum+=1;
    if(forecastDayNum===7) {
      forecastDayNum=0;}
     
      let myweekday= "weekday" +dtemp;
      document.getElementById(myweekday).innerHTML=weekday[forecastDayNum];

   dtemp+=1;
   


     }}
   
     
    });
    /*==================================================*/
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    //console.table(jsonObject);        // temporary checking for valid response and data parsing 
    const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
       if ( towns[i].name =="Fish Haven" ) {
    let section = document.createElement('section');
    let h4 = document.createElement('h4');
    let x;
    for (let x=0; x < towns[i].events.length; x++) {
      h4.innerHTML += towns[i].events[x] + "<br>" ;
      section.appendChild(h4);
      


    }
 

   /* h4.textContent = towns[i].events[0];
    h4.textContent = towns[i].events[1];
    h4.textContent = towns[i].events[2];*/
   // h4.textContent = towns[i].events;
//section.appendChild(h4);

document.querySelector('div.events').appendChild(section);
}
}
});
