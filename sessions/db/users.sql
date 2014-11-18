drop table if exists users;
drop table if exists pokemon;

create table users (
  	uid SERIAL,
  	username varchar(50),
  	password varchar(25),
 	primary key (uid)
  );

create table pokemon{
	pid SERIAL,
	name varchar(50),
	primarty key (pid)
};

insert into users values (1, 'Jessie', 'Ekins');
insert into users values (2, 'James', 'Koffing');
insert into users values (3, 'Butch', 'Raticate');
insert into users values (4, 'Cassidy', 'Drowzee');
insert into users values (5, 'Giovanni', 'Persian');
insert into users values (6, 'Meowth', 'Meowth');

insert into pokemon values (1, 'Bulbasaur');
insert into pokemon values (2, 'Charmander');
insert into pokemon values (3, 'Squirtle');
insert into pokemon values (4, 'Pikachu');
insert into pokemon values (5, 'Oddish');
insert into pokemon values (6, 'Vulpix');
insert into pokemon values (7, 'Psyduck');
insert into pokemon values (8, 'Ponyta');
insert into pokemon values (9, 'Voltorb');
insert into pokemon values (10, 'Tentacool');
insert into pokemon values (11, 'Slowpoke');
insert into pokemon values (12, 'Exeggcute');
insert into pokemon values (13, 'Seel');
insert into pokemon values (14, 'Mr. Mime');
insert into pokemon values (15, 'Drowzee');
insert into pokemon values (16, 'Abra');
insert into pokemon values (17, 'Magnemite');
insert into pokemon values (18, 'Electabuzz');
insert into pokemon values (19, 'Magikarp');
insert into pokemon values (20, 'Bellsprout');