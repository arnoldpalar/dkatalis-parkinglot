'use strict'

const SlotArray = require('./slot-array');
const ParkingCharge = require('./parking-charge');

const parkingLot = new SlotArray(3);
const parkingCharge = new ParkingCharge(2, 10, 10);

let slotNumber = parkingLot.allocate('car1');
if(slotNumber !== 0) throw 1;

slotNumber = parkingLot.allocate('car2');
if(slotNumber !== 1) throw 1;

slotNumber = parkingLot.allocate('car3');
if(slotNumber !== 2) throw 2;

const eqFunc = function (o1, o2) {return o1 === o2};

slotNumber = parkingLot.release(slotNumber = parkingLot.getSlotNumber('car2', eqFunc));
if(slotNumber !== 1) throw 1;

slotNumber = parkingLot.release(slotNumber = parkingLot.getSlotNumber('carX', eqFunc));
if(slotNumber !== -1) throw 1;

let charge = parkingCharge.calculate(2);
if(charge !== 10) throw 1;

charge = parkingCharge.calculate(8);
if(charge !== 70) throw 1;