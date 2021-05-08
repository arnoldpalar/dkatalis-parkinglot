const SlotArray = require('./slot-array');
const ParkingCharge = require('./parking-charge');

module.exports = class ParkingLot {
    constructor(nofSlots, minHours, minCharge, chargePerHour) {
        this.slotArray = new SlotArray(nofSlots);
        this.parkingCharge = new ParkingCharge(minHours, minCharge, chargePerHour);

        console.log('cCreated parking lot with '+ nofSlots +' slots');
    }

    park(carNumber) {
        const slotNumber = this.parseSlot(this.slotArray.allocate(carNumber));

        if(slotNumber) {
            console.log('Allocated slot number: ' + slotNumber);
        } else {
            console.log('Sorry, parking lot is full');
        }
    }

    leave(carNumber, totalHours) {
        let slotNumber = this.slotArray.getSlotNumber(carNumber, (o1, o2) => o1 === o2);
        slotNumber = this.parseSlot(this.slotArray.release(slotNumber));
        const totalCharge = this.parkingCharge.calculate(totalHours);

        if(slotNumber) {
            console.log(carNumber + ' with Slot Number '+ slotNumber +' is free with Charge ' + totalCharge);
        } else {
            console.log('Registration number '+ carNumber +' not found');
        }
    }

    status() {
        console.log('Slot No.  Registration No.');
        this.slotArray.print(this.parseSlot);
    }

    parseSlot(slotNumber) {
        slotNumber = parseInt(slotNumber);
        return slotNumber > -1 ? slotNumber + 1 : false;
    }
}