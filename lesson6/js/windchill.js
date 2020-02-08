
function windChill() {
    
    let t = parseFloat(document.getElementById("temp").innerHTML);
    let s = parseFloat(document.getElementById("windspeed").innerHTML);
    //console.log(s);
    let f;
    if (t<=50 && s>=3.0) {
    
    f = 35.74 + 0.6215*t - 35.75*s**0.16 + 0.4275*t*s**0.16;
    f= f.toFixed(0);
    }
    else {f= "N/A";}
   
    document.getElementById("windchill").innerHTML = f;
}