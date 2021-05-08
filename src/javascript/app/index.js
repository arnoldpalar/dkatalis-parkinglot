'use strict'

/*const fs = require('fs');

fs.readFile('student.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});*/

const ParkingLot = require('./parking-lot');

const parkingLot = new ParkingLot(6, 2, 10, 10, './data.json');

parkingLot.park('KA-01-HH-1234');
parkingLot.park('KA-01-HH-9999');
parkingLot.park('KA-01-BB-0001');
parkingLot.park('KA-01-HH-7777');
parkingLot.park('KA-01-HH-2701');
parkingLot.park('KA-01-HH-3141');
parkingLot.leave('KA-01-HH-3141', 4);
parkingLot.status();
parkingLot.park('KA-01-P-333');
parkingLot.park('DL-12-AA-9999');
parkingLot.leave ('KA-01-HH-1234', 4);
parkingLot.leave ('KA-01-BB-0001', 6);
parkingLot.leave ('DL-12-AA-9999', 2);
parkingLot.park ('KA-09-HH-0987');
parkingLot.park ('CA-09-IO-1111');
parkingLot.park ('KA-09-HH-0123');
parkingLot.status();