// Convention: cube.js Cube objects are referred to as cubeJsCube. ERNO.Cube objects are denoted simply as cube.

getCubeletColorMaps = function(cube) {
	// On the rendered cube, which color should be on each face?
	var positionColorMapping = {"F":W, "B":Y, "L":G, "R":B, "U":O, "D":R}
	var rc = cube.cubeJsCube.asString().split('').map(function(pos) { return positionColorMapping[pos]; });

	/* 
		Cube strings from Cube.js follow a convention where a solved cube is represented as    "UUUUUUUUUR...F...D...L...B...". This simply maps the cube string to a cubelet color mapping ERNO.Cube can use to render the cube.
	*/
	return [

		//  Front slice

		[ rc[18], rc[6],  ,  , rc[38],   ],    [ rc[19], rc[7],  ,  ,  ,   ],    [ rc[20], rc[8], rc[9],  ,  ,   ],
		[ rc[21],  ,  ,  , rc[41],   ],    [ rc[22],  ,  ,  ,  ,   ],    [ rc[23],  , rc[12],  ,  ,   ],
		[ rc[24],  ,  , rc[27], rc[44],   ],    [ rc[25],  ,  , rc[28],  ,   ],    [ rc[26],  , rc[15], rc[29],  ,   ],

		//  Standing slice

		[  , rc[3],  ,  , rc[37],   ],    [  , rc[4],  ,  ,  ,   ],    [  , rc[5], rc[10],  ,  ,   ],
		[  ,  ,  ,  , rc[40],   ],    [  ,  ,  ,  ,  ,   ],    [  ,  , rc[13],  ,  ,   ],
		[  ,  ,  , rc[30], rc[43],   ],    [  ,  ,  , rc[31],  ,   ],    [  ,  , rc[16], rc[32],  ,   ],
		
		//  Back slice

		[  , rc[0],  ,  , rc[36], rc[47] ],    [  , rc[1],  ,  ,  , rc[46] ],    [  , rc[2], rc[11],  ,  , rc[45] ],
		[  ,  ,  ,  , rc[39], rc[50] ],    [  ,  ,  ,  ,  , rc[49] ],    [  ,  , rc[14],  ,  , rc[48] ],
		[  ,  ,  , rc[33], rc[42], rc[53] ],    [  ,  ,  , rc[34],  , rc[52] ],    [  ,  , rc[17], rc[35],  , rc[51] ]

	]
}

solve = function(cube) {

	var cubeJsCube = cube.cubeJsCube;

	if (cubeJsCube.isSolved())
		return;

	// The directions to solve the given cube (e.g. ["F", "U'", "D2"])
	var solveDirections = cubeJsCube.solve().split(" ");

	// Given a direction, adds the appropriate twist(s) to the cube's twist queue.
	turn = function(direction) {
		var faceToTurn = direction.charAt(0).toLowerCase();
	
		var isClockwiseTurn        = direction.length === 1;
		var isCounterClockwiseTurn = direction.endsWith("'");
		var isDoubleTurn           = direction.endsWith("2");

		if (isClockwiseTurn) {
			cube.twistQueue.add(new ERNO.Twist(faceToTurn, -90));
		}
		else if (isCounterClockwiseTurn) {
			cube.twistQueue.add(new ERNO.Twist(faceToTurn, 90));
		}
		else if (isDoubleTurn) {
			cube.twistQueue.add(new ERNO.Twist(faceToTurn, 180));
		}
	}

    solveDirections.forEach(turn);
}