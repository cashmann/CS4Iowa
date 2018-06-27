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
  return filter2;
}

function renderAll() {
  var DistrictData = filterByData();
  var tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
 
  var td = document.createElement ('td');
  

  for( var i = 0; i<DistrictData.length; i++) {
      var tr = document.createElement ('tr');
      td = document.createElement ('td');
      td.textContent = DistrictData[i]['School District Name'];
      tr.appendChild (td);
      td = document.createElement('td');
      td.textContent = DistrictData[i]['% Teaches Cs'];
      tr.appendChild(td);

      td = document.createElement('td');
      td.textContent = DistrictData[i]['Schools in Dist'];
      tr.appendChild(td);

      td = document.createElement('td');
      td.textContent = DistrictData[i]['District Student Population'];
      tr.appendChild(td);

      td = document.createElement('td');
      td.textContent = DistrictData[i]['Responding %'];
      tr.appendChild(td);
      td = document.createElement('td');
      td.textContent = DistrictData[i]['Counties'];
      tr.appendChild(td);

      tbody.appendChild(tr);
  }

}

window.addEventListener('load', loadData);
var selectors = document.querySelectorAll('.filter');
for(var i=0; i<selectors.length; i++){
  selectors[i].addEventListener('change', renderAll);
}
