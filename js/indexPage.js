/**Authors: Craig Barkley , Ben Van Meter*/
/* globals Chart, , loadDistricts*/
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
      labels: ['Have Responded', 'Have not responded'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ['#56020e', '#f39030'],
          data: [respondedYes, respondedNo]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Percentage of Districts that have update CS Course'
      }
    }
  });
}
//////////////////////////////////////////////////////////////////////////////////////////
//Pie chart for those who have answered what percent is teaching and what percent is not.
//of those that did submit ---------- Responding % --- === true.
//what percent of those are teaching - % Teaches CS ----===true.
/////////////////////////////////////////////////////////////////////////////////////////
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
  new Chart(document.getElementById('doughnut-chartTwo'), {
    type: 'doughnut',
    data: {
      labels: ['Have Responded', 'Have not responded'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: ['#56020e', '#f39030'],
          data: [respondedYes, respondedNo]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Percentage of Districts that have update CS Course'
      }
    }
  });
}