require(["canvas-grid"], function (canvasWatch) {
    grid = [
	    ["black", "black", "black"],
	    ["black", "black", "black"],
	    ["black", "black", "black"],
	];
	canvasWatch("myCanvas", grid);

	setInterval(function () {
	    for (var i = 0; i < grid.length; i++) {
	        for (var j = 0; j < grid[i].length; j++) {
	            grid[i][j] = "black";
	        }
	    }
	    var x = ((Math.random() * 10) % grid.length).toFixed();
	    var y = ((Math.random() * 10) % grid[x].length).toFixed();
	    grid[x][y] = "red";
	},1000);
});