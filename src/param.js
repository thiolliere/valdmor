"use strict";

/* shape group */
var GROUP = {};
GROUP.WALL 		= 1 << 1;
GROUP.CHARACTER = 1 << 2;
GROUP.BULLET 	= 1 << 3;
GROUP.DAMAGE 	= 1 << 4;
GROUP.FLOODER 	= 1 << 5;
GROUP.LIGHTBALL = 1 << 6;
GROUP.BLIND 	= 1 << 7;
GROUP.MANHOLE 	= 1 << 8;
GROUP.TANK 		= 1 << 9;
GROUP.MONSTER	= GROUP.MANHOLE | GROUP.FLOODER | GROUP.LIGHTBALL | GROUP.BLIND | GROUP.TANK;

/* sound */
/* volume not yet implemented */
var SOUND = {};
SOUND.SWORD_ATTACK = ['monsterAttack.ogg',1];
SOUND.SHOTGUN_SHOOT = ['pistol.ogg',1];
SOUND.SHOTGUN_RELOAD = ['click.ogg',1];
SOUND.GRENADELAUNCHER_SHOOT = ['click.ogg',1];
SOUND.GRENADELAUNCHER_EXPLOSION = ['bomb.ogg',1];
SOUND.BLIND_DIE = ['monsterDie.ogg',1];
SOUND.FLOODER_DIE = ['monsterDie.ogg',1];

/* standard spec*/
var PARAM = {};
PARAM.FRAMERATE = Math.floor(1000/60);
PARAM.ZOOM = 1.5;

/* character */
PARAM.CHAR_SOUND_INT = 1.3;
PARAM.CHAR_RAD = 12;
PARAM.CHAR_LIFE = 0;
PARAM.CHAR_VELOCITY = 1.5;
PARAM.CHAR_DISTANCE = PARAM.CHAR_RAD*1.45;

/* maze */
PARAM.MAZE_SMALL_SQUARE = 20;
PARAM.MAZE_BIG_SQUARE = 200;
PARAM.MAZE_CHANCE_OF_BLIND = 0.4;
PARAM.MAZE_MAX_BLIND = 5;
PARAM.MAZE_NBR_OF_LIGHTBALL = 1;
PARAM.MAZE_CHANCE_OF_MANHOLE = 0.03;

/* maze generator */
PARAM.MG_RADIUS = 5;
PARAM.MG_ROOM_NBR = 8;
PARAM.MG_ROOM_SIZE = 6;

/* blind */
PARAM.BL_RADIUS = 10;
PARAM.BL_LIFE = 1;
PARAM.BL_VELOCITY = 1;
PARAM.BL_TIME_BETWEEN_DECISION = 100;
PARAM.BL_SLEEPING_DISTANCE = 800;
PARAM.BL_SOUND_RATIO = 1;
PARAM.BL_ATTACK_DELAY = 100;

/* flooder */
PARAM.FL_RADIUS = 10;
PARAM.FL_LIFE = 1;
PARAM.FL_DISTANCE = 20;
PARAM.FL_VELOCITY = 1;
PARAM.FL_LIFE_TIME = 3000;
PARAM.FL_DAMAGE_RADIUS = 15;
PARAM.FL_DAMAGE = 1;

/* tank */
PARAM.TA_RADIUS = 10;
PARAM.TA_LIFE = 1;
PARAM.TA_DISTANCE = 20;
PARAM.TA_VELOCITY = 1;
PARAM.TA_DAMAGE_WIDTH = 7;
PARAM.TA_DAMAGE_HEIGHT = 7;
PARAM.TA_DAMAGE = 1;
PARAM.TA_TIME_BETWEEN_PATHFIND = 1000;

/* lightball */
PARAM.LI_RADIUS = 10;
PARAM.LI_LIFE = 1;
PARAM.LI_VELOCITY = 1.5;
PARAM.LI_DISTANCE = 20;

/* manhole */
PARAM.MH_DISTANCE = 2000;
PARAM.MH_DELTA_TIME = 400;
PARAM.MH_RADIUS = 20;
PARAM.MH_LIFE = 1;

/* grenade launcher */
PARAM.GL_RADIUS = 5;
PARAM.GL_DAMAGE = 1;
PARAM.GL_DAMAGE_RADIUS = 300;
PARAM.GL_VELOCITY = 3;
PARAM.GL_VELOCITY_TIME = 270;
PARAM.GL_LIFE_TIME = 450;
PARAM.GL_SOUND_INTENSITY = 6;
PARAM.GL_RELOAD_TIME = 800;

/* shotgun */
PARAM.SH_HEIGHT = 320;
PARAM.SH_SMALL_WIDTH = 15;
PARAM.SH_BIG_WIDTH = 100;
PARAM.SH_DAMAGE = 1;
PARAM.SH_RELOAD_TIME = 200;
PARAM.SH_SOUND_INTENSITY = 4;
PARAM.SH_DIVISION = 2;


/* sword */
PARAM.SW_HEIGHT = 40;
PARAM.SW_DISTANCE = 0;
PARAM.SW_INNER_WIDTH = 20;
PARAM.SW_OUTER_WIDTH = 20;
PARAM.SW_DAMAGE = 1;
PARAM.SW_RECOVERY = 100;
PARAM.SW_SOUND_INTENSITY = 1;
