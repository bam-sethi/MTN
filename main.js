//start with line L

// Get the program to work for a single line before trying to tackle multiple lines.
// Diagram how the program works by drawing out the subway lines and their stops and intersection.
// The subway lines are keys in an object, while the values are an array of all the stops on each line.
// The key to the lab is the intersection of the lines at Union Square.
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated).

console.log('linked');
  window.onload = function(){
  function Subway(lineL){
    this.lineL = ['1st','3rd','Union', '6th','8th'];
  };

var subway1 = new Subway;
console.log(subway1.lineL);

var selectOne = document.getElementById('Line');
console.log(selectOne)
selectOne.addEventListener('change', function(){
  console.log('hi')
  });


var selectFrom = document.getElementById('From');
console.log(selectFrom)
selectFrom.addEventListener('change', function(){
  console.log('hi')


  });

//function if u go from stop 3 to stop 8 
//how many stops will that be?
//loop through lineL's array and see which selection of the array it matches
//then subtract the index of 'from' - the index of two


// this.lineL = ['1st','3rd','Union', '6th','8th'];

  function countNumberOfStops (initStop, finalStop) {
// where is initStop in the line? where is finalstop in the line? 
//where from and where to stored in variables
    var fromStop =  document.getElementById('From').value
    var toStop = document.getElementById('To').value

    var fromStopIndex = subway1.lineL.indexOf('fromStop');
    var toStopIndex = subway1.lineL.indexOf('toStop');


  }


 
}





