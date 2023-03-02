
const searchBtn  = () => {
	var selectedValue = document.getElementById("mySelect").value;
	const near = document.getElementById('floatingInput').value;
	const url = `http://localhost:4000/api/v1/search-near?near=${near}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {			
			const priContainer = document.getElementById("searchResult");
			priContainer.innerHTML=""
			data.data.forEach(element => {
				if (element["Blood Group"] !== selectedValue){
					const subDiv = document.createElement("div");
					subDiv.classList.add("sub");
					subDiv.innerHTML = `
					<p>Blood Bank Name: <b>${JSON.stringify(element["Blood Bank Name"])}</b>
					<p>City:  <b>${element.City}</b></p>
					<p>State:  <b>${element.State}</b></p>
					<p>Pincode:  <b>${element.Pincode}</b></p>
					<p>Mobile:  <b>${element.Mobile}</b></p>
					<p>Category:  <b>${element.Category}</b></p>`
					priContainer.appendChild(subDiv);
				}
				if (priContainer.innerHTML.trim() === "") {
					const emptyDiv = document.createElement("div");
					emptyDiv.classList.add("empty");
					emptyDiv.innerHTML = `<h2>No ${selectedValue} found at ${element.City}, try to find it in another city</h2>`
					priContainer.appendChild(emptyDiv);

				}

			});

		})
		.catch(error => console.error(error));
};


//Not Used
function clearAndRedirect() {
	// get form data
	// const formData = new FormData(document.querySelector('form'));
	// for (var i = 0; i < inputs.length; i++) {
	// 	inputs[i].value = "";
	// }
	// post data to API endpoint
	fetch('http://localhost:4000/api/v1/register', {
		method: 'POST',
		body: formData
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = "";
	}
			return response.json();
		})
		.then(data => {
			
			window.location.href = "search.html";
		})
		.catch(error => {
			console.error('There was a problem with the fetch operation:', error);
		});

	// clear form inputs
	document.querySelector('form').reset();
}


// function clearAndRedirect() {
// 	// Clear all input values
// 	var inputs = document.getElementsByTagName("input");
// 	for (var i = 0; i < inputs.length; i++) {
// 		inputs[i].value = "";
// 	}
// 	// Redirect to another page
// 	window.location.href = "search.html";
// }

