/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"//Configuration file used by client side\nvar config = {\n  http: {\n    baseUrl: \"https://marv.scriptrapps.io\",\n  \tdataScript:\"Maps/scripts/generateStaticData\"\n  },\n  websocket: {\n    url: \"wss://api.scriptrapps.io/RTg2MTczN0ZDRQ==\",\n    receive_channel: \"pushRandomData\"//The Channel name to which the live GPS data will be pushed, and to which the client websocket will subscribe\n  },\n  map: {\n  \tkey: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\",\n    output: 'embed',\n\ttype: \"google.maps.MapTypeId.ROADMAP\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n    mode: [\"marker\", \"polyline\"],\n    strokestrokeColor: '#FF0000',\n    strokeOpacity: 1.0,\n    strokeWeight: 2,\n    zoom: 14,\n    fetchCenter: true,\n    defaultCenter: {lat: 32.7038888889, lng: -117.153611111},\n\tblueImage: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png',\n    pinkImage: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Pink-icon.png',\n  \tgreenImage: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png'\n  },\n  dataHandler: {\n    transformFnc:  \"addMarkerPoints\" //\"renderEarthquakeGeoLocations\", \"renderRandomGeoLocations\" //Define the transformation function you will use\n  }\n}\n\n"},"scriptrdata":[]}}*#*#*/
var content= '//Configuration file used by client side\n\
var config = {\n\
  http: {\n\
    baseUrl: \"https://marv.scriptrapps.io\",\n\
  	dataScript:\"Maps/scripts/generateStaticData\"\n\
  },\n\
  websocket: {\n\
    url: \"wss://api.scriptrapps.io/RTg2MTczN0ZDRQ==\",\n\
    receive_channel: \"pushRandomData\"//The Channel name to which the live GPS data will be pushed, and to which the client websocket will subscribe\n\
  },\n\
  map: {\n\
  	key: \"AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I\",\n\
    output: \'embed\',\n\
	type: \"google.maps.MapTypeId.ROADMAP\", //MapTypeId.ROADMAP, MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN \n\
    mode: [\"marker\", \"polyline\"],\n\
    strokestrokeColor: \'#FF0000\',\n\
    strokeOpacity: 1.0,\n\
    strokeWeight: 2,\n\
    zoom: 14,\n\
    fetchCenter: true,\n\
    defaultCenter: {lat: 32.7038888889, lng: -117.153611111},\n\
	blueImage: \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png\',\n\
    pinkImage: \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Pink-icon.png\',\n\
  	greenImage: \'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png\'\n\
  },\n\
  dataHandler: {\n\
    transformFnc:  \"addMarkerPoints\" //\"renderEarthquakeGeoLocations\", \"renderRandomGeoLocations\" //Define the transformation function you will use\n\
  }\n\
}\n\
\n\
';  response.write(content);response.close();			