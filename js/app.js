function DistrictData (name, teachPercent, schoolsInDist, population, percentResponded) {
    this.name = name;
    this.teachPercent = teachPercent;
    this.schoolsInDist = schoolsInDist;
    this.population = population;
    this.percentResponded = percentResponded;
    DistrictData.all.push(this);
}

DistrictData.all = [];

DistrictData.prototype.render = function() {
    var tbody = document.getElementById('tableBody');
    var tr = document.createElement ('tr');
    tbody.appendChild (tr);
    var td = document.createElement ('td');
    td.textContent = this.name;
    tr.appendChild(td);
    var td2 =document.createElement ('td');
    td2.textContent = this.teachPercent;
    tr.appendChild(td2);
    var td3 = document.createElement ('td');
    td3.textContent = this.schoolsInDist;
    tr.appendChild(td3);
    var td4 = document.createElement ('td');
    td4.textContent = this.population;
    tr.appendChild(td4);
    var td5 = document.createElement ('td');
    td5.textContent = this.percentResponded;
    tr.appendChild(td5);



};


var districtOne = new DistrictData ('District One', 32, 16, 673, 67);
districtOne.render();

var districtTwo = new DistrictData ('District Two', 50, 22, 876, 70);
districtTwo.render();

var districtThree = new DistrictData ('District Three', 30, 34, 654, 45);
districtThree.render();

var districtFour = new DistrictData ('District Four', 50, 65, 867, 80);
districtFour.render();



