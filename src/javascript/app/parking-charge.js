module.exports = class ParkingCharge {
    constructor(minHours, minCharge, chargePerHour) {
        this.minHours = minHours;
        this.minCharge = minCharge;
        this.chargePerHour = chargePerHour;
    }

    calculate(totalHours) {
        return totalHours <= this.minHours ? this.minCharge
            : this.minCharge + (totalHours - this.minHours) * this.chargePerHour
    }
}