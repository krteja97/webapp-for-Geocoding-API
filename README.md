# webapp-for-Geocoding-API

Google Maps provide various API's. Geocoding API is one of them.
givwn any location the API returns the data in json format containing 
latitude, longitude etc...

so we can create a webapp which takes in user input sends the request to
API in background and displays the result in browser.

tools used:

1) HTML,CSS, Javascript for frontend.
2) FETCH API is used for sending request to backend.
3) expressJS framework is used backend processing. 
4) python3 is used for connecting to API,retrieving data from API in background.
   python3 script is called from backend upon successful submission of request to backend.
   
5) python3 modules used:
   urllib for retrieving data from API.
   json for parsing the retrieved information from API.
   sys for making interaction between nodeJS and python3 script.
