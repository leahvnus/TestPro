var Schema = require('mongoose').Schema;
var memberSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String }
}, { versionKey: false });

module.exports = db.model('member', memberSchema);