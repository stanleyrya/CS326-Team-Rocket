team-rocket
===========

![logo](https://github.com/stanleyrya/CS326-Team-Rocket/raw/master/docs/logo.png)

Members
========
 - Matt Downes
 - Jade Hedrick
 - Ryan Stanley
 - Kelly Finn
 - Joey D'Agostino
 - Zack Shuman

# Project Overview

We are creating a "Guess Who" game. 
We will be using characters from movies, TV shows, video games, and whatever else we decide to dive into. 
Our goal to have people be able to play this game with their friends online, and on their phones. 
However we are not limiting ourselves to just playing the game, 
but we want people to be able to spectate other peoples games!

# How To Run  

Running this application requires Postgresql, Node.js, and pg
##Installing Postgresql:
1. Install Homebrew (Terminal package installer)  
2. Install postgresql  
`sudo brew update`  
`sudo brew install postgresql`  
3. Create a Launch Agents directory and create a symbolic link between it and the postgresql list  
`mkdir -p ~/Library/LaunchAgents`  
`ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents`  
4. Edit system paths to make sure we are pointing to the correct postgresql. This needs to be done because sometimes Mac OS X comes with an old version of postgresql  
`sudo vim /etc/paths`  
 	Make sure “/usr/local/bin” is at the top.  
5. If you had to update your paths file, reboot your Mac. To confirm that it is looking at the right postgresql, type in:  
`which psql`  
	If you see “usr/local/bin/psql”, you are all set!  

##Initializing the Database
1. Now we are going to create the database for the application!  
`psql`  
yourusername=# `create user student createdb createuser password 'student';`  
yourusername=# `\q`  
2. Now you are ready to initialize the database. Head to /sessions/lib/db and run the database initialization script. Make sure it is an executable before running.  
`chmod +x init-pokemon-db.sh`  
`./init-pokemon-db.sh`  
3. To check if you did it right, type in this command:  
`psql student`  
student=# `\dt`  
4. You should be inside the psql and a list of tables will be shown. Make sure you see  Take a note of these things to make your psql usage totally rad:  
a. If you are typing in a command (besides any of the `\` commands) always end a statement with `;`  
b. `\q` to quit  
c. list tables with `\dt`  
d. list users with `\du`  
e. list databases with `\l` or `\list`  

##Installing Node.js and Dependencies
1. Install Node.js  
2. Install pg using node package manager:  
`npm install pg`  
3. Navigate to CS326-Team-Rocket/sessions and type in:  
`sudo npm install` 

##Running the Server(s)
1. Open two terminal windows and go to:  
a. CS326-Team-Rocket/sessions/bin  
b. CS326-Team-Rocket/sessions/lib/db  
2. Run these files using node:  
a. `node www`  
b. `node database-server.js`  

##Play the Game
1. Open up two separate web browsers and navigate to “localhost:3000”  
2. Sign in with each web browser:  
User: SquirtleLover    Password: Rocket  
User: Yugiohfan        Password: Rocket  
NOTE: Because of a bug, if you type in the wrong username and password the application will crash. Working on it! If this happens, Just restart the servers and try again.  
3. Navigate to the “Choose your Pokemon” page on each web browser.  
4. Choose a pokemon for each user.  
5. When both users are inside the game, you can play!  
NOTE: Because of a bug, if you type into the game without both users being connected, the game will crash. Working on it!  

# Original Proposal
 - You should review the notes directory to find all of our team meeting notes.
 - You should review the proposal file to find our proposal including all of the important information.
 - You should ignore the "Finn's Testing" and "test2" files for they were done for testing reasons.
 
# Functional Specification
 - You should review the notes directory to find all of our team meeting notes, even the ones we forgot!
 - You should review the docs/fspec directory to find all relevant files regarding functional specification.
 - You should ignore the "Finn's Testing" and "test2" files for they were done for testing reasons.

# References
 - Guess Who Logo: http://www.hasbro.com/games/discover/guesswho/images/guesswho_1.jpg
 - Team Rocket ball: http://media.tumblr.com/tumblr_lmwzqgCkZK1qct4jo.png 
