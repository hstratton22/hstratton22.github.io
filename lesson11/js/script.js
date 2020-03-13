
const options= {weekday: "long", day: "numeric", month: "long", year:"numeric"};
          
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-GB", options);

function toggleMenu() {
   
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