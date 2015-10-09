/* shape group */
WALL_GROUP 		= 1;
CHARACTER_GROUP = 2;
BULLET_GROUP 	= 3;
DAMAGE_GROUP 	= 4;
FLOODER_GROUP 	= 5;
LIGHTBALL_GROUP = 6;
BLIND_GROUP 	= 7;

/* standard spec*/
FRAMERATE = 1000/50;
ZOOM = 1.5;

/* character */
CHAR_SOUND_INT = 0.5;
CHAR_RAD = 12;
CHAR_LIFE = 0;
CHAR_VELOCITY = 1.5;
CHAR_DISTANCE = CHAR_RAD*1.1;

/* maze */
MAZE_SMALL_SQUARE = 20;
MAZE_BIG_SQUARE = 200;
MAZE_CHANCE_OF_BLIND = 0.3;
MAZE_MAX_BLIND = 5;
MAZE_NBR_OF_LIGHTBALL = 1;

/* maze generator */
MG_RADIUS = 5;
MG_ROOM_NBR = 8;
MG_ROOM_SIZE = 6;

/* blind */
BL_RADIUS = 10;
BL_LIFE = 1;
BL_VELOCITY = 1;
BL_TIME_BETWEEN_DECISION = 100;
BL_SLEEPING_DISTANCE = 800;
BL_SOUND_RATIO = 0.1;

/* flooder */
FL_RADIUS = 10;
FL_LIFE = 1;
FL_DISTANCE = 5;
FL_VELOCITY = 1;
FL_DEATH_DISTANCE = 800;

/* lightball */
LI_RADIUS = 10;
LI_LIFE = 1;
LI_VELOCITY = 1.5;
LI_DISTANCE = 5;

/* manhole */
MH_DISTANCE = 2000;
MH_DELTA_TIME = 200;

/* grenade launcher */
GL_RADIUS = 5;
GL_DAMAGE = 1;
GL_DAMAGE_RADIUS = 30;
GL_VELOCITY = 3;
GL_VELOCITY_TIME = 200;
GL_LIFE_TIME = 400;
GL_SOUND_INTENSITY = 3;
GL_RELOAD_TIME = 800;

/* shotgun */
SH_HEIGHT = 320;
SH_SMALL_WIDTH = 15;
SH_BIG_WIDTH = 100;
SH_DAMAGE = 1;
SH_RELOAD_TIME = 800;
SH_MAGAZIN = 8;
SH_SOUND_INTENSITY = 2;
