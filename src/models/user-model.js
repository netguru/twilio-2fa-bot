const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    displayName: {
        type: String
    },
    email: {
        type: String
    },
    google: {
        type: Object
    }
});

module.exports = mongoose.model('User', UserSchema);
