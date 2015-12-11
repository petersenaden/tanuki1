function createTetrisGrid() {
	//0 will correspond to empty, else will be full
	var width = canvas.width / 100;
	var height = canvas.height / 100;
	tetrisGrid = createMatrix(width, height, 0);
	//this should be fixed later. shouldn't be calling
	//globals from another file in here.
}

function createMatrix( rows, cols, defaultValue)
{
	var arr = [];
	// Creates all lines:
	for(var i=0; i < rows; i++){
		// Creates an empty line
		arr.push([]);
		// Adds cols to the empty line:
		arr[i].push( new Array(cols));
		for(var j=0; j < cols; j++){
			// Initializes:
			arr[i][j] = defaultValue;
		}
	}
	return arr;
}

function clearGrid() {
	context.beginPath();
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function plotMatrix() {
	for (var i = 0; i < canvas.width / 100; i++) {
		for (var j = 0; j < canvas.height / 100; j++) {
			if (tetrisGrid[i][j] == 1) {
				drawBlock(i*100, j*100);
			}
		}
	}
}

function drawBlock(xcoord, ycoord)
{
	var blockWidth = 100;
	var blockHeight = 100;
	context.rect(xcoord, ycoord, blockWidth, blockHeight);
	context.stroke(); //Actually draws what has been defined
}