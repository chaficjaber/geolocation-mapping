/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 http://api.open-notify.org/iss-now.json

var http = require("http");
var davraService = "http://api.open-notify.org/iss-now.json";
// invoke the healthService third party API
var callResult = http.request({"url":davraService});
// parse the result of the call using regular JSON object
var entry = JSON.parse(callResult.body)["iss_position"];

var x = {lat: parseFloat(entry.latitude), lng: parseFloat(entry.longitude)};
publish('pushISSData',[x], false);			