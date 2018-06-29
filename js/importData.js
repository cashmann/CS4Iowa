/* globals Papa,  loadDistricts, loadCsDistricts, loadGradeCSData*/



// Load data on window load
// function loadCsData() {

//   var csvUrl = 'data/DataBySchoolDistrict.csv';
//   Papa.parse(csvUrl, {

//     // Download CSV data from csvUrl
//     download: true,

//     // Use CSV header row
//     header: true,

//     // When CSV data are available...
//     complete: function(results) {
//       //console.log('CSV loaded:', results.data);

//       // results.data is an array of objects
//       // object keys are from CSV header row
//       loadDistricts(results.data);
//       loadCsDistricts(results.data);
//     }
//   });

// }

// window.addEventListener('load', loadCsData);




// Load data on window load
function loadGradeLevelData() {

  var csvUrl = 'data/gradeLevelData.csv';
 
  Papa.parse(csvUrl, {

    // Download CSV data from csvUrl
    download: true,

    // Use CSV header row
    header: true,

    // When CSV data are available...
    complete: function(gradeResults) {
      console.log('CSV loaded:', gradeResults);

      // results.data is an array of objects
      // object keys are from CSV header row
      loadGradeCSData(gradeResults.data);
    }
  });

}

window.addEventListener('load', loadGradeLevelData);