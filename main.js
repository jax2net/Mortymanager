// app.js by Jacob Santos

// The JS file where calls to handle API calls / DOM manipulation


let url = 'https://rickandmortyapi.com/api/character'; // url for characters
let data; // holds the JSON Object
const page = document.getElementById('data'); // reference to the div with id data
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const squadButton = document.getElementById('current-squad-button');
let nextPageURL;
let prevPageURL;// holds reference to button that is used to add a character 

 



// we are getting the JSON object
const getData = () => {
    fetch(url)
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
		    nextPageURL = data.info.next; // saving data to get next page
		    prevPageURL = data.info.prev; // holds previous page url
		    console.log('Obtained data and displaying to page!');
		});
	    }
	).catch((error) => {
	    console.log("Fetch error : ", error);
	}); // end of fetch()
}





const displayData = () => {
    
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
	const addButton = document.createElement('button');


	
	
	name.textContent = data.results[i].name;
	species.textContent = speciesText + data.results[i].species;
	origin.textContent = originText + data.results[i].origin.name;

	
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
	img.src = data.results[i].image;
	img.marginLeft = 'auto';
	img.marginRight = 'auto';

	section.onmouseover = function() { // on hover, show response
	    section.style.boxShadow = '0 10px 20px 0 rgba(33,33,33,0.4)';
	}
	section.onmouseout = function() {
	    section.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
	    section.style.transition = '0.3s';
	}
	
	// end of styling // 


	// style button //
	addButton.textContent = 'Add';
	addButton.style.fontSize = '15px';
	addButton.style.color = '#FDFDFF';
	addButton.style.backgroundColor = '#393D3F';
	addButton.style.border = 'none';
	addButton.style.padding = '5px 10px';
	addButton.style.cursor = 'pointer';

	
	// end of button styling //
	
	section.appendChild(name);
	section.appendChild(species);
	section.appendChild(origin);
	section.appendChild(img);
	section.appendChild(document.createElement("br"));
	section.appendChild(addButton);

	
	
	container.append(section);
	page.appendChild(container);


	addButton.onclick = function() {
	    console.log('added ' + name.textContent);
	}
    }
}



nextButton.onclick = function() {
    url = nextPageURL;
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

squadButton.onclick = function() {
    console.log('clicked Squad Button');
}
