'use strict'

const ParkingLot = require('./parking-lot');

const args = process.argv.slice(2);

const commands = {
    create_parking_lot: nofSlots => {
        new ParkingLot(nofSlots, 2, 10, 10, './data.json');
    },

    park: carNumber => {
        new ParkingLot(6, 2, 10, 10, './data.json').park(carNumber);
    },

    leave: (carNumber, totalHours) => {
        new ParkingLot(6, 2, 10, 10, './data.json').leave(carNumber, totalHours);
    },

    status: () => {
        new ParkingLot(6, 2, 10, 10, './data.json').status();
    }
}

const command = commands[args[0]];
if(command) {
    command(...args.slice(1));
} else {
    console.log('Command not found!');
}