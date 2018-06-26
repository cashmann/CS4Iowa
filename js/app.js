function DistrictData (name, teachPercent, schoolsInDist, population, percentResponded) {
    this.name = name;
    this.teachPercent = teachPercent;
    this.schoolsInDist = schoolsInDist;
    this.population = population;
    this.percentResponded = percentResponded;
    DistrictData.all.push(this);
}

DistrictData.all = [];


var districtOne = new DistrictData ('District One', 32, 16, 673, 67);

var districtTwo = new DistrictData ('District Two', 50, 22, 876, 70);

var districtThree = new DistrictData ('District Three', 30, 34, 654, 45);

var districtFour = new DistrictData ('District Four', 50, 65, 867, 80);
