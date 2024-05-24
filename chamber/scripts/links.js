const baseURL = "https://yourusername.github.io/wdd230/"; // 
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // Test JSON result by writing data to console
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById('links-container');
  
  weeks.forEach(week => {
    const weekDiv = document.createElement('div');
    weekDiv.classList.add('week');
    
    const weekHeading = document.createElement('h2');
    weekHeading.textContent = week.week;
    weekDiv.appendChild(weekHeading);
    
    const linksList = document.createElement('ul');
    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });
    
    weekDiv.appendChild(linksList);
    linksContainer.appendChild(weekDiv);
  });
}

getLinks();
