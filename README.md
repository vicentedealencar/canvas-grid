# Canvas Grid

Canvas Grid is what you were looking for if you dont like messing with UI very much. With it you can mess around with your data matrix and let Canvas Grid handle the UI representation of it.

## Demos

[First Demo](http://vicentedealencar.github.com/canvas-grid/demo-1.html): random cell is red

[Second Demo](http://vicentedealencar.github.com/canvas-grid/demo-2.html): cell movving in random directions

## Getting Started

Include Canvas Grid and [Watch.js](https://github.com/melanke/Watch.JS):

```html
	<script src="js/watch.js"></script>
	<script src="js/canvas-grid.js"></script>
```

Have a canvas in your html:

```html
	<canvas id="myCanvas" width="400" height="500"></canvas>
```

Then you initialize your data matrix with colors:

```js
var grid = [
	['black', 'grey', 'blue'],
	['#f00', '#0f0', '#00f'],
	['rgb(0,255,255)', 'rgb(255,0,255)', 'rgb(255,255,0)'],
];
```

Then wire it up:

```js
canvasGrid("myCanvas", grid);
```

Now you can update your matrix, and Canvas Grid will update your canvas:

```js
grid[0][0] = 'purple';
```

## Contributing

Feel free to send pull requests!

## About

This project was developed with love by [Vicente de Alencar](http://vicentedealencar.com.br)