var h = 3,
	w = 4
	grid = [];

init();

canvasGrid("myCanvas", grid);

setInterval(function () {
    clear();

    var x = getRandom(0, h-1);
    var y = getRandom(0, w-1);
    grid[x][y] = "red";
},1000);

function init(){
	for (var x = 0; x < h; x++) {
		grid.push([]);
		for (var y = 0; y < w; y++) {
			grid[x].push('black');
		};
	};
}
function clear(){
	for (var x = 0; x < h; x++) {
		for (var y = 0; y < w; y++) {
			grid[x][y] = 'black';
		};
	};
}
function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}