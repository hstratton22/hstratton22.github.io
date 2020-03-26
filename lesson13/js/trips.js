/*========trips=============*/
const trips ="trips.json";
fetch(trips)
.then(function(response){
    return response.json();

})
.then(function(jsonObject) {
    console.table(jsonObject);
    const desc =jsonObject['trips'];
    for (let i=0; i < desc.length; i++) {
        let location =document.createElement('h3');
        let cost= document.createElement('h3');
        let skill=document.createElement('h3');
        let services=document.createElement('h3');
        let len=document.createElement('h3');
        let text = document.createElement('div');
        let image = document.createElement('img');
        let card = document.createElement('section');

        location.textContent=desc[i].location;
        len.textContent=desc[i].length;
        skill.textContent=desc[i].skill;
        cost.textContent=desc[i].cost;
        services.textContent=desc[i].services;
        image.setAttribute('src', "images/" + desc[i].photo);
        image.setAttribute('alt', desc[i].photo);

        text.appendChild(location);
        text.appendChild(len);
        text.appendChild(skill);
        text.appendChild(cost);
        text.appendChild(services);
                
        card.appendChild(text);
        card.appendChild(image);
        document.querySelector('div.trips').appendChild(card);
    }
})