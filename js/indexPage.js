/**Authors: Craig Barkley , Ben Van Meter*/
/* Globals Papa Chart */
'use strict';

// Load list of states into <select id="states">
// function loadDistricts(districts) {
//     var districtsEl = document.getElementById('districts');
//     for(var i = 0; i < districts.length; i++) {
//       var district = districts[i];
  
//       var optionEl = document.createElement('option');
//       optionEl.value = district['% Teaches CS'];
//       optionEl.innerText = district['Schools in Dist'];
//       districtsEl.appendChild(optionEl);
//     }


///////////////////////////////////////////////////////////
//Pie Chart for who has and who has not submitted a response
//need to know if they responded or not. this is found in column ----Responding %-----
//0% is not submitted and any column with a value has submitted.
///////////////////////////////////////////////////////////

  function loadDistricts(districts){
    var canvas = document.getElementById('resultsCanvas');
  
    var response = [];

    for(var i = 0; i < districts.length; i++){
        var district = districts[i];
                            district['Responding % '];
                            district['% Teaches CS'];

  
    }







// And for a doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};

//////////////////////////////////////////////////////////////////////////////////////////
//Pie chart for those who have answered what percent is teaching and what percent is not. 
//of those that did submit ---------- Responding % --- === true.
//what percent of those are teaching - % Teaches CS ----===true.
//////////////////////////////////////////////////////////////////////////////////////////

function showPieChart(){
    var canvas = document.getElementById('resultsCanvas');
  
  
    for(var i = 0; i < districts.length; i++){
      labels[i] = Placeholder.all[i].name;
      voteCounts[i] = Placeholder.all[i].voteCount;
      showCounts[i] = Placeholder.all[i].showCount;
  
    }







// And for a doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};