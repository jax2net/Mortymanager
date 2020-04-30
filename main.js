/*	
	main.js by Jacob Santos
	
	Loaded when the body of main.html loads.
	
	The JS file where calls to handle API calls / DOM manipulation.
	
	More about the Rick and Morty api can be read at https://rickandmortyapi.com/
*/

// Holds the URL used by the Fetch API 
let url = 'https://rickandmortyapi.com/api/character';
// this variable will never change; it is used as a reference to get the first page
const originalURL = url;
// When JSON data is returned from the API, it is stored under this variable
let data;
// The section in main.html where data is displayed
const page = document.getElementById('data');

// Button references
const nextButton = document.getElementById('next');
const page1Button = document.getElementById('page1');
const prevButton = document.getElementById('prev');
const squadButton = document.getElementById('current-squad-button');

const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('bar');

let nextPageURL;
let prevPageURL;// holds reference to button that is used to add a character 
 
/*
	getData() uses fetch() API to GET data.
	Fetch is an alternative to XMLHttpRequest (known as AJAX) and works with JavaScript promises.
	I had previously used XMLHttpRequest but wanted to try out fetch as it was newer.
	It also works on every major browser except for Internet Explorer.
*/
const getData = () => {
    fetch(url)
	.then(
	     (response) => {
		if (response.status !== 200) { // Code 200 = it works
		    console.log('Theres a problem : ' + response.status);
		    page.innerHTML = 'No results found...'
		    return;
		}
		// look at response
		response.json().then((json) => {
		    data = json;
		    displayAll(data); // calls on function to display
		    nextPageURL = data.info.next; // saving data to get next page
		    prevPageURL = data.info.prev; // holds previous page url
		    console.log('Obtained data and displaying to page!');
		});
	    }
	).catch((error) => {
	    console.log("Fetch error : ", error);
	}); // end of fetch()
}




/*
	displayAll() generates individually styled cards for every character given the
	returned JSON object from getData().
	The data from getData() returns an array, so a for loop is used to go thru every
	element (character).
	
	For every character, a 'card' is created with the name of the character and a
	picture of the character given by the API.
*/
const displayAll = () => {
	page.innerHTML = "";
    
    for (let i = 0; i < data.results.length; i++) {
		const container = document.createElement('div');
		const section = document.createElement('div'); // container for character
		const name = document.createElement('h3');
		let speciesText = "Species: ";
		let originText = "Origin: ";
		const species = document.createElement('p');
		const origin = document.createElement('p');
		const location = document.createElement('h5');
		const img = document.createElement('img');
		const expandButton = document.createElement('button');


	
	
		name.textContent = data.results[i].name;
		species.textContent = speciesText + data.results[i].species;
		origin.textContent = originText + data.results[i].origin.name;

	
		let status = data.results[i].status;
		let gender = data.results[i].gender;
		let locationData = data.results[i].location.name;

	
		// style card elements //
		section.style.width = '350px';
		section.style.margin = '10px 15px 10px 15px';
		section.style.padding = "10px 15px 10px 15px";
		section.style.border = "2px solid #393D3F";
		section.style.borderRadius = "5px";
		section.style.justifyContent = "center";
		section.style.textAlign = 'center';
		section.style.backgroundColor = '#62929E'
		img.style.height = '200px';
		img.style.width = '200px';
		let imgURL = data.results[i].image;
		img.src = imgURL;
		img.marginLeft = 'auto';
		img.marginRight = 'auto';

		section.onmouseover = function() { // on hover, show response
		    section.style.boxShadow = '0 10px 20px 0 rgba(33,33,33,0.4)';
		}
		section.onmouseout = function() {
		   section.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
		   section.style.transition = '0.3s';
		}
		expandButton.onclick = () => {
		   generateCharacterPage(name.textContent, species.textContent, origin.textContent, status, gender, locationData, imgURL);
		}
	
		// end of styling // 


		// style button //
		expandButton.textContent = 'More info';
		expandButton.style.fontSize = '15px';
		expandButton.style.color = '#FDFDFF';
		expandButton.style.backgroundColor = '#393D3F';
		expandButton.style.border = 'none';
		expandButton.style.padding = '5px 10px';
		expandButton.style.cursor = 'pointer';

	
		// end of button styling //
	
		section.appendChild(name);
		//section.appendChild(species);
		//section.appendChild(origin);
		section.appendChild(img);
		section.appendChild(document.createElement("br"));
		section.appendChild(expandButton);

	
	
		container.append(section);
		page.appendChild(container);
    }
}



nextButton.onclick = function() {
    url = nextPageURL;
    page.innerHTML = "";
    getData(this);
    return false;
}

page1Button.onclick = function() {
	url = originalURL;
	page.innerHTML = "";
	getData(this);
	return false;
}

prevButton.onclick = function() {
    url = prevPageURL;
    page.innerHTML = "";
    getData(this);
    return false;
}

searchButton.onclick = function() {
    console.log('searching for ' + searchBar.value);
    url = 'https://rickandmortyapi.com/api/character/';
    url += '?name=' + searchBar.value;
    page.innerHTML = "";
    getData(this);
}

/*
	When a user clicks the 'More info' button on a character card. This function is called. 
	This function outputs a character card with more details on the character such as species,
	origin, location, gender, etc...
	
	This function is similiar to displayData() except it only generates a 'card' for 1 character
	in more detail.
*/
function generateCharacterPage(name, species, origin, status, gender, locationData, imgURL) {
    page.innerHTML = '';
    
    const nameText = document.createElement('h2');
    const speciesText = document.createElement('p');
    const originText = document.createElement('p');
    const statusText = document.createElement('p');
    const genderText = document.createElement('p');
    const locationText = document.createElement('p');
    const section = document.createElement('div');
    const img = document.createElement('img');
    const back = document.createElement('button');
    
    
    back.textContent = 'Back';
	back.style.fontSize = '15px';
	back.style.color = '#FDFDFF';
	back.style.backgroundColor = '#393D3F';
	back.style.border = 'none';
	back.style.padding = '5px 10px';
	back.style.cursor = 'pointer';
    
    
    nameText.textContent = name;
    speciesText.textContent = species;
    originText.textContent = origin;
    statusText.textContent = "Status: " + status;
    genderText.textContent = "Gender: " + gender;
    locationText.textContent = "Location: " + locationData;
    img.src = imgURL;


	section.style.textAlign = 'center';
	section.style.backgroundColor = '#62929E';
	section.style.border = "2px solid #393D3F";
	section.style.borderRadius = "5px";
	section.style.margin = "50px 0 50px 0";
	section.style.padding = "20px";
    section.appendChild(nameText);
    section.appendChild(speciesText);
    section.appendChild(statusText);
    section.appendChild(originText);
    section.appendChild(locationText);
    section.appendChild(genderText);
    section.appendChild(img); 
    section.appendChild(document.createElement("br"));
    section.appendChild(back);
    page.appendChild(section);
    
    back.onclick = function() {
		getData();
    }
}
