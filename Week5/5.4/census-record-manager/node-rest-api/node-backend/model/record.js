const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RecordSchema = new Schema({
    occupants: { type: String },
    house_street: { type: String },
    house_city: { type: String },
    house_state: {type: String },
    house_zip: { type: String },
    census_year: { type: String },
    census_taker: { type: String }
}, {
    collection: 'records'
});

module.exports = mongoose.model('Record', RecordSchema);
