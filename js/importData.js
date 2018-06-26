/* globals Papa */

// Load list of states into <select id="states">
function loadDistricts(districts) {
  var districtsEl = document.getElementById('districts');
  for(var i = 0; i < districts.length; i++) {
    var districts = districts[i];

    var optionEl = document.createElement('option');
    optionEl.value = districts['%Teaching'];
    optionEl.innerText = districts['Schools in Dist'];
    districtsEl.appendChild(optionEl);
  }
}

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
      loadCsData(results.data);
    }
  });

}

window.addEventListener('load', loadData);
