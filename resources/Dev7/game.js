// game.js for Perlenspiel 2.3

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-12 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.
*/

// The following comment lines are for JSLint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

// This is a template for creating new Perlenspiel games
// All of the functions below MUST exist, or the engine will stop and complain!

// PS.Init ()
// Initializes the game
// This function normally includes a call to PS.GridSize (x, y)
// where x and y are the desired initial dimensions of the grid
// options = a table with optional parameters; see documentation for details

PS.Init = function (options)
{
	"use strict";

	// change to the grid dimensions you want
	//PS.Pause = false;


	PS.GridSize ( 32, 32);
	PS.BeadFlash( PS.ALL, PS.ALL, false ); // disable all flashing
	PS.StatusFadeUp(0);
	PS.BeadBorderWidth( PS.ALL, PS.ALL, 0 );
	
	PS.Points = 0;
	//PS.Pause = false;

	//Shrimp Stuff
	PS.ShrimpX = 12;
	PS.ShrimpY = 22;
	PS.ShrimpInv = 0; //I-Frames
	PS.isBeam = false; //Whether to shoot beam or not
	PS.going = 0; //0 == stay, 1 == right, -1 == left
	PS.ShrimpHP = 3; //Game Over when 0

    //Crab Stuff
	PS.CrabX = 2;
	PS.CrabY = 2;
	PS.CrabTimer = 40;
	PS.CrabDir = -1;
	PS.CrabStun = 0;
	PS.CrabBeam = false;
	PS.CrabInv = 0; //I-Frames

	PS.fX = -2;
	PS.fY = 8;
	PS.fP = 1;

	PS.StartScreen();
};

// PS.Click (x, y, data)
// This function is called whenever a bead is clicked
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Click = function (x, y, data, options)
{
	"use strict";
	//PS.Pause == false;
	// put code here for bead clicks
};

// PS.Release (x, y, data)
// This function is called whenever a mouse button is released over a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Release = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse button is released over a bead	
};

// PS.Enter (x, y, button, data)
// This function is called whenever the mouse moves over a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Enter = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse enters a bead	
};

// PS.Leave (x, y, data)
// This function is called whenever the mouse moves away from a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Leave = function (x, y, data, options)
{
	"use strict";
	
	// Put code here for when the mouse leaves a bead	
};

// PS.KeyDown (key, shift, ctrl)
// This function is called whenever a key on the keyboard is pressed
// It doesn't have to do anything
// key = the ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F1
// shift = true if shift key is held down, false otherwise
// ctrl = true if control key is held down, false otherwise
// options = a table with optional parameters; see documentation for details

PS.KeyDown = function (key, shift, ctrl, options)
{
	"use strict";
	//PS.Pause == false;

	//if (PS.Pause == true) {
	//	return;
	//} 
	PS.Clock(1);

	if (PS.ShrimpHP > 0) {
		// Put code here for when a key is pressed	
		switch (key) {
			
			case 65:
				PS.going = -3; //Go left
				//PS.Debug( "L\n" );
			break;	

			case 68:
				PS.going = 3; //Go right
				//PS.Debug( "R\n" );
			break;
			
			case 32: //Shoot
				PS.shoot(true);
				PS.AudioPlay("fx_magnum");
				PS.isBeam = true;
			break;

		}
	}
};

// PS.KeyUp (key, shift, ctrl)
// This function is called whenever a key on the keyboard is released
// It doesn't have to do anything
// key = the ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F12
// shift = true if shift key is held down, false otherwise
// ctrl = true if control key is held down, false otherwise
// options = a table with optional parameters; see documentation for details

PS.KeyUp = function (key, shift, ctrl, options)
{
	"use strict";
	
	// Put code here for when a key is released	
};

// PS.Wheel (dir)
// This function is called whenever the mouse wheel moves forward or backward
// It doesn't have to do anything
// dir = PS.FORWARD if mouse wheel moves forward, PS.BACKWARD if backward
// options = a table with optional parameters; see documentation for details

