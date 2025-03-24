const mongoose = require("mongoose")

const Connectdb = async() => {
    try {
        mongoose.set("strictQuery", false)
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = Connectdb;