const requestURL = 'https://nelsonbyu.github.io/wdd230/chamber/week05/prophets.json';


fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  let card = document.createElement('section');
  let heading = document.createElement('h2');
  let birthDate = document.createElement('p');
  let birthPlace = document.createElement('p');
  let image = document.createElement('img');

  heading.textContent = `${prophet.name} ${prophet.lastname}`;
  birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
  birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
  image.src = prophet.imageurl;
  image.alt = `${prophet.name} ${prophet.lastname} - ${prophet.order}`;

  card.appendChild(heading);
  card.appendChild(birthDate);
  card.appendChild(birthPlace);
  card.appendChild(image);
  document.querySelector('.cards').appendChild(card);
}


//dates
