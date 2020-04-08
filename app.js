// app.js by Jacob Santos

// The JS file where calls to handle API calls / DOM manipulation
let requestURL = 'https://rickandmortyapi.com/api/character';
let data; // holds the JSON Object
const page = document.getElementById('data'); // reference to the div with id data
// we are getting the JSON object
fetch(requestURL)
	.then(
	     (response) => {
		if (response.status !== 200) {
		    console.log('Theres a problem : ' + response.status);
		    return;
		}
		// look at response
		response.json().then((json) => {
		    data = json;
		    displayData(data);
		});
	    }
	).catch((error) => {
	    console.log("Fetch error : ", err);
	}); // end of fetch()

const displayData = () => {
    for (let i = 0; i < data.results.length; i++) {
	const section = document.createElement('div');
	const name = document.createElement('h3');
	const species = document.createElement('p');
	const origin = document.createElement('p');
	const location = document.createElement('h5');
	const img = document.createElement('img');

	name.textContent = data.results[i].name;
	location.textContent = data.results[i].location.name;
	species.textContent = data.results[i].species;
	origin.textContent = data.results[i].origin.name;
	img.src = data.results[i].image;

	section.appendChild(name);
	section.appendChild(species);
	section.appendChild(origin);
	section.appendChild(location);
	section.appendChild(img);

	page.appendChild(section);
    }
}
