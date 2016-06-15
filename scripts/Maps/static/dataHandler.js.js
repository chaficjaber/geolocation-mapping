/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ($) { //an IIFE so safely alias jQuery to $\n\t$.DataHandler = function (args) { \n          this.args = args;\n    };\n  \n    $.DataHandler.prototype = {\n      //Build your maker points, based on the data you are receiving.\n      /**In this example data has this format:[\n\t\t[\n\t\t\t\"Latitude\",\n\t\t\t\"Longitude\",\n            \"magnitude\",\n\t\t\t\"description\",\n\t\t\t\"location\",\n\t\t\t\"date\"\n\t\t],\n\t\t[\n\t\t\t49.89,\n\t\t\t0.47,\n\t\t\t\"Minor earthquake - France on June 8, 2016\",\n\t\t\t\"FRANCE\",\n\t\t\t\"2016-06-08T15:20:52+00:00\"\n\t\t],\n\t\t[\n\t\t\t-25.89,\n\t\t\t-69.48,\n\t\t\t\"Moderate earthquake -  Diego De Almagro, Chile on June 7, 2016\",\n\t\t\t\"Diego de Almagro, Chile\",\n\t\t\t\"2016-06-07T19:01:46+00:00\"\n\t\t]\n      *SCRIPTR_COMMENT\n      transformToMarkerData: function(entries) {\n         var config = this.args.config;\n         var markersData = [];\n         for (var i = 1; i < entries.length; i++) {\n          \tvar entry = entries[i];\n            markersData.push({\n              position: {lat: entry[0], lng: entry[1]}, //Longitute/Lattitude info of marker\n              icon:  ((entry[2] > 5) ? config.pinkImage  : config.greenImage), //Replace default Image\n              title: entry[3] + \" \" + entry[5], //Tooltip on Marker\n              //label: 'M', //single textual character that appears inside a marker\n              zIndex: 4\n            });\n          }\n         return markersData;\n      },\n      //Build your maker points, based on the data you are receiving.\n      /**In this example data has this format:\n      \t[{\n\t\t\t\"lat\": 24.232369736374427,\n\t\t\t\"lng\": 23.120237286462277\n\t\t},\n\t\t{\n\t\t\t\"lat\": 24.225677736103382,\n\t\t\t\"lng\": 23.121416522147378\n\t\t},\n        \n        ...\n        ...\n        \n        ]\n      *SCRIPTR_COMMENT\n      addMarkerPoints: function(entries) {\n        \tvar config = this.args.config;\n            var markersData = [];\n          \tfor (var i = 0; i < entries.length; i++) {\n              var entry = entries[i];\n              markersData.push({\n                position: entry //Longitute/Lattitude info of marker\n              });\n          \t}\n        \treturn markersData;\n      },\n      \n      addDavraDeviceLocation: function(entries) {\n         var config = this.args.config;\n         var markersData = [];\n         for (var i = 0; i < entries.length; i++) {\n          \tvar entry = entries[i];\n            markersData.push({\n              position: {lat: entry.latitude, lng: entry.longitude}, //Longitute/Lattitude info of marker\n              icon: ((entry.statusString == \"Waiting for first heartbeat\") ? config.blueImage : config.greenImage),\n              title: entry.description,\n              //label: 'M', //single textual character that appears inside a marker\n              zIndex: 4\n            });\n          }\n         return markersData;\n      },\n      \n      addSpaceStationPoint: function(entries) {\n        \tvar config = this.args.config;\n            var markersData = [];\n          \tfor (var i = 0; i < entries.length; i++) {\n              var entry = entries[i];\n              markersData.push({\n                position: entry, //Longitute/Lattitude info of marker\n                icon: config.spaceStationIcon\n              });\n          \t}\n        \treturn markersData;\n      },\n  };\n}(jQuery));"},"scriptrdata":[]}}*#*#*/
var content= '(function ($) { //an IIFE so safely alias jQuery to $\n\
	$.DataHandler = function (args) { \n\
          this.args = args;\n\
    };\n\
  \n\
    $.DataHandler.prototype = {\n\
      //Build your maker points, based on the data you are receiving.\n\
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
      transformToMarkerData: function(entries) {\n\
         var config = this.args.config;\n\
         var markersData = [];\n\
         for (var i = 1; i < entries.length; i++) {\n\
          	var entry = entries[i];\n\
            markersData.push({\n\
              position: {lat: entry[0], lng: entry[1]}, //Longitute/Lattitude info of marker\n\
              icon:  ((entry[2] > 5) ? config.pinkImage  : config.greenImage), //Replace default Image\n\
              title: entry[3] + \" \" + entry[5], //Tooltip on Marker\n\
              //label: \'M\', //single textual character that appears inside a marker\n\
              zIndex: 4\n\
            });\n\
          }\n\
         return markersData;\n\
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
        \n\
        ...\n\
        ...\n\
        \n\
        ]\n\
      **/\n\
      addMarkerPoints: function(entries) {\n\
        	var config = this.args.config;\n\
            var markersData = [];\n\
          	for (var i = 0; i < entries.length; i++) {\n\
              var entry = entries[i];\n\
              markersData.push({\n\
                position: entry //Longitute/Lattitude info of marker\n\
              });\n\
          	}\n\
        	return markersData;\n\
      },\n\
      \n\
      addDavraDeviceLocation: function(entries) {\n\
         var config = this.args.config;\n\
         var markersData = [];\n\
         for (var i = 0; i < entries.length; i++) {\n\
          	var entry = entries[i];\n\
            markersData.push({\n\
              position: {lat: entry.latitude, lng: entry.longitude}, //Longitute/Lattitude info of marker\n\
              icon: ((entry.statusString == \"Waiting for first heartbeat\") ? config.blueImage : config.greenImage),\n\
              title: entry.description,\n\
              //label: \'M\', //single textual character that appears inside a marker\n\
              zIndex: 4\n\
            });\n\
          }\n\
         return markersData;\n\
      },\n\
      \n\
      addSpaceStationPoint: function(entries) {\n\
        	var config = this.args.config;\n\
            var markersData = [];\n\
          	for (var i = 0; i < entries.length; i++) {\n\
              var entry = entries[i];\n\
              markersData.push({\n\
                position: entry, //Longitute/Lattitude info of marker\n\
                icon: config.spaceStationIcon\n\
              });\n\
          	}\n\
        	return markersData;\n\
      },\n\
  };\n\
}(jQuery));';  response.write(content);response.close();			