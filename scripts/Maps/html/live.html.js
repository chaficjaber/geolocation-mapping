/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Live Map</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta charset=\"utf-8\">\n\t<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\t<link rel=\"stylesheet\" href=\"https://marv.scriptrapps.io/Maps/css/style.css\" />\n    <script src=\"https://marv.scriptrapps.io/Maps/static/config.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/Maps/static/wsClient.js\"></script>\n     <script src=\"https://marv.scriptrapps.io/Maps/static/dataHandler.js\"></script>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n    <script>\n      var client;\n      var dataHandler;\n      $(window).load(function() { \n          client = new $.WSClient({config: window.config.websocket});\n          dataHandler = new $.DataHandler({config: window.config.map});\n          //Load google Maps API\n          var scr = document.createElement(\"script\");\n          scr.setAttribute(\"src\",'https://maps.googleapis.com/maps/api/js?key='+config.map.key+'&callback=initMap&output='+config.map.output);\n          document.head.appendChild(scr);\n      });\n      \n      var map;\n      \n      var path = [];\n      \n      function addMapPoints(entries) {\n        var markersData = eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries)\");\n        for (var i = 0; i < markersData.length; i++) {\n          \tmarkersData[i][\"map\"] = map;\n            if(i == 0) {\n              map.setCenter(markersData[i][\"position\"])\n            }\n          \tvar marker = new google.maps.Marker(markersData[i]);\n            if(config.map.mode.indexOf(\"polyline\") != -1) {\n              \tpath.push(markersData[i][\"position\"]);\n            }\n        }\n         if(config.map.mode.indexOf(\"polyline\") != -1 && path.length > 1) {\n            var routePath = new google.maps.Polyline({\n              path: path,\n              geodesic: true,\n              strokeColor:  window.config.map.strokeColor,\n              strokeOpacity: window.config.map.strokeOpacity,\n              strokeWeight: window.config.map.strokeWeight,\n              map: map\n            });\n         }\n\n      }\n\n      function showFailMessage(message) {\n        $(\"#map\").html(message);\n      }\n\n      function initMap() {\n        map = new google.maps.Map(document.getElementById('map'), {\n        \tzoom: window.config.map.zoom,\n          \tcenter: window.config.map.defaultCenter,\n          \tmapTypeId: eval(window.config.map.type)\n      \t});\n        client.openConnection(addMapPoints, showFailMessage);\n      }\n    </script>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Live Map</title>\n\
    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n\
    <meta charset=\"utf-8\">\n\
	<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
	<link rel=\"stylesheet\" href=\"https://marv.scriptrapps.io/Maps/css/style.css\" />\n\
    <script src=\"https://marv.scriptrapps.io/Maps/static/config.js\"></script>\n\
    <script src=\"https://marv.scriptrapps.io/Maps/static/wsClient.js\"></script>\n\
     <script src=\"https://marv.scriptrapps.io/Maps/static/dataHandler.js\"></script>\n\
  </head>\n\
  <body>\n\
    <div id=\"map\"></div>\n\
    <script>\n\
      var client;\n\
      var dataHandler;\n\
      $(window).load(function() { \n\
          client = new $.WSClient({config: window.config.websocket});\n\
          dataHandler = new $.DataHandler({config: window.config.map});\n\
          //Load google Maps API\n\
          var scr = document.createElement(\"script\");\n\
          scr.setAttribute(\"src\",\'https://maps.googleapis.com/maps/api/js?key=\'+config.map.key+\'&callback=initMap&output=\'+config.map.output);\n\
          document.head.appendChild(scr);\n\
      });\n\
      \n\
      var map;\n\
      \n\
      var path = [];\n\
      \n\
      function addMapPoints(entries) {\n\
        var markersData = eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries)\");\n\
        for (var i = 0; i < markersData.length; i++) {\n\
          	markersData[i][\"map\"] = map;\n\
            if(i == 0) {\n\
              map.setCenter(markersData[i][\"position\"])\n\
            }\n\
          	var marker = new google.maps.Marker(markersData[i]);\n\
            if(config.map.mode.indexOf(\"polyline\") != -1) {\n\
              	path.push(markersData[i][\"position\"]);\n\
            }\n\
        }\n\
         if(config.map.mode.indexOf(\"polyline\") != -1 && path.length > 1) {\n\
            var routePath = new google.maps.Polyline({\n\
              path: path,\n\
              geodesic: true,\n\
              strokeColor:  window.config.map.strokeColor,\n\
              strokeOpacity: window.config.map.strokeOpacity,\n\
              strokeWeight: window.config.map.strokeWeight,\n\
              map: map\n\
            });\n\
         }\n\
\n\
      }\n\
\n\
      function showFailMessage(message) {\n\
        $(\"#map\").html(message);\n\
      }\n\
\n\
      function initMap() {\n\
        map = new google.maps.Map(document.getElementById(\'map\'), {\n\
        	zoom: window.config.map.zoom,\n\
          	center: window.config.map.defaultCenter,\n\
          	mapTypeId: eval(window.config.map.type)\n\
      	});\n\
        client.openConnection(addMapPoints, showFailMessage);\n\
      }\n\
    </script>\n\
  </body>\n\
</html>';  response.write(content);response.close();			