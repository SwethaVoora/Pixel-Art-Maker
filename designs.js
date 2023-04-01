
var counter = 0;    //Global Variable to check the submit button
var color = document.querySelector('#colorPicker');    // Select color input
var height = document.querySelector('#inputHeight');    // Select size input
var width = document.querySelector('#inputWidth');    // Select size input

//Adding EventListeners for each input
color.addEventListener('change', function updateColor(e){
  color.value = e.target.value;
  console.log(color.value);
});

height.addEventListener('change', function updateHeight(e){
  height.value = e.target.value;
  console.log(height.value);
});

width.addEventListener('change', function updateWidth(e){
  width.value = e.target.value;
  console.log(width.value);
});

/**
* Creating the grid
* @param {eventObject} e
* event is the parameter
* based on event's values
* the grid is created
**/
function makeGrid(e) {
    e.preventDefault();
    let grid = document.body.querySelector('#pixelCanvas');
    grid.innerHTML = null;
      for(var i = 0 ; i < height.value ; i++){
        let row = grid.insertRow(i);
        for(var j = 0 ; j < width.value ; j++){
          let col = row.insertCell(j);
        }
      }
      let listOfCells = grid.querySelectorAll('.cell');

      listOfCells.forEach(function resetCell(cell){
          cell.style.backgroundColor = '#ffffff';
      });
     document.body.appendChild(grid);
}


// When size is submitted by the user, call makeGrid()
//document.querySelectorAll('input')[2].addEventListener('click', makeGrid);
var sizePicker = document.getElementById('sizePicker')
sizePicker.addEventListener('submit', makeGrid);

let tabular = document.querySelector('#pixelCanvas');

//Filling the desired color in the cells
tabular.addEventListener('click',function fillColor(){
  event.target.setAttribute('class','cell');
  event.target.style.backgroundColor = color.value;
});
