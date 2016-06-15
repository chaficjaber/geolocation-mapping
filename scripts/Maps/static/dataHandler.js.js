/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ($) { //an IIFE so safely alias jQuery to $\n\t$.DataHandler = function (args) { \n          this.args = args;\n    };\n  \n    $.DataHandler.prototype = {\n      //Build your map points, based on the data you are receiving.\n      /**In this example data has this format:[\n\t\t[\n\t\t\t\"Latitude\",\n\t\t\t\"Longitude\",\n\t\t\t\"magnitude\",\n\t\t\t\"description\",\n\t\t\t\"location\",\n\t\t\t\"date\"\n\t\t],\n        [\n\t\t\t49.89,\n\t\t\t0.47,\n\t\t\t\"Minor earthquake - France on June 8, 2016\",\n\t\t\t\"FRANCE\",\n\t\t\t\"2016-06-08T15:20:52+00:00\"\n\t\t],\n\t\t[\n\t\t\t-25.89,\n\t\t\t-69.48,\n\t\t\t\"Moderate earthquake -  Diego De Almagro, Chile on June 7, 2016\",\n\t\t\t\"Diego de Almagro, Chile\",\n\t\t\t\"2016-06-07T19:01:46+00:00\"\n\t\t]\n      *SCRIPTR_COMMENT\n      pushDataToMap: function(entries,map) {\n         var config = this.args.config;\n         for (var i = 1; i < entries.length; i++) {\n          \tvar entry = entries[i];\n            var markerData = {\n              \tposition: {lat: entry[0], lng: entry[1]}, //Longitute/Lattitude info of marker\n              \ticon:  ((entry[2] > 5) ? config.pinkImage  : config.greenImage), //Replace default Image\n              \ttitle: entry[3] + \" \" + entry[5], //Tooltip on Marker\n              \t//label: 'M', //single textual character that appears inside a marker\n              \tzIndex: 4,\n              \tmap: map\n            };\n            if(config.fetchCenter && i == 1) {\n              map.setCenter(markerData[\"position\"])\n            }\n          \tvar marker = new google.maps.Marker(markerData);\n          }\n         return map;\n      },\n      //Build your maker points, based on the data you are receiving.\n      /**In this example data has this format:\n      \t[{\n\t\t\t\"lat\": 24.232369736374427,\n\t\t\t\"lng\": 23.120237286462277\n\t\t},\n\t\t{\n\t\t\t\"lat\": 24.225677736103382,\n\t\t\t\"lng\": 23.121416522147378\n\t\t},\n        ]\n      *SCRIPTR_COMMENT\n      addMarkerPoints: function(entries, map) {\n        \tvar config = this.args.config;\n          \tfor (var i = 0; i < entries.length; i++) {\n              var entry = entries[i];\n              var markerData = {\n                position: entry, //Longitute/Lattitude info of marker,\n                map: map\n              }\n              if(isCenterFetched && i == 0) { //true set first data location as map center\n              \t\tmap.setCenter(markerData[\"position\"])\n              }\n              var marker = new google.maps.Marker(markerData);\n            }\n        \treturn map;\n      },\n      \n      addSpaceStationPoint: function(entries, map) {\n        \tvar config = this.args.config;\n            if(!this.path) this.path = [];\n          \tfor (var i = 0; i < entries.length; i++) {\n              var entry = entries[i];\n              var markerData = {\n                position: entry, //Longitute/Lattitude info of marker\n                icon: config.spaceStationIcon,\n                map: map\n              }\n              \n              if(isCenterFetched && i == 0) { //true set first data location as map center\n              \t\tmap.setCenter(markerData[\"position\"])\n              }\n              var marker = new google.maps.Marker(markerData);\n              if(config.mode.indexOf(\"polyline\") != -1) {\n              \t\tthis.path.push(markerData[\"position\"]); //build route\n              }\n          \t}\n            \n            if(this.path.length > 1) {\n                var routePath = new google.maps.Polyline({\n                  path: this.path,\n                  geodesic: true,\n                  strokeColor:  window.config.map.strokeColor,\n                  strokeOpacity: window.config.map.strokeOpacity,\n                  strokeWeight: window.config.map.strokeWeight,\n                  map: map\n                });\n            }\n        \treturn map;\n      },\n  };\n}(jQuery));"},"scriptrdata":[]}}*#*#*/
var content= '(function ($) { //an IIFE so safely alias jQuery to $\n\
	$.DataHandler = function (args) { \n\
          this.args = args;\n\
    };\n\
  \n\
    $.DataHandler.prototype = {\n\
      //Build your map points, based on the data you are receiving.\n\
      /**In this example data has this format:[\n\
		[\n\
			\"Latitude\",\n\
			\"Longitude\",\n\
			\"magnitude\",\n\
			\"description\",\n\
			\"location\",\n\
			\"date\"\n\
		],\n\
        [\n\
			49.89,\n\
			0.47,\n\
			\"Minor earthquake - France on June 8, 2016\",\n\
			\"FRANCE\",\n\
			\"2016-06-08T15:20:52+00:00\"\n\
		],\n\
		[\n\
			-25.89,\n\
			-69.48,\n\
			\"Moderate earthquake -  Diego De Almagro, Chile on June 7, 2016\",\n\
			\"Diego de Almagro, Chile\",\n\
			\"2016-06-07T19:01:46+00:00\"\n\
		]\n\
      **/\n\
      pushDataToMap: function(entries,map) {\n\
         var config = this.args.config;\n\
         for (var i = 1; i < entries.length; i++) {\n\
          	var entry = entries[i];\n\
            var markerData = {\n\
              	position: {lat: entry[0], lng: entry[1]}, //Longitute/Lattitude info of marker\n\
              	icon:  ((entry[2] > 5) ? config.pinkImage  : config.greenImage), //Replace default Image\n\
              	title: entry[3] + \" \" + entry[5], //Tooltip on Marker\n\
              	//label: \'M\', //single textual character that appears inside a marker\n\
              	zIndex: 4,\n\
              	map: map\n\
            };\n\
            if(config.fetchCenter && i == 1) {\n\
              map.setCenter(markerData[\"position\"])\n\
            }\n\
          	var marker = new google.maps.Marker(markerData);\n\
          }\n\
         return map;\n\
      },\n\
      //Build your maker points, based on the data you are receiving.\n\
      /**In this example data has this format:\n\
      	[{\n\
			\"lat\": 24.232369736374427,\n\
			\"lng\": 23.120237286462277\n\
		},\n\
		{\n\
			\"lat\": 24.225677736103382,\n\
			\"lng\": 23.121416522147378\n\
		},\n\
        ]\n\
      **/\n\
      addMarkerPoints: function(entries, map) {\n\
        	var config = this.args.config;\n\
          	for (var i = 0; i < entries.length; i++) {\n\
              var entry = entries[i];\n\
              var markerData = {\n\
                position: entry, //Longitute/Lattitude info of marker,\n\
                map: map\n\
              }\n\
              if(isCenterFetched && i == 0) { //true set first data location as map center\n\
              		map.setCenter(markerData[\"position\"])\n\
              }\n\
              var marker = new google.maps.Marker(markerData);\n\
            }\n\
        	return map;\n\
      },\n\
      \n\
      addSpaceStationPoint: function(entries, map) {\n\
        	var config = this.args.config;\n\
            if(!this.path) this.path = [];\n\
          	for (var i = 0; i < entries.length; i++) {\n\
              var entry = entries[i];\n\
              var markerData = {\n\
                position: entry, //Longitute/Lattitude info of marker\n\
                icon: config.spaceStationIcon,\n\
                map: map\n\
              }\n\
              \n\
              if(isCenterFetched && i == 0) { //true set first data location as map center\n\
              		map.setCenter(markerData[\"position\"])\n\
              }\n\
              var marker = new google.maps.Marker(markerData);\n\
              if(config.mode.indexOf(\"polyline\") != -1) {\n\
              		this.path.push(markerData[\"position\"]); //build route\n\
              }\n\
          	}\n\
            \n\
            if(this.path.length > 1) {\n\
                var routePath = new google.maps.Polyline({\n\
                  path: this.path,\n\
                  geodesic: true,\n\
                  strokeColor:  window.config.map.strokeColor,\n\
                  strokeOpacity: window.config.map.strokeOpacity,\n\
                  strokeWeight: window.config.map.strokeWeight,\n\
                  map: map\n\
                });\n\
            }\n\
        	return map;\n\
      },\n\
  };\n\
}(jQuery));';  response.write(content);response.close();			