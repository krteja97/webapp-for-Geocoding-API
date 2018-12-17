let btn = document.getElementById("btn");
let address = document.getElementById("location");
let latitude = document.getElementById("latitude");
let longitude = document.getElementById("longitude");
let message = document.getElementById("error_op");

btn.onclick = validate;

function validate() {
	//alert(address.value);
	console.log("hello world;");
	let ksar = address.value;

	if(ksar == "") {
		message.innerHTML = "enter correct location";
	}
	else {
		fetch('http://localhost:8000/address', {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		}).then((response) => {
			if(response.status == 200) {
				console.log("nice response");
				return response.json();
			}
			else {
				console.log("bad request");
			}
		}).then((data) => {
			latitude.innerHTML = data;
		}).then((error) => {
			console.log(error);
		})
	}
}