drop table if exists users;
drop table if exists pokemon;
drop table if exists corner;
drop table if exists backOfCard;

create table users (
  	uid SERIAL,
  	fname varchar(50),
  	password varchar(25),
  	chosen varchar(200),
  	chosenImage varchar(200),
  	primary key (uid)
);

create table pokemon (
	pid SERIAL,
	name varchar(200),
	realName varchar(50),
	primary key (pid)
);

insert into users values (1, 'Jessie', 'Rocket', 'Abra');
insert into users values (2, 'James', 'Rocket', 'Squirtle');
insert into users values(3, 'SquirtleLover', 'Rocket', 'Abra', 'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Abra.png');
insert into users values(4, 'Yugiohfan', 'Rocket', 'Squirtle', 'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Squirtle.png');

insert into pokemon values
	(1,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Bulbasaur.png', 'Bulbasaur'),
	(2,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Charmander.png', 'Charmander'),
	(3,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Squirtle.png', 'Squirtle'),
	(4,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Pikachu.png', 'Pikachu'),
	(5,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Oddish.png', 'Oddish'),
	(6,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Vulpix.png', 'Vulpix'),
	(7,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Psyduck.png', 'Psyduck'),
	(8,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Ponyta.png', 'Ponyta'),
	(9,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Voltorb.png', 'Voltorb'),
	(10,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Tentacool.png', 'Tentacool'),
	(11,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Slowpoke.png', 'Slowpoke'),
	(12,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Exeggcute.png', 'Exeggcute'),
	(13,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Seel.png', 'Seel'),
	(14,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Mr.%20Mime.png', 'Mr. Mime'),
	(15,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Drowzee.png', 'Drowzee'),
	(16,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Abra.png', 'Abra'),
	(17,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Magnemite.png', 'Magnemite'),
	(18,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Electabuzz.png', 'Electabuzz'),
	(19,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Magikarp.png', 'Magikarp'),
	(20,'https://raw.githubusercontent.com/umass-cs-326/team-rocket/master/sessions/lib/db/card%20pictures/Bellsprout.png', 'Bellsprout');