PS.Wheel = function (dir, options)
{
	"use strict";

	// Put code here for when mouse wheel is moved
};

// PS.Tick ()
// This function is called on every clock tick
// if a timer has been activated with a call to PS.Timer()
// It doesn't have to do anything
// options = a table with optional parameters; see documentation for details

PS.Tick = function (options)
{
	"use strict";

	//PS.Debug( "Tick!\n" );

	//if (PS.Pause == false) {
		//Shrimp/Crab Movement + Code	
		
		PS.shrimpMove();
		PS.crabMove();
		PS.fishLoop();

		// Put code here to handle clock ticks
		PS.Graphics();
	//}
};


/*
	VISUAL STUFF
*/

PS.Graphics = function(options) {
	//if (PS.Pause == true) {
//		return;
//	} 

	//Sets screen color
	for (var i = 0; i < 32; i ++) {
		for (var j = 0; j < 32; j ++) {
			PS.BeadColor(j,i,0x021bbd);
		}
	}

	PS.drawFish(PS.fX,PS.fY,PS.fP);

	if (PS.isBeam == true) {
		PS.shoot(true);
		PS.isBeam = false;
	}

	if (PS.CrabBeam == true) {
		PS.shoot(false);
		PS.CrabBeam = false;
	}

	PS.drawShrimp(PS.ShrimpX,PS.ShrimpY);
	PS.drawCrab(PS.CrabX,PS.CrabY,(PS.CrabStun <= 0));
};

PS.shoot = function(friendly) {
	if (friendly) {
		for (var i = 1; i < 23; i ++) {
			color = 0xfcc732;

			//Checks to see if Crab is there, if so stuns em
			
			PS.BeadColor(PS.ShrimpX+1,-i+PS.ShrimpY,color);
			PS.BeadColor(PS.ShrimpX+5,-i+PS.ShrimpY,color);

			
		}
	} else {
		for (var i = 1; i < 25; i ++) {
			color = 0xc2f74f;
			PS.BeadColor(PS.CrabX+2,i+PS.CrabY+5,color);
			//PS.BeadColor(PS.CrabX+4,i+PS.CrabY+5,color);
			PS.BeadColor(PS.CrabX+4,i+PS.CrabY+5,color);
		}
	}
}

//Draw Sprites
PS.drawShrimp = function(x,y) {
	var grid = [[0,4,0,0,0,4,0],
				[0,4,0,0,0,4,0],
				[4,4,1,0,1,4,4],
				[0,2,4,1,4,2,0],
				[0,3,1,1,1,3,0],
				[0,2,1,1,1,2,0],
				[0,0,2,1,2,0,0],
				[0,0,0,1,0,0,0],
				[0,0,1,0,1,0,0]];
	var color = 0x010101;

	for (var i = 0; i < 9; i ++) {
		for (var j = 0; j < 7; j ++) {
			if (PS.ShrimpHP == 3 && PS.Points == 0) {
				PS.StatusText("A/D to move, SPACE to Shoot!");
			} else if (PS.Points > 0 || (PS.ShrimpHP > 0 && PS.ShrimpHP < 3)) {
				PS.StatusText("HP: " + PS.ShrimpHP + " Score: " + PS.Points);
			}

			if ((PS.ShrimpHP > 0) && (PS.ShrimpInv <= 0) && ((PS.BeadColor(j+x,i+y) == 0xc2f74f) && (j > 0) && (j < 6))) {
				PS.ShrimpHP --;
				PS.ShrimpInv = 30;

				if (PS.ShrimpHP == 0) {
					PS.AudioPlay("fx_wilhelm");
				}
			} else if (PS.ShrimpHP <= 0) {
				PS.StatusText("Game Over! Score: " + PS.Points);
			}

			if (grid[i][j] == 0) { //Transparent
				color = 0x010101;
			}
			
			//Selects color from palette
			if (PS.ShrimpHP > 0 && PS.ShrimpInv <= 20) {
				if (grid[i][j] == 1) {
					color = 0xff7d7d;
				} else if (grid[i][j] == 2) {
					color = 0xe60000;
				} else if (grid[i][j] == 3) {
					color = 0x7a0202;
				} else if (grid[i][j] == 4) {
					color = 0x000000;
				}
			} else {
				if (grid[i][j] == 1) {
					color = 0xc2c2c2;
				} else if (grid[i][j] == 2) {
					color = 0x858383;
				} else if (grid[i][j] == 3) {
					color = 0x424242;
				} else if (grid[i][j] == 4) {
					color = 0x000000;
				}
			}

			if (color != 0x010101) {
				PS.BeadColor(j+x,i+y,color);
			}
		}
	}
}

