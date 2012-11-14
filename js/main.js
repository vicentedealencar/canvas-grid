require(["canvas-grid"], function (CanvasGrid) {
	var grid = [
	    ["#FF0000", "blue", "rgb(0,255,0)"],
	    ["#333", "#888", "#ddd"],
	    ["#333", "#000", "#ddd"],
	    ["#333", "#888", "#700"],
	];
	var cg = new CanvasGrid("myCanvas", grid);
});