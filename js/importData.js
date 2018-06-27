/* globals Papa */



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
      console.log('CSV loaded:', results.data);

      // results.data is an array of objects
      // object keys are from CSV header row
      loadDistricts(results.data);
    }
  });

}

window.addEventListener('load', loadCsData);