PS.drawCrab = function(x,y,stunless) {
	var grid = [[0,0,4,0,4,0,0],
				[0,0,2,2,2,0,0],
				[0,2,2,2,2,2,0],
				[2,4,4,3,4,4,2],
				[0,3,4,0,4,3,0],
				[0,0,4,0,4,0,0]];
	var color = 0x010101;

	for (var i = 0; i < 6; i ++) {
		for (var j = 0; j < 7; j ++) {
			if (((PS.BeadColor(j+x,i+y) == 0xfcc732) && (j > 0) && (j < 6)) && (PS.CrabInv <= 0)) {
				PS.CrabStun = 10;
				PS.Points ++;
				PS.CrabInv = 5;
			}

			if (grid[i][j] == 0) { //Transparent
				color = 0x010101;
			}
			
			if (stunless) {
				//Selects color from palette
				if (grid[i][j] == 1) {
					color = 0xff7d7d;
				} else if (grid[i][j] == 2) {
					color = 0xe60000;
				} else if (grid[i][j] == 3) {
					color = 0x7a0202;
				} else if (grid[i][j] == 4) {
					color = 0x000000;
				}
			} else {
				if (grid[i][j] == 1) {
					color = 0xc2c2c2;
				} else if (grid[i][j] == 2) {
					color = 0x858383;
				} else if (grid[i][j] == 3) {
					color = 0x424242;
				} else if (grid[i][j] == 4) {
					color = 0x000000;
				}
			}

			if (color != 0x010101) {
				PS.BeadColor(j+x,i+y,color);
			}
		}
	}
}

//Movement
PS.shrimpMove = function() {
	//Move left or right as shrimp
	if ((PS.going) < 0 && (PS.ShrimpX > 0)) {
		PS.ShrimpX += PS.going;
		PS.going += 1;
	} else if ((PS.going > 0) && (PS.ShrimpX < 25)) {
		PS.ShrimpX += PS.going;
		PS.going -= 1;
	}

	if (PS.ShrimpInv > 0) {
		PS.ShrimpInv --;
	}

	//Prevents escape
	if (PS.ShrimpX < 0) {PS.ShrimpX = 0;} else if (PS.ShrimpX > 25) {PS.ShrimpX = 25;}
}

PS.crabMove = function() {
	
	if (PS.CrabStun > 0) {
		PS.CrabStun --;
		return;
	}

	if (PS.CrabInv > 0) {
		PS.CrabInv --;
	}

	PS.CrabTimer --;

	if (PS.CrabTimer > 5) {
		//Crab Code
		if ((PS.CrabX > 0) && (PS.CrabDir < 0)) {
			//PS.Debug("L\n");
			PS.CrabX --;
		} else if ((PS.CrabX < 25) && (PS.CrabDir > 0)) {
			//PS.Debug("R\n");
			PS.CrabX ++;
		}

		if (PS.CrabX <= 0) {PS.CrabX = 0; PS.CrabDir = 1;} else if (PS.CrabX >= 25) {PS.CrabX = 25; PS.CrabDir = -1;}
		
	} else if (PS.CrabTimer <= 0 && PS.CrabTimer > -5) {
		PS.shoot(false);
		PS.AudioPlay("fx_silencer");
		PS.CrabBeam = true;
	} else if (PS.CrabTimer < -10) {
		PS.CrabTimer = PS.Random(10)+30;
	}
}

