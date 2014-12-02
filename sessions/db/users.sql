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
	name varchar(50),
	path: url.path,
	primary key (pid)
);

create table corner(
	pid SERIAL,
	name varchar(50),
	primary key(pid)
);

insert into corner values(1, 'corner', '/Corner.png');

create table backOfCard(
	pid SERIAL,
	name varchar(50),
	primary key(pid)
);

insert into backOfCard values(1, 'backOfCard');

insert into users values (1, 'Jessie', 'Rocket');
insert into users values (2, 'James', 'Rocket');

insert into pokemon values
	(1,'Bulbasaur', '/Bulbasaur.png'),
	(2,'Charmander', '/Charmander.png'),
	(3,'Squirtle', '/Squirtle.png'),
	(4,'Pikachu', '/Pikachu.png'),
	(5,'Oddish', '/Oddish.png'),
	(6,'Vulpix', '/Vulpix.png'),
	(7,'Psyduck', '/Psyduck.png'),
	(8,'Ponyta', '/Ponyta.png'),
	(9,'Voltorb', '/Voltorb.png'),
	(10,'Tentacool', '/Tentacool.png'),
	(11,'Slowpoke', '/Slowpoke.png'),
	(12,'Exeggcute', '/Exeggcute.png'),
	(13,'Seel', '/Exeggcute.png'),
	(14,'Mr. Mime', '/Mr.Mime.png'),
	(15,'Drowzee', '/Drowzee.png'),
	(16,'Abra', '/Abra.png'),
	(17,'Magnemite', '/Magnemite.png'),
	(18,'Electabuzz', '/Electabuzz.png'),
	(19,'Magikarp', '/Magikarp.png'),
	(20,'Bellsprout', '/Bellsprout.png');