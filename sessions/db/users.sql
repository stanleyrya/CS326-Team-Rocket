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
	(1,'Bulbasaur'),
	(2,'Charmander'),
	(3,'Squirtle'),
	(4,'Pikachu'),
	(5,'Oddish'),
	(6,'Vulpix'),
	(7,'Psyduck'),
	(8,'Ponyta'),
	(9,'Voltorb'),
	(10,'Tentacool'),
	(11,'Slowpoke'),
	(12,'Exeggcute'),
	(13,'Seel'),
	(14,'Mr. Mime'),
	(15,'Drowzee'),
	(16,'Abra'),
	(17,'Magnemite'),
	(18,'Electabuzz'),
	(19,'Magikarp'),
	(20,'Bellsprout');