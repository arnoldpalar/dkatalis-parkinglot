const fs = require('fs');

module.exports = {
    JSONDataSource: class JSONDataSource {
        constructor(path) {
            this.path = path;
        }

        storeData(data) {
            try {
                JSON.stringify(fs.writeFileSync(this.path, JSON.stringify(data)))
            } catch (err) {
                console.error(err)
            }
        }

        loadData() {
            try {
                return JSON.parse(fs.readFileSync(this.path, 'utf8'))
            } catch (err) {
                console.error(err)
                return false
            }
        }
    }
}