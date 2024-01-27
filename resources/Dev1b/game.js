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

	PS.debug( "PS.init() called\n" );
	
	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

	PS.gridSize( 32, 32);

	PS.statusText("Welcome! Press a key 1-5, then a key 6-0.");
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
	// Uncomment the following code line
	// to inspect x/y parameters:

	PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.
	PS.color( x, y, PS.CURRCOLOR );
    //PS.AudioPlay("fx_click");

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
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.

	if (PS.penDown == true) {
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
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
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
	// Uncomment the following code line to inspect first three parameters:
	PS.debug(key);

	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );
	switch (key) {
		
		case 48:
			PS.brightVal = 5; //Black
		break;	
		
		//Sets color value
		case 49:
			PS.colVal = 1; //Red
		break;

		case 50:
			PS.colVal = 2; //Yelw
		break;

		case 51:
			PS.colVal = 3; //Gren
		break;

		case 52:
			PS.colVal = 4; //Blue
		break;

		case 53:
			PS.colVal = 5; //Purp
		break;

		case 54:
			PS.brightVal = 1; //White
		break;

		case 55:
			PS.brightVal = 2; //Light
		break;

		case 56:
			PS.brightVal = 3; //Normal
		break;

		case 57:
			PS.brightVal = 4; //Dark
		break;

		
	}

	//PS.debug(PS.colVal);
	//setColor(PS.colVal,PS.brightVal);
	//Sets color


	switch (PS.colVal) {
		case (1): //RED
			switch (PS.brightVal) {
				case (1): //Black
					PS.statusText("Color: RED Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: RED Brightness: LOW");
					PS.CURRCOLOR = 0x7a0202;
				break;

				case (3): //Mid
					PS.statusText("Color: RED Brightness: MED");
					PS.CURRCOLOR = 0xe60000;
				break;

				case (4): //Light
					PS.statusText("Color: RED Brightness: HIGH");
					PS.CURRCOLOR = 0xff7d7d;
				break;

				case (5): //White
					PS.statusText("Color: RED Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}

		break;

		case (2): //YELLOW
			switch (PS.brightVal) {
				case (1): //Black
					PS.statusText("Color: YELLOW Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: YELLOW Brightness: LOW");
					PS.CURRCOLOR = 0xccb806;
				break;

				case (3): //Mid
					PS.statusText("Color: YELLOW Brightness: MED");
					PS.CURRCOLOR = 0xffdc17;
				break;

				case (4): //Light
					PS.statusText("Color: YELLOW Brightness: HIGH");
					PS.CURRCOLOR = 0xfcefa2;
				break;

				case (5): //White
					PS.statusText("Color: YELLOW Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;

		case (3): //GREEN
			switch (PS.brightVal) {
				case (1): //Black
					PS.statusText("Color: GREEN Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: GREEN Brightness: LOW");
					PS.CURRCOLOR = 0x1c8501;
				break;

				case (3): //Mid
					PS.statusText("Color: GREEN Brightness: MED");
					PS.CURRCOLOR = 0x2bcf02;
				break;

				case (4): //Light
					PS.statusText("Color: GREEN Brightness: HIGH");
					PS.CURRCOLOR = 0x98fa7f;
				break;

				case (5): //White
					PS.statusText("Color: GREEN Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;

		case (4): //BLUE
			switch (PS.brightVal) {
				case (1): //Black
					PS.statusText("Color: BLUE Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: BLUE Brightness: LOW");
					PS.CURRCOLOR = 0x014c85;
				break;

				case (3): //Mid
					PS.statusText("Color: BLUE Brightness: MED");
					PS.CURRCOLOR = 0x0549e8;
				break;

				case (4): //Light
					PS.statusText("Color: BLUE Brightness: HIGH");
					PS.CURRCOLOR = 0x95b4fc;
				break;

				case (5): //White
					PS.statusText("Color: BLUE Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}	
		break;

		case (5): //PURPLE
			switch (PS.brightVal) {
				case (1): //Black
					PS.statusText("Color: PURPLE Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: PURPLE Brightness: LOW");
					PS.CURRCOLOR = 0x4d009e;
				break;

				case (3): //Mid
					PS.statusText("Color: PURPLE Brightness: MED");
					PS.CURRCOLOR = 0x7907f2;
				break;

				case (4): //Light
					PS.statusText("Color: PURPLE Brightness: HIGH");
					PS.CURRCOLOR = 0xc795fc;
				break;

				case (5): //White
					PS.statusText("Color: PURPLE Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;
	}
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
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
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
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};

//For some reason the setcolor function isnt working as intended so Imma just plug it directly in
PS.setColor = function(c,b) {
	PS.debug( toString(c).concat(toString(b)) );

	switch (c) {
		case (1): //RED
			switch (b) {
				case (1): //Black
					PS.statusText("Color: RED Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: RED Brightness: LOW");
					PS.CURRCOLOR = 0x7a0202;
				break;

				case (3): //Mid
					PS.statusText("Color: RED Brightness: MED");
					PS.CURRCOLOR = 0xe60000;
				break;

				case (4): //Light
					PS.statusText("Color: RED Brightness: HIGH");
					PS.CURRCOLOR = 0xff7d7d;
				break;

				case (5): //White
					PS.statusText("Color: RED Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}

		break;

		case (2): //YELLOW
			switch (b) {
				case (1): //Black
					PS.statusText("Color: YELLOW Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: YELLOW Brightness: LOW");
					PS.CURRCOLOR = 0xccb806;
				break;

				case (3): //Mid
					PS.statusText("Color: YELLOW Brightness: MED");
					PS.CURRCOLOR = 0xffdc17;
				break;

				case (4): //Light
					PS.statusText("Color: YELLOW Brightness: HIGH");
					PS.CURRCOLOR = 0xfcefa2;
				break;

				case (5): //White
					PS.statusText("Color: YELLOW Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;

		case (3): //GREEN
			switch (b) {
				case (1): //Black
					PS.statusText("Color: GREEN Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: GREEN Brightness: LOW");
					PS.CURRCOLOR = 0x1c8501;
				break;

				case (3): //Mid
					PS.statusText("Color: GREEN Brightness: MED");
					PS.CURRCOLOR = 0x2bcf02;
				break;

				case (4): //Light
					PS.statusText("Color: GREEN Brightness: HIGH");
					PS.CURRCOLOR = 0x98fa7f;
				break;

				case (5): //White
					PS.statusText("Color: GREEN Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}
		break;

		case (4): //BLUE
			switch (b) {
				case (1): //Black
					PS.statusText("Color: BLUE Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: BLUE Brightness: LOW");
					PS.CURRCOLOR = 0x014c85;
				break;

				case (3): //Mid
					PS.statusText("Color: BLUE Brightness: MED");
					PS.CURRCOLOR = 0x0549e8;
				break;

				case (4): //Light
					PS.statusText("Color: BLUE Brightness: HIGH");
					PS.CURRCOLOR = 0x95b4fc;
				break;

				case (5): //White
					PS.statusText("Color: BLUE Brightness: MAX");
					PS.CURRCOLOR = 0xFFFFFF;
				break;
			}	
		break;

		case (5): //PURPLE
			switch (b) {
				case (1): //Black
					PS.statusText("Color: PURPLE Brightness: MIN");
					PS.CURRCOLOR = 0x000000;
				break;

				case (2): //Dark
					PS.statusText("Color: PURPLE Brightness: LOW");
					PS.CURRCOLOR = 0x4d009e;
				break;

				case (3): //Mid
					PS.statusText("Color: PURPLE Brightness: MED");
					PS.CURRCOLOR = 0x7907f2;
				break;

				case (4): //Light
					PS.statusText("Color: PURPLE Brightness: HIGH");
					PS.CURRCOLOR = 0xc795fc;
				break;

				case (5): //White
					PS.statusText("Color: PURPLE Brightness: MAX");
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