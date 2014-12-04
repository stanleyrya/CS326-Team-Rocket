drop table if exists users;
drop table if exists pokemon;
drop table if exists corner;
drop table if exists backOfCard;

create table users (
  	uid SERIAL,
  	fname varchar(50),
  	lname varchar(50),
  	password varchar(25),
  	age int,
  	primary key (uid)
);

create table pokemon (
	pid SERIAL,
	name varchar(200),
	primary key (pid)
);

create table corner(
	pid SERIAL,
	name varchar(50),
	primary key(pid)
);

insert into corner values(1, 'corner');

create table backOfCard(
	pid SERIAL,
	name varchar(50),
	primary key(pid)
);

insert into backOfCard values(1, 'backOfCard');

insert into users values (1, 'Jessie', 'Rocket');
insert into users values (2, 'James', 'Rocket');

insert into pokemon values
	(1,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Bulbasaur.png'),
	(2,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Charmander.png'),
	(3,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Squirtle.png'),
	(4,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Pikachu.png'),
	(5,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Oddish.png'),
	(6,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Vulpix.png'),
	(7,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Psyduck.png'),
	(8,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Ponyta.png'),
	(9,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Voltorb.png'),
	(10,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Tentacool.png'),
	(11,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Slowpoke.png'),
	(12,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Exeggcute.png'),
	(13,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Seel.png'),
	(14,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Mr.%20Mime.png'),
	(15,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Drowzee.png'),
	(16,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Abra.png'),
	(17,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Magnemite.png'),
	(18,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Electabuzz.png'),
	(19,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Magikarp.png'),
	(20,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Bellsprout.png');