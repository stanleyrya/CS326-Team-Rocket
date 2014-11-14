![logo](https://github.com/umass-cs-326/team-rocket/raw/master/docs/logo.png)

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

![Birds Eye View](https://github.com/umass-cs-326/team-rocket/raw/master/docs/Component Diagram.png)

Edited by Jade Hedrick and Ryan Stanley 11/11/2014

Components
==========

###Game  
There will be two major panels, the card panel and chat box. The card panel will rely on JQuery and AJAX to dynamically update the view without refreshing the page. Each card in this panel has two states, up and down, which can be “flipped” with a mouse click. JQuery has functions that transform images which will be perfect for this task. We will also be using the module pg, which works with a Postgres database, to pull each card’s “character”. This will allow us to have a new set of cards each time. Each card will also have the "Guess" option.  

The chat box will either be taken care of using Socket.IO or net. By using a library, we can focus our time on the gameplay and other elements.  

Each player will have their own Game screen running. The network connection will be used for the chat box as each player individually flips their own cards. The network connection will also be used to control the state of the game, more specifically updating the other player when one wins.  

Each time a player guesses incorrectly, the guess will appear as an “action” in the chat box. However if the player has guessed wrong three times, both players will progress to the End Game screen. Similarly f the player guesses correctly, the players will also progress to the End Game screen.  

Edited by Ryan Stanley 11/14/2014
