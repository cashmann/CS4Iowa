/**Authors: Craig Barkley , Ben Van Meter*/
/* globals Chart, , loadDistricts, , loadCsDistricts, loadGradeCSData*/
'use strict';

///////////////////////////////////////////////////////////
//Pie Chart for who has and who has not submitted a response
//need to know if they responded or not. this is found in column ----Responding %-----
//0% is not submitted and any column with a value has submitted.
///////////////////////////////////////////////////////////
// var respondedYes = 0;
// var respondedNo = 0;

// function loadDistricts(districts){
//   // console.log(districts);


//   for(var i = 0; i < districts.length; i++){
//     var districtResponses = districts[i]['Responding %'];
//     //console.log(districtResponses);
//     if(districtResponses !== '0%'){
//       respondedYes++;
//     }else if (districtResponses === '0%'){
//       respondedNo++;
//     }

//   }
//   console.log({ respondedNo, respondedYes });
//   renderPieCharts();
// }

// //console.log({ respondedNo, respondedYes });

// function renderPieCharts(){
//   new Chart(document.getElementById('doughnut-chartOne'), {
//     type: 'doughnut',
//     data: {
//       labels: ['Survey Done', 'No Survey Submitted'],
//       datasets: [
//         {
//           label: 'Schools that have responded to Code.org survey',
//           backgroundColor: ['#56020e', '#f39030'],
//           data: [respondedYes, respondedNo]
//         }
//       ]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'Percentage of District Response'
//       }
//     }
//   });
// }
// //////////////////////////////////////////////////////////////////////////////////////////
// //Pie chart for those who have answered what percent is teaching and what percent is not.
// //of those that did submit ---------- Responding % --- === true.
// //what percent of those are teaching - % Teaches CS ----===true.
// /////////////////////////////////////////////////////////////////////////////////////////
// var teachesYes = 0;
// var teachesNo = 0;

// function loadCsDistricts(districts){
//   // console.log(districts);


//   for(var i = 0; i < districts.length; i++){
//     var districtResponses = districts[i]['Responding %'];
//     var teachesCS = districts[i]['% Teaches CS'];
//     //console.log(districtResponses);
//     if(districtResponses !== '0%' && teachesCS !== '0%'){
//       teachesYes++;
//     }else if (districtResponses !== '0%' && teachesCS === '0%'){
//       teachesNo++;
//     }

//   }
//   console.log({ teachesYes, teachesNo });
//   renderPieChartsTwo(yes, no);
// }

// //console.log({ respondedNo, respondedYes });

// function renderPieChartsTwo(){
//   new Chart(document.getElementById('doughnut-chartTwo'), {
//     type: 'doughnut',
//     data: {
//       labels: ['CS programs Yes', 'CS program No'],
//       datasets: [
//         {
//           label: 'Schools that teach CS and have Responded',
//           backgroundColor: ['#56020e', '#f39030'],
//           data: [teachesYes, teachesNo]
//         }
//       ]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'Percentage of Computer Science in Iowa School Districts'
//       }
//     }
//   });
// }



/////////////////////////////////////////////////////////////////////////////////////////
//Third pie chart
////////////////////////////////////////////////////////////////////////////////////////



function loadGradeCSData(csGradeLevel){
  filterGradeCSData(csGradeLevel);
}


function filterGradeCSData(csGradeLevel){
  console.log(csGradeLevel);
  var notResponded = 0;
  var inconsistentResponse = 0;
  var teachesYes = 0;
  var teachesNo = 0;

  for(var i = 0; i < csGradeLevel.length; i++){
    var responseToSurvey = csGradeLevel[i]['Teaches CS?'];

    if (responseToSurvey === ''){
      notResponded++;
      
    }else if (responseToSurvey === 'Inconsistent'){
      inconsistentResponse++;
    }else if (responseToSurvey === 'Yes'){
      teachesYes++;
    }else if (responseToSurvey === 'No'){
      teachesNo++;
    }
  }

  console.log({ notResponded, inconsistentResponse, teachesYes, teachesNo });
  renderPieChartsThree(notResponded, inconsistentResponse, teachesYes, teachesNo);
}


function renderPieChartsThree(NoRes, inconRes, teachY, teachN){
  new Chart(document.getElementById('doughnut-chartThree'), {
    type: 'doughnut',
    data: {
      labels: ['No Response from Schools', 'Inconsistent Reporting', 'Schools That Teach CS', 'Schools that don\'t Teach'],
      datasets: [
        {
          label: 'Schools Survey Responses and CS programs in Iowa.',
          backgroundColor: ['#2e86ab', '#f18f01','#c73e1d','#a23b72'],
          data: [NoRes, inconRes, teachY, teachN]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Grade level CS programs throughout Iowa'
      }
    }
  });
}

function handleSubmit(event){
  event.preventDefault();
  var grade = event.target.grade.value;
  console.log(grade);
}

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);