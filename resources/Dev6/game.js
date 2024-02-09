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
var WIRE = {
	grid : [[0,0,2,0,0,4,2,0],
			[0,4,0,0,0,0,0,0],
			[0,0,0,0,0,5,0,6],
			[1,0,0,0,0,0,0,0],
			[0,5,6,0,0,0,0,0],
			[0,0,0,0,0,0,0,1],
			[0,0,0,0,0,0,0,0],
			[3,0,0,0,0,0,0,3]],

	beadConnected: 0,
	stage: 1,
	down: false
}


PS.Init = function (options)
{
	"use strict";
	WIRE.stage = PS.Random(3);
	WIRE.genLVL(WIRE.stage);

	//WIRE.deleteColor(0xf20202);
	PS.StatusText("Connect wires, fill the screen! Lv 1");

	//0 by default, 1-6 for ROYGBV
	
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
	
	if (WIRE.grid[x][y] != 0) {
		WIRE.beadConnected = WIRE.grid[x][y];
	}

	WIRE.down = true;
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
	//If released over matching color, success, else failure.
	
	WIRE.down = false;
	WIRE.letGo(x,y);
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
	if (WIRE.down == false) {
		return;
	}

	//PS.Debug(PS.BeadColor(x,y));
	//If it's white, paint in color. Else, Let go
	if (PS.BeadColor(x,y) == 0xFFFFFF || PS.BeadColor(x,y) == PS.EMPTY) {
		WIRE.paint(x,y,WIRE.beadConnected);	
	} else {
		WIRE.letGo(x,y);
	}

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


PS.KeyDown = function (key, shift, ctrl, options){"use strict";};
PS.KeyUp = function (key, shift, ctrl, options){"use strict";};
PS.Wheel = function (dir, options) { "use strict";};
PS.Tick = function (options){"use strict";};

WIRE.deleteColor = function(col) {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if (PS.BeadColor(i,j) == col) {
				PS.BeadColor(i,j,0xFFFFFF);
			}
		}
	}
}

WIRE.complete = function() {
	tf = true;
	
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if ((PS.BeadColor(i,j) == 0xFFFFFF) || (PS.BeadColor(i,j) == PS.EMPTY)) {
				tf =  false;
			}
		}
	}

	if ((tf == true)) {
		if (WIRE.stage <= 3) {
			PS.StatusText("Next Level!");
			WIRE.stage = 4;
			WIRE.genLVL(WIRE.stage);
		} else if (WIRE.stage == 4) {
			PS.StatusText("Final Level!");
			WIRE.stage = 5;
			WIRE.genLVL(WIRE.stage);
		} else {
			PS.StatusText("You win. Congrats!");
			WIRE.stage = 6;
			WIRE.genLVL(6);
		}


	}
}

WIRE.paint = function(x,y,b) {
	//Cannot delete the actual thing

	//PS.Debug("Paint Activated");
	if (WIRE.grid[x][y] == 0) {

		switch (b) {
			case 1:
				PS.BeadColor(x,y,0xd11006);
			break;

			case 2:
				PS.BeadColor(x,y,0xd9800b);
			break;

			case 3:
				PS.BeadColor(x,y,0xd4d406);
			break;

			case 4:
				PS.BeadColor(x,y,0x24a105);
			break;

			case 5:
				PS.BeadColor(x,y,0x084196);
			break;

			case 6:
				PS.BeadColor(x,y,0x7107b5);
			break;

			case 7:
				PS.BeadColor(x,y,0xb0048d);
			break;
	}
	}
}

