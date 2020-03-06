
const options= {weekday: "long", day: "numeric", month: "long", year:"numeric"};
          
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-GB", options);
// const modoptions ={ second: "numeric", minute: "numeric", hour: "numeric", day: "numeric", month:"numeric", year: "numeric"};
//document.getElementById('lastModified').textContent=new Date(document.lastModified);
//document.getElementById('lastModified').textContent=document.lastModified;
function toggleMenu() {
   // console.log(document.getElementById("topNav").classList);
    document.getElementById("topNav").classList.toggle("hide");
}
function showBanner() {
    var today= new Date();
    var wkday= today.getDay();
    if (wkday == 5){
    document.getElementById("banner").classList.toggle("noshow");
   
}
}
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML= rating;
}