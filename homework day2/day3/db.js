const mongoose = require('mongoose');
const connectdb = () => {
    mongoose.connect('mongodb://localhost:27017/j2')
        .then(() => {
            console.log('Connected')
        })
        .catch(err => {
            console.log("error", err)
        });
}
module.exports = {connectdb}