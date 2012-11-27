var h = 120,
	w = 53,
	bgColor = 'green',
	playerColor = 'purple',
	playerX = 60,
	playerY = 26,
	routes = {
		lIn: [
			{dirX: 1, dirY: 0, dist: 5},
			{dirX: 0, dirY: 1, dist: 20},
		],
	},
	qbHasBall = true,
	grid = [];

for (var x = 0; x < h; x++) {
	grid.push([]);
	for (var y = 0; y < w; y++) {
		grid[x].push(bgColor);
	}
}

canvasGrid("myCanvas", grid);

setInterval(function () {
	if(qbHasBall)
		followRoute(routes.lIn);
	//TODO ELSES
},100);

function followRoute (route) {
	var randomWalk = true;
	grid[playerX][playerY] = bgColor;
	for (var i = 0; i < route.length; i++) {
		if(route[i].dist < 1) continue;

		playerX += route[i].dirX;
		playerY += route[i].dirY;
		route[i].dist--;
		randomWalk = false;
		break;
	};
	if(randomWalk) {
		playerX += getRandom(playerX == 0? 0 : -1,playerX == h-1? 0 : 1);
		playerY += getRandom(playerY == 0? 0 : -1,playerY == w-1? 0 : 1);
	}
	grid[playerX][playerY] = playerColor;
}

function getRandom(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}