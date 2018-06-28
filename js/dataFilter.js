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
      if(district['% Teaches CS']!== '0%'){
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

function filterBySchoolsInDist(districts){
  var defineInDist = document.querySelector('#inDist');
  var selectedDistricts = districts;
  if(defineInDist.value){
    var schoolNumber = defineInDist.value;
    var filteredDistricts = [];
    if(schoolNumber === '11+'){
      for(var i=0; i<selectedDistricts.length; i++){
        var district = selectedDistricts[i];
        if(Number(district['Schools in Dist'])>=11){
          filteredDistricts.push(district);
        }
      }
    } else if(schoolNumber === '6-10'){
      for(var i=0; i<selectedDistricts.length; i++){
        var district = selectedDistricts[i];
        if(6<=Number(district['Schools in Dist']) && Number(district['Schools in Dist'])<=10){
          filteredDistricts.push(district);
        }
      }
    } else{
      for(var i=0; i<selectedDistricts.length; i++){
        var district = selectedDistricts[i];
        if(district['Schools in Dist'] === schoolNumber){
          filteredDistricts.push(district);
        }
      }
    } selectedDistricts = filteredDistricts;
    return selectedDistricts;
  } else {
    return selectedDistricts;
  }
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
    var filter3 = filterBySchoolsInDist(filter2);
  }
  return filter3;
}

function renderAll() {
  var DistrictData = filterByData();
  var tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';


  for( var i = 0; i<DistrictData.length; i++) {
    var tr = document.createElement ('tr');
    var td1 = document.createElement ('td');
    td1.textContent = DistrictData[i]['School District Name'];
    tr.appendChild (td1);

    var td2 = document.createElement('td');
    td2.textContent = DistrictData[i]['% Teaches CS'];
    tr.appendChild(td2);

    var td3 = document.createElement('td');
    td3.textContent = DistrictData[i]['Schools in Dist'];
    tr.appendChild(td3);

    var td4 = document.createElement('td');
    td4.textContent = DistrictData[i]['District Student Population'];
    tr.appendChild(td4);

    var td5 = document.createElement('td');
    td5.textContent = DistrictData[i]['Responding %'];
    tr.appendChild(td5);

    var td6 = document.createElement('td');
    td6.textContent = DistrictData[i]['Counties'];
    tr.appendChild(td6);

    tbody.appendChild(tr);
  }
  renderChart(DistrictData);
}

//TAYLOR
function renderChart(filteredData){
  var canvasContainer = document.querySelector('aside');
  canvasContainer.innerHTML = '';
  var canvas = document.createElement('canvas');
  canvasContainer.appendChild(canvas);
  canvas.style.display = 'block';
  var labels = [];
  var perTeachesCs = [];
  var numOfSchools = [];
  var districtPops = [];
  var perResponded = [];
  var scatterData = [];
  for (var i = 0; i < filteredData.length; i++) {
    var teachesCsNum = Number(filteredData[i]['% Teaches CS'].slice(0, -1));
    var respondedNum = Number(filteredData[i]['Responding %'].slice(0, -1));
    labels[i] = filteredData[i]['School District Name'];
    perTeachesCs[i] = teachesCsNum;
    numOfSchools[i] = filteredData[i]['Schools in Dist'];
    districtPops[i] = filteredData[i]['District Student Population'];
    perResponded[i] = respondedNum;

    scatterData[i] = {
      x: numOfSchools[i],
      y: perTeachesCs[i]
    };
  }

  var ctx = canvas.getContext('2d');

  var filterBarchart = new Chart(ctx, {
    type: 'scatter',
    data: {
      labels: labels,
      datasets: [{
        label: '% That Teaches Computer Science',
        backgroundColor: 'blue',
        data: scatterData
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          ticks:{
            beginAtZero: true,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]

      },
      title: {
        display: true,
        text: 'District Data'


      }
    }
  });
}

window.addEventListener('load', loadData);
var selectors = document.querySelectorAll('.filter');
for(var i=0; i<selectors.length; i++){
  selectors[i].addEventListener('change', renderAll);
}