//Fish Stuff
PS.drawFish = function(x,y,palette) {
	var grid = [[2,2,0],
				[0,1,1],
				[2,2,0]];
	var color = 0x010101;

	for (var i = 0; i < 3; i ++) {
		for (var j = 0; j < 3; j ++) {
			if (grid[i][j] == 0) { //Transparent
				color = 0x010101;
			}
			
			//Selects color from palette
			if (palette == 1) {
				if (grid[i][j] == 1) {
					color = 0xed4832;
				} else if (grid[i][j] == 2) {
					color = 0xba2b18;
				}
			} else if (palette == 2) {
				if (grid[i][j] == 1) {
					color = 0xcce1e6;
				} else if (grid[i][j] == 2) {
					color = 0xa5bcc2;
				}
			} else if (palette == 3) {
				if (grid[i][j] == 1) {
					color = 0xd3ebdb;
				} else if (grid[i][j] == 2) {
					color = 0x9ab3a2;
				}
			}

			if (color != 0x010101) {
				if ((j+x < 32 && j+x > 0) && (i+y < 32 && i+y > 0)) {
					PS.BeadColor(j+x,i+y,color);
				} 
			}
		}
	}
}

PS.fishLoop = function() {
	if (PS.fX > 33) {
		PS.fX = -3;
		PS.fY = PS.Random(28);
		PS.fP = PS.Random(4);
	} else {
		PS.fX ++;
	}
}

PS.StartScreen = function() {
	var grid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,2,0,0,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,3,3,3,0,3,3,3,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0],
				[0,0,0,2,2,0,0,2,2,2,0,2,0,2,0,2,0,2,2,2,0,2,0,2,0,0,0,0,0,0,0,0],
				[0,0,0,0,2,2,0,2,2,2,0,2,2,0,0,2,0,2,0,2,0,2,2,2,0,0,0,0,0,0,0,0],
				[0,0,0,3,3,0,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,1,1,0,4,4,4,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,1,3,3,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,2,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,2,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,2,4,0,0,0,0,0,0],
				[0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,3,2,2,4,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,2,2,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,3,3,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0],
				[0,2,0,2,0,0,2,0,2,0,1,0,2,2,0,2,2,2,0,2,0,2,0,2,0,2,0,2,2,0,0,0],
				[0,2,2,2,0,2,0,0,2,0,2,0,0,0,0,3,0,3,0,3,3,3,0,0,3,0,0,3,3,3,0,0],
				[0,3,0,3,0,3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,4,4,4,4,5,5,5,5,0,0],
				[0,2,2,0,0,2,0,2,0,2,0,2,0,2,0,0,2,2,0,2,2,0,4,4,0,0,0,0,0,0,0,0],
				[0,0,2,2,0,2,2,2,0,2,2,2,0,2,0,0,2,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],
				[0,3,3,0,0,3,0,0,0,3,0,3,0,3,3,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

	

	for (var i = 0; i < 32; i ++) {
		for (var j = 0; j < 32; j ++) {
			var color = 0x021bbd; //Dark Blue

			//Selects color from palette
			if (grid[i][j] == 1) {
				color = 0xff7d7d;
			} else if (grid[i][j] == 2) {
				color = 0xe60000;
			} else if (grid[i][j] == 3) {
				color = 0x7a0202;
			} else if (grid[i][j] == 4) {
				color = 0x000000;
			} else if (grid[i][j] == 5) { //Yellow
				color = 0xfcc732;
			}
			
			PS.BeadColor(j,i,color);
		}
	}
}