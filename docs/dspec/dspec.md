![logo](https://github.com/stanleyrya/CS326-Team-Rocket/raw/master/docs/logo.png)

Project Summary
===============
We are creating a "Guess Who" game. Our goal is to have people be able to play this game with their friends online, and on their phones. However we are not limiting ourselves to just playing the game, but we want people to be able to spectate other peoples games! Our original game will be a Pokemon database, but we hope to be able to add databases from movies, TV shows, video games and even take suggestions from our frequent users to make the game better as time goes on. This makes sure our users don't get bored with the same characters over and over again like the original board game. 

Edited by Matt Downes 11/11/2014

Revision History
================
|Date    |Version|Update|
|--------|:-----:|-----:|
|Proposal|1.0    |10/02/2014|
|Functional Specification|1.1|10/16/2014|
|Design Specification|1.2|11/14/2014|

Edited by Matt Downes 11/11/2014

External Libraries
==================

###Node.js  
Node.js is the basis for our server-side system. Node.js is a web application platform based on Google Chrome's JavaScript runtime.

###Express  
Express is an extension module for Node.js that makes it easy to create a web application.

###body-parser  
A middle-ware extension to Express that enables the ability to parse bodies of incoming requests.

###cookie-parser  
cookie-parser is an Express extension that creates parsers for cookie headers. It also creates an object out of the cookie keyed by the cookie names.

###morgan  
An http request logging tool.This is used for flow within our application.

###serve-favicon  
Node.js middle-ware that efficiently serves the current page's favicon to the user.

###pg  
A Node.js module that interfaces the node.js server with a postgres database. We plan to use this to handle our database within our Guess Who game.

###AJAX  
Asynchronous Javascript and XML, we plan to use this to update the screen and retrieve information from the user without reloading the page.

###jQuery  
This makes programming with Javascript easy as well as handling events.  In our application these events include "flipping" the character cards.

###net  
This is a library that is used for online based connections and communications.  This will be used for our chat function as well as connecting to other players.

###Socket.io  
This is a powerful and fast real time engine for chat and communications. We may use this as well for the chat function of the game.

Edited by Joe D’Agostino 11/12/14

Birds Eye View
==============

![Birds Eye View](https://github.com/stanleyrya/CS326-Team-Rocket/raw/master/docs/Component Diagram.png)

Edited by Jade Hedrick and Ryan Stanley 11/11/2014

Components
==========

###Login/Auth  
This page will be implemented by using the example given to us in workshop four; however, we will be changing its layout and giving it a cosmetic update. This page will communicate with auth which is not a viewable page but will make sure the login information, input by the user, is correct, matches a username and corresponding password. Auth will also be implemented using the template given to us in workshop four. If auth responds negatively, either there is now user in the system by that name or the password doesn’t match said username, the login page will refresh with a message indicating one of the variables is wrong. This will continue until the username and password inputs are correct at which point the profile page for the client will appear. The only problem I can see occurring is if someone continually tries to log in until it works, and seeing someones profile. This, however, would take quite a bit of time, energy, and patients for absolutely no gain as personal information isn’t kept for our website.

Edited by Kelly Finn 11/11/2014

###Profile  
The profile page will be based off of the main page given to us in workshop four but will be vastly different. Instead the profile will contain all of the the users information, username, password, and an “about me” section. The user can either stay and read their own info, or click either of the buttons titled “online” or “logout” respectively. “Logout” will work in the same way it does in workshop four, only in button form, and will log the user out. “Online” will bring them to the online screen. As with the login page, profile undertake major cosmetic changes. A minor problem we may have is implementing the buttons to do their jobs instead of using the url to change views.

Edited by Kelly Finn 11/12/2014

###Online  
Online, like all of the other non gaming components, will be designed using workshop four as a template. Aside from the cosmetic update, the usernames will also be clickable “events” and when one is chosen and clicked, matchmaking mode will be invoked. If this mode does not go through the user will be brought back to the online screen, otherwise the game will begin. A problem I can foresee arising as we try implementing this is “matchmaking” not working or this page registering people as online even after they closed the browser simply because they didn’t log out.
 
Edited by Kelly Finn 11/14/2014

###Matchmaking  
Matchmaking will not be a viewable page in our application; like Authentication, it is done behind the scenes and out of view of the user. There are two ways to get to the matchmaking state—from the Endgame view and from the Online view. As a brief summary, Matchmaking will establish a TCP connection between two users before sending both players to the Game view.

We will start from Online. Online, as mentioned before, will have a list of users currently online. The list of users are clickable. Matchmaking will eject the client back to the Online view if the client selects their own name or if, for whatever reason, the connection is refused by the potential opponent. Once the user, we'll call User1, has selected another available user, in this case, User2, the two users will establish a TCP connection using a three-way handshake:

Note that each user will have their own hostname and port number component, and these will be used for the required parameters to establish a TCP connection.

At the Endgame screen the connection will close if the users do not agree to have a rematch, they will be brought to the Matchmaking state again, using the cached hostname and port.

We foresee some impressive difficulties with this because it involves socket programming. We are learning about this soon in this class, but only two group members have prior, shaky experience with it, and the experience has involved strict client-server interactions rather than two hosts acting as clients. It was also in java rather than Javascript.

The code itself will be simple, mirroring any other TCP client-server code. The user will be routed to Online if the user tries to connect to themselves or if the potential opponent refuses the connection. Otherwise the connection will remain open until the Endgame view and the users do not agree to have a rematch. If both do not agree, the connection is closed and the users are brought to their profile.

Edited by Jade Hedrick 11/11/2014

###Game  
There will be two major panels, the card panel and chat box. The card panel will rely on JQuery and AJAX to dynamically update the view without refreshing the page. Each card in this panel has two states, up and down, which can be “flipped” with a mouse click. JQuery has functions that transform images which will be perfect for this task. We will also be using the module pg, which works with a Postgres database, to pull each card’s “character”. This will allow us to have a new set of cards each time. Each card will also have the "Guess" option.  

The chat box will either be taken care of using Socket.IO or net. By using a library, we can focus our time on the gameplay and other elements.  

Each player will have their own Game screen running. The network connection will be used for the chat box as each player individually flips their own cards. The network connection will also be used to control the state of the game, more specifically updating the other player when one wins.  

Each time a player guesses incorrectly, the guess will appear as an “action” in the chat box. However if the player has guessed wrong three times, both players will progress to the End Game screen. Similarly f the player guesses correctly, the players will also progress to the End Game screen.  

Edited by Ryan Stanley 11/14/2014

###End Game  
After the game is over you will be prompted with a new screen which will be different depending on if you won or lost. If you won the game you will be prompted to Request a Rematch with your opponent, go back to the main page where you can find a new opponent, or logout and end a winner. If you lost the game you will be prompted to Request a Rematch with your opponent, go back the main page where you can find a new opponent, or log out and admit defeat. The only difference between the two screens will be the title of saying “Congratulations” or “Better Luck Next Time.” If you don’t select Request a Rematch then the connection will be disconnected with your opponent, if you do select Request a Rematch (as well as your opponent) then the connection will remain open so you can start a new game.

Edited by Jade Hedrick 11/14/2014

Division of Work
================

Jade Hedrick-------Socket Programming, Debugging, Management  
Joe D’Agostino-----Socket Programming, Front-end  
Kelly Finn---------UI, Graphics, Front-end  
Matt Downes--------Programming, Front-end  
Zack Shuman--------Presentation, Programming, Back-end  
Ryan Stanley-------Programming, Back-end  

Edited by Ryan Stanley 11/14/2014
