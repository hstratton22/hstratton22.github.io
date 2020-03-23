const options= {year:"numeric"};
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-US", options);

function menu() {
   
    document.getElementById("topNav").classList.toggle("hide");
}

/*========guides=============*/
const guidebios ="bios.json";
fetch(guidebios)
.then(function(response){
    return response.json();

})
.then(function(jsonObject) {
    console.table(jsonObject);
    const bios = jsonObject['bios'];
    for (let i=0; i <bios.length; i++) {
        let profile = document.createElement('section');
        let ind = document.createElement('div');
        let h3 =document.createElement('h3');
        let h4= document.createElement('h4');
        let image=document.createElement('img');

        h3.textContent =bios[i].firstName;
        h3.textContent=bios[i].lastName;
        h4.textContent=bios[i].certLevel;
        h4.textContent=bios[i].email;
        h4.textContent=bios[i].bio;
        image.setAttribute('src', "images/" + bios[i].profile);
        image.setAttribute('alt', bios[i].lastName + "photo");

        h3.appendChild(ind);
        h4.appendChild(ind);
        document.querySelector('div.profiles').appendChild(profile);
    }

})
