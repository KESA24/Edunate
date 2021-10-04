const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({

full_name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
amount: {
    type: Number,
    required: true,
},
reference: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('Donor', DonorSchema);

