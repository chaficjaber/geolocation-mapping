GeoLocation MAPPING
===================

Display GPS info using (http://www.scriptr.io) & Google Maps API


Live Mapping
------------
Using scriptr websockets & pubsub to receive the gps points, and google maps api to add new points to the MAP


Static Mapping
--------------
Using scriptr rest api to fetch data, and google maps api to display points on map.

This code can be reused to display any GPS map data. 

- If data is live, update static/config.js:

   ```javascript
      websocket: {
         url: "wss://api.scriptrapps.io/YOUR_ANONYMOS_TOKEN==",
         receive_channel: "DATA_RECEIVING_CHANNEL" 
      }
   ```
- If data is static, update static/config.js
  
   ```javascript
      http: {
         baseUrl: "https://YOUR_SCRIPTR_DOMAIN",
  	      dataScript:"DATA_SCRIPT"
      }
   ```
    
check the current config.js for examples.

Data transformation needs to be overriden based on how your data script is returning the data. In the static/dataHandler.js there is 2 examples on data transformation functions:
- addMarkerPoints: used for the data transformation if the html/live.html map received data.
- transformToMarkerData: used in the html/static.hml map used for the data transformation if the html/live.html map received data.
You can add your own function implementation to the prototype as:
   ```javascript
      mydataHandlerFnc: function(entries, map) {
         //transform data to map points and render on map
         ......
         return map;
      }
   ```
You need to update config.js with the name of your function:
   ```javascript
      dataHandler: {
         transformFnc:  "mydataHandlerFnc"
      }
   ```
In the live mode, when a message is received over websocket it will be passed to a dataHandler function, the function name is retrieved from "transformFnc" property defined in config.js.
Same for in static mode, on http Request successful response, the response would be passed to the function name defined in  "transformFnc" property.