WIRE.letGo = function(x,y) {
	//PS.Debug("LetGo Activated");
	WIRE.down = false;
	
	var col;

	//col = PS.BeadColor(x,y);
	switch (WIRE.beadConnected) {
		case 1:
			col = 0xd11006;
		break;

		case 2:
			col = 0xd9800b;
		break;

		case 3:
			col = 0xd4d406;
		break;

		case 4:
			col = 0x24a105;
		break;

		case 5:
			col = 0x084196;
		break;

		case 6:
			col = 0x7107b5;
		break;

		case 7:
			col = 0xb0048d;
		break;
	}

	//If you let go on the matching color, it stays connected. Else, erase previous color you're working with
	if (WIRE.beadConnected == WIRE.grid[x][y]) {
		WIRE.complete();
	} else if (WIRE.beadConnected != 0) {
		WIRE.deleteColor(col);
	}

	WIRE.beadConnected = 0;


}

WIRE.genLVL = function() {
	//Set Grid to alternative stage
	if (WIRE.stage == 2) {
		WIRE.grid = [[0,0,0,0,0,0,0,0],
					 [0,0,0,0,0,2,0,0],
					 [0,0,0,0,0,5,0,0],
					 [0,0,0,0,0,0,0,0],
					 [0,0,3,0,0,0,5,0],
					 [0,0,4,0,0,0,0,0],
					 [0,1,0,0,0,0,3,0],
					 [0,0,2,0,0,0,4,1]];
	} else if (WIRE.stage == 3) {
		WIRE.grid = [[4,0,0,0,0,0,0,6],
					 [0,3,1,0,0,0,0,0],
					 [0,0,0,0,0,0,0,0],
					 [0,0,5,2,0,0,0,0],
					 [0,0,0,0,0,0,3,0],
					 [0,0,2,5,0,0,1,0],
					 [0,0,0,0,0,0,4,0],
					 [6,0,0,0,0,0,0,0]];
	} else if (WIRE.stage == 4) {
		WIRE.grid = [[6,3,0,1,4,0,0,0],
					 [0,0,0,0,0,0,4,0],
					 [0,0,0,0,0,0,0,2],
					 [0,0,0,0,0,0,0,0],
					 [0,0,0,0,5,0,0,0],
					 [0,0,0,0,0,0,0,0],
					 [0,0,3,1,2,0,5,0],
					 [0,0,0,0,6,0,0,0]];
	} else if (WIRE.stage == 5) {
		WIRE.grid = [[7,0,0,0,0,0,0,6],
					 [0,0,1,0,0,0,0,2],
					 [0,0,4,3,0,0,0,0],
					 [0,0,0,0,4,0,0,0],
					 [0,0,3,0,0,0,0,0],
					 [0,0,5,0,0,5,0,0],
					 [0,0,0,0,0,0,0,0],
					 [0,0,0,0,7,6,1,2]];
	} else if (WIRE.stage == 6) {
		WIRE.grid = [[4,4,4,4,4,4,4,4],
					 [4,0,0,0,0,0,0,4],
					 [4,0,0,0,0,0,0,4],
					 [4,0,0,0,0,0,0,4],
					 [4,0,0,0,0,0,0,4],
					 [4,0,0,0,0,0,0,4],
					 [4,0,0,0,0,0,0,4],
					 [4,4,4,4,4,4,4,4]];
	}

	PS.GridSize ( 8, 8);
	for (var i = 0; i < 8; i ++) {
		for (var j = 0; j < 8; j ++) {
			PS.BeadColor(i,j,0xFFFFFF);
		}	
	}

    // Put any other init code here
	for (var i = 0; i < 8; i ++) {
		for (var j = 0; j < 8; j ++) {
			switch (WIRE.grid[i][j]) {
				case 1:
					PS.BeadColor(i,j,0xf20202);
				break;

				case 2:
					PS.BeadColor(i,j,0xffa30f);
				break;

				case 3:
					PS.BeadColor(i,j,0xf2ee07);
				break;

				case 4:
					PS.BeadColor(i,j,0x12fc12);
				break;

				case 5:
					PS.BeadColor(i,j,0x1879f0);
				break;

				case 6:
					PS.BeadColor(i,j,0x8f12fc);
				break;

				case 7:
					PS.BeadColor(i,j,0xfc05c3);
				break;
			}
		}	
	}

}