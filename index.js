const csv = require('csv-parser')
const fs = require('fs')
const { square } = require('./transforms')

fs.createReadStream('./sample.csv')
.pipe(csv())
.on('data', (data) => {
    const number = JSON.stringify(data).slice(13,14)
    square(number)
})
