// app.js by Jacob Santos

// The JS file where calls to handle API calls / DOM manipulation
let requestURL = 'https://rickandmortyapi.com/api/character';
let data; // holds the JSON Object
// we are getting the JSON object
fetch(requestURL)
	.then(
	    function (response) {
		if (response.status !== 200) {
		    console.log('Theres a problem : ' + response.status);
		    return;
		}
		// look at response
		response.json().then((json) => {
		    console.log(json);
		    data = json;
		});
	    }
	).catch((error) => {
	    console.log("Fetch error : ", err);
	});
