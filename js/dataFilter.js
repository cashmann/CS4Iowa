/* Globals Papa */

/*function loadDistricts(districts) {
  var dataEl = document.querySelector('#teachesCs');
  for(var i = 0; i<districts.length; i++){
    var district = districts[i];
    var optionEl = document.createElement('option');
    if(district['% Teaches CS']!== '0%'){
      optionEl.value = 'No';
    } else {
      optionEl.value = 'Yes';
    }
    dataEl.appendChild(optionEl);
  }
}*/


function filterByTeaching(districts){
  var selectYesNo = document.querySelector('#teachesCs');
  var selectedDistricts = [];
  if(selectYesNo.value === 'Yes'){
    for(var i=0; i<districts.length; i++){
      var district = districts[i];
      if(district['% Teaches CS']!== "0%"){
        selectedDistricts.push(district);
      }
    }
  } else if (selectYesNo.value === 'No'){
      for(var i=0; i<districts.length; i++){
        var district = districts[i];
        if(district['% Teaches CS']=== '0%'){
          selectedDistricts.push(district);
      }
    }
  } else {
    selectedDistricts = districts;
  }
  console.log(selectedDistricts);
  return selectedDistricts;

}

function filterByCounty(districts){
  var defineCounty = document.querySelector('#county');
  var selectedDistricts = districts;
  if(defineCounty.value){
    var selectedCounty = defineCounty.value.toUpperCase().trim();
    var filteredDistricts = [];
    for(var i=0; i<selectedDistricts.length; i++){
      var district = selectedDistricts[i];
      if(selectedDistricts[i]['Counties'].includes(selectedCounty)){
        filteredDistricts.push(district);
      }
    }
    selectedDistricts = filteredDistricts;
  }
  console.log(selectedDistricts);
  return selectedDistricts;
}

var dataBySchoolDistrict;
function loadData(){
  var csvUrl = 'data/DataBySchoolDistrict.csv';
  Papa.parse(csvUrl, {
    download: true,
    header: true,
    complete: function(results){
      console.log('CSV loaded: ', results.data);
      dataBySchoolDistrict = results.data;
    }
  });
}

function filterByData(){
  if(dataBySchoolDistrict){
    var filter1 = filterByTeaching(dataBySchoolDistrict);
    var filter2 = filterByCounty(filter1);
  }
}

window.addEventListener('load', loadData);
var selectors = document.querySelectorAll('.filter');
for(var i=0; i<selectors.length; i++){
  selectors[i].addEventListener('change', filterByData);
}
