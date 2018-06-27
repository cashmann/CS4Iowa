/**Authors: Craig Barkley , Ben Van Meter*/
/* globals Chart, , loadDistricts, , loadCsDistricts*/
'use strict';

///////////////////////////////////////////////////////////
//Pie Chart for who has and who has not submitted a response
//need to know if they responded or not. this is found in column ----Responding %-----
//0% is not submitted and any column with a value has submitted.
///////////////////////////////////////////////////////////
var respondedYes = 0;
var respondedNo = 0;

function loadDistricts(districts){
  // console.log(districts);


  for(var i = 0; i < districts.length; i++){
    var districtResponses = districts[i]['Responding %'];
    //console.log(districtResponses);
    if(districtResponses !== '0%'){
      respondedYes++;
    }else if (districtResponses === '0%'){
      respondedNo++;
    }

  }
  console.log({ respondedNo, respondedYes });
  renderPieCharts();
}

//console.log({ respondedNo, respondedYes });

function renderPieCharts(){
  new Chart(document.getElementById('doughnut-chartOne'), {
    type: 'doughnut',
    data: {
      labels: ['Survey Done', 'No Survey'],
      datasets: [
        {
          label: 'Schools that have responded to Code.org survey',
          backgroundColor: ['#56020e', '#f39030'],
          data: [respondedYes, respondedNo]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Schools that have responded to Code.org survey'
      }
    }
  });
}
//////////////////////////////////////////////////////////////////////////////////////////
//Pie chart for those who have answered what percent is teaching and what percent is not.
//of those that did submit ---------- Responding % --- === true.
//what percent of those are teaching - % Teaches CS ----===true.
/////////////////////////////////////////////////////////////////////////////////////////
//var respondedYes = 0;
var teachesYes = 0;
var teachesNo = 0;

function loadCsDistricts(districts){
  // console.log(districts);


  for(var i = 0; i < districts.length; i++){
    var districtResponses = districts[i]['Responding %'];
    var teachesCS = districts[i]['% Teaches CS'];
    //console.log(districtResponses);
    if(districtResponses !== '0%' && teachesCS !== '0%'){
      teachesYes++;
    }else if (districtResponses !== '0%' && teachesCS === '0%'){
      teachesNo++;
    }

  }
  console.log({ teachesYes, teachesNo });
  renderPieChartsTwo();
}

//console.log({ respondedNo, respondedYes });

function renderPieChartsTwo(){
  new Chart(document.getElementById('doughnut-chartTwo'), {
    type: 'doughnut',
    data: {
      labels: ['CS programs Yes', 'CS program No'],
      datasets: [
        {
          label: 'Schools that teach CS and have Responded',
          backgroundColor: ['#56020e', '#f39030'],
          data: [teachesYes, teachesNo]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Percentage of Computer Science in Iowa School Districts'
      }
    }
  });
}