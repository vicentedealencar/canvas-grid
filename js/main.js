require(["canvas-grid"], function (CanvasGrid) {
	window.grid = [
	    ["#FF0000", "blue", "rgb(0,255,0)"],
	    ["#333", "#888", "#ddd"],
	    ["#333", "#000", "#ddd"],
	    ["#333", "#888", "#700"],
	];
	var cg = new CanvasGrid("myCanvas", grid);
});