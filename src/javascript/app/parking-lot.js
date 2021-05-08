const SlotArray = require('./slot-array');
const ParkingCharge = require('./parking-charge');
const {JSONDataSource} = require('./data-source')

module.exports = class ParkingLot {
    constructor(nofSlots, minHours, minCharge, chargePerHour, dataPath) {
        this.dataSource = new JSONDataSource(dataPath);
        const data = this.dataSource.loadData();
        this.slotArray = new SlotArray(data, nofSlots);

        this.parkingCharge = new ParkingCharge(minHours, minCharge, chargePerHour);

        console.log('Created parking lot with '+ nofSlots +' slots');
    }

    park(carNumber) {
        const slotNumber = this.parseSlot(this.slotArray.allocate(carNumber));

        if(slotNumber) {
            this.dataSource.storeData(this.slotArray.getData());
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
            this.dataSource.storeData(this.slotArray.getData());
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