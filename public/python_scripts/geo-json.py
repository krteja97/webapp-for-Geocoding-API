
#urllib package is used for making HTTP requests and manipulating URL's
#JSON package is used for manipulating the data sent by the API.
#sqlite3 package is used for Database purposes.
import sys
import urllib.request, urllib.parse, urllib.error
import json
import ssl

#set your api-key. API key acts like a security key.
#serviceurl is the base url to which we are making the requests. This can be found in the Documentation.
api_key = 'AIzaSyBkbq17Q5jGMqsFzZrhlsmyyuT_JMvALuY';
serviceurl = 'https://maps.googleapis.com/maps/api/geocode/json?'

#ssl ..This is for HTTPS
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE



print("retreiving");
    #create a dictionary
# params = dict();
# params['address'] = line;
# params['key'] = api_key;
# url = serviceurl + urllib.parse.urlencode(params);

# data = urllib.request.urlopen(url,context = ctx);
# data = data.read().decode();

# data = json.loads(data);

# if (data["status"] == 'OK'):
#     status = data["status"];
#     lat = data["results"][0]["geometry"]["location"]["lat"];
#     lng = data["results"][0]["geometry"]["location"]["lng"];
    

