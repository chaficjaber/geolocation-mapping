/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Live Map</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta charset=\"utf-8\">\n\t<link rel=\"shortcut icon\"type=\"image/x-icon\" href=\"data:image/x-icon;,\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\t<link rel=\"stylesheet\" href=\"https://marv.scriptrapps.io/Maps/css/style.css\" />\n    <script src=\"https://marv.scriptrapps.io/Maps/static/config.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/Maps/static/wsClient.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/Maps/static/dataHandler.js\"></script>\n    <script src=\"https://marv.scriptrapps.io/Maps/static/utils.js\"></script>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n    <script>\n      var client;\n      var dataHandler;\n      var zoom, lat, lng;\n      $(window).load(function() { \n          client = new $.WSClient({config: window.config.websocket});\n          dataHandler = new $.DataHandler({config: window.config.map});\n        \n          zoom = $.urlParam('zoom');\n          lat = $.urlParam('lat');\n          lng = $.urlParam('lng');\n        \n          //Load google Maps API\n          var scr = document.createElement(\"script\");\n          scr.setAttribute(\"src\",'https://maps.googleapis.com/maps/api/js?key='+config.map.key+'&callback=initMap&output='+config.map.output);\n          document.head.appendChild(scr);\n      });\n      \n      var map;\n      \n      var path = [];\n      \n      var isCenterFetched = window.config.map.fetchCenter; \n      \n      function addMapPoints(entries) {\n        map = eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries, map)\");\n      }\n\n      function showFailMessage(message) {\n        $(\"#map\").html(message);\n      }\n\n      function initMap() {\n         map = new google.maps.Map(document.getElementById('map'), {\n        \tzoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n          \tcenter: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n          \tmapTypeId: eval(window.config.map.type)\n      \t});\n        client.openConnection(addMapPoints, showFailMessage);\n      }\n    </script>\n  </body>\n</html>"},"scriptrdata":[]}}*#*#*/
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
    <script src=\"https://marv.scriptrapps.io/Maps/static/utils.js\"></script>\n\
  </head>\n\
  <body>\n\
    <div id=\"map\"></div>\n\
    <script>\n\
      var client;\n\
      var dataHandler;\n\
      var zoom, lat, lng;\n\
      $(window).load(function() { \n\
          client = new $.WSClient({config: window.config.websocket});\n\
          dataHandler = new $.DataHandler({config: window.config.map});\n\
        \n\
          zoom = $.urlParam(\'zoom\');\n\
          lat = $.urlParam(\'lat\');\n\
          lng = $.urlParam(\'lng\');\n\
        \n\
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
      var isCenterFetched = window.config.map.fetchCenter; \n\
      \n\
      function addMapPoints(entries) {\n\
        map = eval(\"dataHandler.\" + window.config.dataHandler.transformFnc +\"(entries, map)\");\n\
      }\n\
\n\
      function showFailMessage(message) {\n\
        $(\"#map\").html(message);\n\
      }\n\
\n\
      function initMap() {\n\
         map = new google.maps.Map(document.getElementById(\'map\'), {\n\
        	zoom: (zoom !=null) ? parseInt(zoom) : window.config.map.zoom,\n\
          	center: (lat !=null && lng != null)? {lat: parseFloat(lat), lng: parseFloat(lng) }  : window.config.map.defaultCenter,\n\
          	mapTypeId: eval(window.config.map.type)\n\
      	});\n\
        client.openConnection(addMapPoints, showFailMessage);\n\
      }\n\
    </script>\n\
  </body>\n\
</html>';  response.write(content);response.close();			