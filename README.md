starbandits-web
===============

Star Bandits Web Info Project

This is a HTML5 web project that presents Star Bandits game stats. It uses game servers's REST API to obtain data.
This is based on AngularJS and runs on any web server (e.g. NGINX). 

The main conents includes:

1. "Game progress information" of currently logged on user (Official instance only. See below). This includes player's
   statistics such as Credits, Energy, number of Fighers/Mines, etc.
2. Game rules information for each game template. Each game is created from a game template. Each game template
   specifies rules such as the size of an universe, length of space ages, etc.


Star Bandits Web Info application are deployed in two ways:

A. "Official instance" runs at Star Bandits web server, at https://www.starbandits.com/app/Console
   It is a simple copy of this project. Because it runs on the official server at www.starbandits.com domain, 
   game progress information for the user, who is currently logged onto www.starbandits.com, will be presented.

B. "Adhoc instance" runs on an arbitrary web server for development purpose. You can run it on any web server of your
   choice (IIS, Tomcat, NGINX, etc.). It enables contributors to tweak CSS styles, for instance. As for "Game progress
   information", an arbitrary "bot" is chosen and his game stats are displayed (yes, he is in huge disadvantage! every
   one knows where he is and what he can do!)
   
