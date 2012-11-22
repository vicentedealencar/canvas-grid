var h = 120,
	w = 53,
	bgColor = 'green',
	playerColor = 'purple',
	playerX = 0,
	playerY = 0,
	grid = [];

init();

canvasGrid("myCanvas", grid);

setInterval(function () {
	grid[playerX][playerY] = bgColor;
	playerX += getRandom(playerX == 0? 0 : -1,playerX == h-1? 0 : 1);
	playerY += getRandom(playerY == 0? 0 : -1,playerY == w-1? 0 : 1);
	grid[playerX][playerY] = playerColor;
},50);

function init(){
	for (var x = 0; x < h; x++) {
		grid.push([]);
		for (var y = 0; y < w; y++) {
			grid[x].push(bgColor);
		};
	};
}
function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}