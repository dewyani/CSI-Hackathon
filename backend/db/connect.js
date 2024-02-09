const mongoose = require("mongoose")

const connectDB = (atlas_url) => {
    return mongoose.connect(atlas_url)
}

module.exports = connectDB