const options= {year:"numeric"};
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-US", options);

function menu() {
   
    document.getElementById("topNav").classList.toggle("hide");
}
/*---------------------weather-----*/
const apiURL="https://api.openweathermap.org/data/2.5/forecast?id=4092267&units=imperial&APPID=e7e99f72ef4dc80d87dfcaa6b6420751";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject)=>{
    console.log(jsObject);
    document.getElementById('current').textContent=jsObject.list[0].weather[0].main;
    document.getElementById('high').textContent = jsObject.list[0].main.temp_max.toFixed(0);
    document.getElementById('low').textContent = jsObject.list[0].main.temp_min.toFixed(0);

}
)
/*=====================*/
