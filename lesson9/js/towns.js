const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    console.table(jsonObject);        // temporary checking for valid response and data parsing 
    const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
       if (i==1 ||i==4 || i==5 ) {
    let card = document.createElement('section');
      let h4 = document.createElement('h4');
      let h3= document.createElement('h3');
      let year = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      let image = document.createElement('img');



h3.textContent = towns[i].name;
h4.textContent = towns[i].motto;
year.textContent = "Year Founded: " + towns[i].yearFounded;
pop.textContent = "Population: " + towns[i].currentPopulation;
rain.textContent = "Annual Fain Fall: " + towns[i].averageRainfall;
image.setAttribute('src', "images/" + towns[i].photo);
image.setAttribute('alt', towns[i].name + ' ' + 'image');


card.appendChild(h3);
card.appendChild(h4);
card.appendChild(year);
card.appendChild(pop);
card.appendChild(rain);
card.appendChild(image);

document.querySelector('div.townInfo').appendChild(card);
}
}
});
  