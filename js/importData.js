/* globals Papa,  loadDistricts, loadCsDistricts*/



// Load data on window load
function loadCsData() {

  var csvUrl = 'data/DataBySchoolDistrict.csv';
  Papa.parse(csvUrl, {

    // Download CSV data from csvUrl
    download: true,

    // Use CSV header row
    header: true,

    // When CSV data are available...
    complete: function(results) {
      //console.log('CSV loaded:', results.data);

      // results.data is an array of objects
      // object keys are from CSV header row
      loadDistricts(results.data);
      loadCsDistricts(results.data);
    }
  });

}

window.addEventListener('load', loadCsData);




// Load data on window load
function loadGradeLevelData() {

  var csvUrl = 'data/20180625 Iowa_school_response_rate_data.csv';
 
  Papa.parse(csvUrl, {

    // Download CSV data from csvUrl
    download: true,

    // Use CSV header row
    header: true,

    // When CSV data are available...
    complete: function(results) {
      //console.log('CSV loaded:', results.data);

      // results.data is an array of objects
      // object keys are from CSV header row
      loadGradeCSData(results.data);
    }
  });

}

window.addEventListener('load', loadGradeLevelData);