/*
game.js for Perlenspiel 3.3.x
Last revision: 2022-03-15 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-22 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these two lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT remove this directive!

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.init = function( system, options ) {
	// Uncomment the following code line 
	// to verify operation:
	//PS.DebugClose();
	//PS.debug( "PS.init() called\n" );
	
	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

	PS.gridSize( 32, 33);

	PS.statusText("Welcome to ArPix!");
	//PS.statusText("Now press A,B,C,D, or E to choose brightness.");

	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	// PS.statusText( "Game" );

	// Add any other initialization code you need here.


	//Initializes the 5 colors and 5 shades of color that you can choose. The darkest and brightest are black and white respectively.
	PS.PAINTCOLOR = [ 0xff7d7d, 0xe60000, 0x7a0202, 
				  0xfcefa2, 0xffdc17, 0xccb806, 
				  0x98fa7f, 0x2bcf02, 0x1c8501, 
				  0x95b4fc, 0x0549e8, 0x014c85, 
				  0xc795fc, 0x7907f2, 0x4d009e,
				  0xFFFFFF, 0x000000 ];
	
	PS.CURRCOLOR = 0xe60000;
	PS.penDown = false;
	
	PS.colVal = 1;
	PS.brightVal = 3;

	//,,,,,,,,,,,,,,,,,
	PS.color(0,31,0xFFFFFF);
	PS.color(1,31,0xff7d7d);
	PS.color(2,31,0xe60000);
	PS.color(3,31,0x7a0202);
	PS.color(4,31,0xffdda6);
	PS.color(5,31,0xfa9e0a);
	PS.color(6,31,0x855200);
	PS.color(7,31,0xfcefa2);
	PS.color(8,31,0xffdc17);
	PS.color(9,31,0xccb806);
	PS.color(10,31,0x98fa7f);
	PS.color(11,31,0x2bcf02);
	PS.color(12,31,0x1c8501);
	PS.color(13,31,0x95b4fc);
	PS.color(14,31,0x0549e8);
	PS.color(15,31,0x014c85);
	PS.color(16,31,0xc795fc);
	PS.color(17,31,0x7907f2);
	PS.color(18,31,0x4d009e);
	PS.color(19,31,0x000000);
	PS.color(20,31,0x000000);
	PS.color(21,31,0x000000);
	PS.color(22,31,0x000000);
	PS.color(23,31,0x000000);
	PS.color(24,31,0x000000);
	PS.color(25,31,0x000000);
	PS.color(26,31,0x000000);
	PS.color(27,31,0x000000);
	PS.color(28,31,0x000000);
	PS.color(29,31,0x000000);
	PS.color(30,31,0x000000);
	PS.color(31,31,0x000000);
};

/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.touch = function( x, y, data, options ) {
	if (y < 31) { //Paints em
		PS.color( x, y, PS.CURRCOLOR );
	} else { //Selects Paint Color
		switch (x) {
			default: PS.setColor(1,1); break; //BLACK
			case 0: PS.setColor(1,5); break; //White
			case 1: PS.setColor(1,4); break; //Pink
			case 2: PS.setColor(1,3); break; //Red
			case 3: PS.setColor(1,2); break; //Crimson
			case 4: PS.setColor(2,4); break; //Peach
			case 5: PS.setColor(2,3); break; //Orange
			case 6: PS.setColor(2,2); break; //Brown
			case 7: PS.setColor(3,4); break; //L Yellow
			case 8: PS.setColor(3,3); break; //Yellow
			case 9: PS.setColor(3,2); break; //D Yellow
			case 10: PS.setColor(4,4); break; //L Green
			case 11: PS.setColor(4,3); break; //Green
			case 12: PS.setColor(4,2); break; //D Green
			case 13: PS.setColor(5,4); break; //L Blue
			case 14: PS.setColor(5,3); break; //Blue
			case 15: PS.setColor(5,2); break; //D Blue
			case 16: PS.setColor(6,4); break; //L Purple
			case 17: PS.setColor(6,3); break; //Purple
			case 18: PS.setColor(6,2); break; //D Purple
		}
	}

	PS.penDown = true;
};

/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.

	PS.penDown = false;
};

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.enter = function( x, y, data, options ) {
	if ((PS.penDown == true) && (y < 31)) {
		PS.color(x, y, PS.CURRCOLOR);
	}
};

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exit = function( x, y, data, options ) {

};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {

};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyDown = function( key, shift, ctrl, options ) {

};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyUp = function( key, shift, ctrl, options ) {
};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

PS.input = function( sensors, options ) {
};

//For some reason the setcolor function isnt working as intended so Imma just plug it directly in
PS.setColor = function(c,b) {
	//PS.debug("(" + c + ", " + b + ")\n");

	switch (c) {
		case (1): //RED
			switch (b) {
				case (1): //Black
					PS.statusText("Color: BLACK");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: CRIMSON");
					PS.CURRCOLOR = 0x7a0202;
				break;

				case (3): //Mid
					PS.statusText("Color: RED");
					PS.CURRCOLOR = 0xe60000;
				break;

				case (4): //Light
					PS.statusText("Color: PINK");
					PS.CURRCOLOR = 0xff7d7d;
				break;

				case (5): //White
					PS.statusText("Color: WHITE");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}

		break;

		case (2): //ORANGE
			switch (b) {
				case (1): //Black
					PS.statusText("Color: BLACK");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: BROWN");
					PS.CURRCOLOR = 0x855200;
				break;

				case (3): //Mid
					PS.statusText("Color: ORANGE");
					PS.CURRCOLOR = 0xfa9e0a;
				break;

				case (4): //Light
					PS.statusText("Color: PEACH");
					PS.CURRCOLOR = 0xffdda6;
				break;

				case (5): //White
					PS.statusText("Color: WHITE");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;

		case (3): //YELLOW
			switch (b) {
				case (1): //Black
					PS.statusText("Color: BLACK");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: DARK YELLOW");
					PS.CURRCOLOR = 0xccb806;
				break;

				case (3): //Mid
					PS.statusText("Color: YELLOW");
					PS.CURRCOLOR = 0xffdc17;
				break;

				case (4): //Light
					PS.statusText("Color: LIGHT YELLOW");
					PS.CURRCOLOR = 0xfcefa2;
				break;

				case (5): //White
					PS.statusText("Color: WHITE");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;

		case (4): //GREEN
			switch (b) {
				case (1): //Black
					PS.statusText("Color: BLACK");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: DARK GREEN");
					PS.CURRCOLOR = 0x1c8501;
				break;

				case (3): //Mid
					PS.statusText("Color: GREEN");
					PS.CURRCOLOR = 0x2bcf02;
				break;

				case (4): //Light
					PS.statusText("Color: LIGHT GREEN");
					PS.CURRCOLOR = 0x98fa7f;
				break;

				case (5): //White
					PS.statusText("Color: WHITE");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}	
		break;

		case (5): //BLUE
			switch (b) {
				case (1): //Black
					PS.statusText("Color: BLACK");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: DARK BLUE");
					PS.CURRCOLOR = 0x014c85;
				break;

				case (3): //Mid
					PS.statusText("Color: BLUE");
					PS.CURRCOLOR = 0x0549e8;
				break;

				case (4): //Light
					PS.statusText("Color: SKY BLUE");
					PS.CURRCOLOR = 0x95b4fc;
				break;

				case (5): //White
					PS.statusText("Color: WHITE");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;

		case (6): //PURPLE
			switch (b) {
				case (1): //Black
					PS.statusText("Color: BLACK");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: DARK VIOLET");
					PS.CURRCOLOR = 0x4d009e;
				break;

				case (3): //Mid
					PS.statusText("Color: PURPLE");
					PS.CURRCOLOR = 0x7907f2;
				break;

				case (4): //Light
					PS.statusText("Color: LAVENDER");
					PS.CURRCOLOR = 0xc795fc;
				break;

				case (5): //White
					PS.statusText("Color: WHITE");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;
	}
}

/*
PS.PAINTCOLOR = [ 0xff7d7d, 0xe60000, 0x7a0202, 
	0xfcefa2, 0xffdc17, 0xccb806, 
	0x98fa7f, 0x2bcf02, 0x1c8501, 
	0x95b4fc, 0x0549e8, 0x014c85, 
	0xc795fc, 0x7907f2, 0x4d009e,
	0xFFFFFF, 0x000000 ];

PS.CURRCOLOR = 0xe60000;*/