const mongoose = require("mongoose");



const connect = mongoose.connect(`mongodb+srv://ranaji:onlyrana@cluster0.erw7fqw.mongodb.net/pmsData?retryWrites=true&w=majority`);

module.exports = {connect}

// `mongodb+srv://ranaji:onlyrana@cluster0.erw7fqw.mongodb.net/pmsData?retryWrites=true&w=majority`