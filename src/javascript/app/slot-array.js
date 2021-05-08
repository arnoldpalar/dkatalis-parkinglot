module.exports = class SlotArray {
    constructor(size) {
        this.slots = new Array(size);
    }

    allocate(object) {
        const slotNumber = this.slots.findIndex(s => s === undefined);
        if(slotNumber > -1) {
            this.slots[slotNumber] = object;
        }

        return slotNumber;
    }

    release(slotNumber) {
        const object = this.slots[slotNumber];
        if(object){
            this.slots[slotNumber] = undefined;

            return slotNumber;
        }

        return -1;
    }

    getSlotNumber(object, eqFunc) {
        return this.slots.findIndex(o => eqFunc(object, o));
    }

    print(parsSLotNumber) {
        for(const slotNumber in this.slots) {
            console.log(parsSLotNumber(slotNumber) + '   ' + this.slots[slotNumber]);
        }
    }
}