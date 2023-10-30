const { mongoose } = require("mongoose")

const connecDb = async(url) =>{
    return mongoose.connect(url)

}

module.exports = connecDb;