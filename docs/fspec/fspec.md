![logo](https://github.com/umass-cs-326/team-rocket/raw/master/docs/logo.png)  

Edited by KF  10/15/14

##Rolecall

**Kelly Finn - The Starving Artist**  
Team Role: 			Artist  

**Jade Hedrick - The Exterminator**  
Team Role: 			Debugger  

**Matthew Downes - The Code Monkey**  
Team Role: 			Coder  

**Ryan Stanley - The Code Monkey**  
Team Role:			Coder

**Zack Shuman - The Crashtest Dummy**  
Team Role:			Tester

**Joe D’Agostino - The King** 
Team Role:			Business Man  

Edited by JH  10/15/14


##Overview
We are creating a "Guess Who" game. We will be using characters from movies, TV shows, video games, and whatever else we decide to dive into. Our goal is to have people be able to play this game with their friends online, and on their phones. However we are not limiting ourselves to just playing the game, but we want people to be able to spectate other peoples games!

This document only discusses what the user will see and interact with throughout the web application. It does not discuss any low-level implementation specifics however gives a front-end high-level perspective.

Edited by JH  10/15/14

##Scenarios

###How to play
The blue chat box was blinking and going down, so User asked a question, after (s)he hit enter his/her timer stopped blinking and a red timer lit up and started going down. Once his/her partner had responded his/her timer lit up again. So User started clicking the pictures that could no longer be his/her partner. Once (s)he finished clicking pictures his/her timer stopped blinking and his/her partners started once more. Next his partner asked a question, once User looked at his/her picture (s)he responded truthfully, and his/her partners timer lit up again.

###Benny
Benny is a new user. Benny decided to click a link to “Guess Who”. When he clicked the page we decided to click Guest. There was a prompt that warned Benny he would not be able to track his stats. He clicked that he was sure and did not want to create a new account. Once he did this a screen popped up and said “searching for challenge”  after a few moments a new page popped up. There was a prompt to pick a person and many people to choose from. He clicked a person, when clicked he saw a larger picture of this person and a prompt asking if he was sure that this was the person he wanted. After he clicked yes the page changed. Benny could see the same people he could choose from and his picture on the right side of the screen. under the list of people he could see a chat box, and two timers next to the chat box. *Refer to how to play.* This continued Until Benny said “Is your person Bill?” His partner responded with “Yes”. Once this happened there was a pop-up. Benny had 3 choices, continue, create new account, or done for now. He clicked create new account. He was prompted to enter his email address, a username, a password, re enter his password, his DOB, and a security code. He then confirmed his information, opened his email and entered the confirmation code, once he had done this he was brought back to the sign in.

###Jenna
Jenna is a veteraned user. She typed in the URL and proceeded to enter her username and password followed by the sign in button. Once she had done this she was brought to her profile. She looked at her friends list and noticed her friend SurferDude312 was on. So she sent him a challenge. And he quickly accepted. There was a prompt to pick a person and many people to choose from. She clicked a person, when clicked she saw a larger picture of this person and a prompt asking if she was sure that this was the person she wanted. After she clicked yes the page changed. *Refer to how to play.* Jenna and SurferDude312 then proceeded to play for this game and 2 more following games.

###Antonio
Antonio typed in the URL. He then put in his username and password, followed by hitting the login button. Once he had logged on he proceeded to click the menu button “Stats” at the top right corner. He quickly looked over his stats, specifically looking at his win to loss ration, and his win to loss ratio against his friends. He then looked on the left side of the screen and found the offline section of his friends. He clicked the arrow that was pointing to the right and now pointed straight down. He then scrolled for his friend BillyJean42 and clicked them. When the pop-up appeared he clicked profile. Then he proceeded to scroll down to stats and compare his win to loss ratio and friends win to loss ratio with that of his friends. Once done, he proceeded to click “Random Challenge” *Refer to how to play.* and played on hoping to improve his stats.

###Megan
Megan is a new user. She was surfing the net and saw a link to play “Guess Who”. So she clicked it. Once she had clicked it she looked at the login page and decided to click the new user button. She was prompted to enter her email address, a username, a password, re enter her password, her DOB, and a security code. She then confirmed her information, opened her email and entered the confirmation code, once she had done this she was brought back to the sign in. Once here she entered her new username and password then clicked “sign in”. She was then brought to her profile page. She then proceeded to hit the “random challenge” button and watched as her screen switched to a loading screen that said “Searching for Challenge”. After about 10 seconds, there was a prompt to pick a person and many people to choose from. She clicked a person, when clicked she saw a larger picture of this person and a prompt asking if she was sure that this was the person she wanted. After she clicked yes the page changed. *Refer to how to play.* After this game had ended Megan was brought back to her profile. She proceeded to click the “Stats” button. Once here she read her stats, 1 game played, 1 wins, 1.0 win to loss ratio, 0 wins versus friends, 1 wins versus random, and average win time of 12 minutes.

###Alfred
Alfred is an old user. As he has been playing for some years he simply clicked the “Guess Who” shortcut on his desktop. Once clicked he could see the login screen. After he had entered his username and password he was brought to his profile. He wasted no time in clicking the “random challenge” button at the top right of the screen. After a couple of seconds of waiting on the “Searching for challenge” screen he was a prompted to pick a person with many people to choose from. He clicked a person, when clicked he saw a larger picture of this person and a prompt asking if he was sure that this was the person he wanted. After he clicked yes the page changed. *Refer to how to play.* After about 5 minutes Alfred was victorious and was brought back to his profile, he once again quickly clicked the “random challenge” button at the top right of the screen. After a couple of seconds of waiting on the “Searching for challenge” screen he was a prompted to pick a person with many people to choose from. He clicked a person, when clicked he saw a larger picture of this person and a prompt asking if he was sure that this was the person he wanted. After he clicked yes the page changed. *Refer to how to play.* After a few more victories, and one loss, once Alfred had landed back into his profile screen, he clicked the “logout” button at the bottom right corner of the screen.

###Connor
Connor is a old user that has not played in quite some time. Connor’s sister Megan finally hopped off of the computer. However when Connor approached the Computer Megan had left the “Guess Who” page open. Connor was curious however he did not remember his old password, so he clicked the forgot password button. He was prompted to enter his username and email, so he did. There was a pop-up telling him to check his email. So he did. There was an email from “Guess Who”, so Connor clicked the email. There was a warning in the email, alerting him to not click the link if he did not request a forgotten password request. As he did request a new password he clicked the link. He was promoted to enter a new password and to re enter that password. He was brought back to the sign in page. Once there he put in his username and new password then clicked “sign in”. Once he had logged in he clicked the “random challenge” button at the top right of the screen. After a few seconds of waiting on the “Searching for challenge” screen he was a prompted to pick a person with many people to choose from. He clicked a person, when clicked he saw a larger picture of this person and a prompt asking if he was sure that this was the person he wanted. After he clicked yes the page changed. *Refer to how to play.* After that game Connor had had enough for now. So when he was redirected to the profile page and clicked “logout” at the bottom right corner of the page.

###Wreck-It Ralph
Wreck-it Ralph is a veteran user who takes Guess Who way too seriously.  He challenges his arch nemesis Fix-It Felix to a winner take all final game to determine who the best is. Wreck-It Ralph challenges Felix by clicking on this name in his friends list and opens up a new game with him. *Refer how to play.* Ralph chooses the person he wanted and began the game. After a few turns go by, Ralph tries making a guess. After several guesses, Ralph gets angry and proceeds to quit by clicking the forfeit game button. It says “are you sure you wish to forfeit”, and Ralph clicks yes. He then loses to Felix and proceeds to yell “I’m gonna wreck it” and then smashes his computer.

###Team Rocket
Team Rocket is looking to boost their stats by going on and challenging random people.  However they’re not looking to do this fairly. They click the “Search for Challenge” button and after a few seconds of waiting they are matched with a competitor. *Refer how to play.* They start playing the game and as turns go by they start to lie about their person. As the game goes on the person realizes that Team Rocket is cheating. They click the “Report User” button in the bottom right corner and they’re prompted “Are You Sure You Wish to Report this User.” They click “Yes.” They then proceed to quit because they are sick of the cheating. Team Rocket gets the win…for now. When they were reported the chat was sent to Officer Jenny for review. Officer Jenny determines that Team Rocket was cheating and takes the win away from them. Team Rocket’s plan was foiled and they blasted off again. 

Edited by ZS, MD  10/15/14

##Non Goals
This version will not support the following features:
- Non-UMass email accounts
- Multiple Databases
- Playing a game with a random person
- Spectating games
- Betting on games (while spectating)
- Enhanced reporting feature

Edited by RS  10/15/14

##Flowchart

Edited by KF, ZS  10/15/14

##Screen-by-screen

Edited by KF, ZS  10/15/14
